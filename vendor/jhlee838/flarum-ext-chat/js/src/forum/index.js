import {extend} from 'flarum/extend';
import HeaderPrimary from 'flarum/components/HeaderPrimary';
import ChatFrame from './components/ChatFrame';

app.initializers.add('pushedx-chat', app =>
{
    var forward = [], isInitial = false;

    extend(HeaderPrimary.prototype, 'config', function(x, isInitialized, context) {
        if (isInitialized) return;

        app.pusher.then(channels => {
            channels.main.bind('newChat', data => {
                forward.push(data);
                m.redraw();
            });
            extend(context, 'onunload', () => channels.main.unbind('newChat'));
        });

        // Just loaded? Fetch last 10 messages
        if (forward.length == 0)
        {
            const data = new FormData();

            app.request(
            {
                method: 'POST',
                url: app.forum.attribute('apiUrl') + '/chat/fetch',
                serialize: raw => raw,
                data
            }).then(
                function (response) 
                {
                    for (var i = 0; i < response.data.attributes.messages.length; ++i)
                        forward.push(response.data.attributes.messages[i]);
  
                    isInitial = true;
                    m.redraw();
                }
            );
        }
    });

    /**
     * Add the upload button to the post composer.
     */
    extend(HeaderPrimary.prototype, 'items', function(items) 
    {
        var forwarded = forward.slice(0);
        m.redraw.strategy('diff');
        items.add('pushedx-chat-frame', <ChatFrame forward={forwarded} isInitial={isInitial} />);
        forward.splice(0, forward.length);

        isInitial = false;
    });
});
