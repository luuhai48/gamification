<?php

/*
 * This file is part of fof/gamification.
 *
 * Copyright (c) 2020 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Gamification\Api\Controllers;

use Flarum\Api\Controller\ShowForumController;
use Flarum\Foundation\Application;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;
use League\Flysystem\Adapter\Local;
use League\Flysystem\Filesystem;
use League\Flysystem\MountManager;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class UploadTopImageController extends ShowForumController
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var Application
     */
    protected $app;

    /**
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings, Application $app)
    {
        $this->settings = $settings;
        $this->app = $app;
    }

    public function data(ServerRequestInterface $request, Document $document)
    {
        $request->getAttribute('actor')->assertAdmin();

        $id = Arr::get($request->getQueryParams(), 'id');

        $file = Arr::first($request->getUploadedFiles());

        $tmpFile = tempnam($this->app->storagePath().'/tmp', 'topimage.'.$id);
        $file->moveTo($tmpFile);

        if ('1' == $id) {
            $size = 125;
        } elseif ('2' == $id) {
            $size = 75;
        } else {
            $size = 50;
        }

        $manager = new ImageManager();

        $encodedImage = $manager->make($tmpFile)->resize($size, $size)->encode('png');
        file_put_contents($tmpFile, $encodedImage);

        $extension = 'png';

        $mount = new MountManager([
            'source' => new Filesystem(new Local(pathinfo($tmpFile, PATHINFO_DIRNAME))),
            'target' => new Filesystem(new Local($this->app->publicPath().'/assets')),
        ]);

        if (($path = $this->settings->get($key = "fof-gamification.topimage{$id}_path")) && $mount->has($file = "target://$path")) {
            $mount->delete($file);
        }

        $uploadName = 'topimage-'.Str::lower(Str::random(8)).'.'.$extension;

        $mount->move('source://'.pathinfo($tmpFile, PATHINFO_BASENAME), "target://$uploadName");

        $this->settings->set($key, $uploadName);

        return parent::data($request, $document);
    }
}
