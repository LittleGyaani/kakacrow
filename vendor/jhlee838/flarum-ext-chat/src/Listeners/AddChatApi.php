<?php
/*
 * This file is part of xelson/flarum-ext-chat
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Xelson\Chat\Listeners;

use Xelson\Chat\Api\Controllers\ChatController;
use Xelson\Chat\Api\Controllers\FetchChatController;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Event\ConfigureApiRoutes;
use Flarum\Api\Event\Serializing;
use Illuminate\Events\Dispatcher;
use Flarum\Settings\SettingsRepositoryInterface;

class AddChatApi
{
    protected $settings;
    
    public function __construct(SettingsRepositoryInterface $settings) 
    {
        $this->settings = $settings;
    }

    /**
     * Subscribes to the Flarum api routes configuration event.
     *
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureApiRoutes::class, [$this, 'configureApiRoutes']);
        $events->listen(Serializing::class, [$this, 'prepareApiAttributes']);
    }

    /**
     * Registers our routes.
     *
     * @param ConfigureApiRoutes $event
     */
    public function configureApiRoutes(ConfigureApiRoutes $event)
    {
        $event->post('/chat/post', 'pushedx.chat.post', ChatController::class);
        $event->post('/chat/fetch', 'pushedx.chat.fetch', FetchChatController::class);
    }

    /**
     * Gets the api attributes and makes them available to the forum.
     *
     * @param Serializing $event
     */
    public function prepareApiAttributes(Serializing $event)
    {
        if ($event->isSerializer(ForumSerializer::class)) 
        {
            $event->attributes['pushedx-chat.canchat'] = $event->actor->can('pushedx-chat.canchat');
            $event->attributes['pushedx-chat.charlimit'] = $this->settings->get('pushedx-chat.charlimit');
        }
    }
}
