<!doctype html>
<html @if ($direction) dir="{{ $direction }}" @endif @if ($language) lang="{{ $language }}" @endif>

<head>
    <meta charset="utf-8">
    <title>{{ $title }}</title>

    {!! $head !!}
    <style>
        .forum-footer {
            margin: 5em auto 3em auto;
            padding-top: 3em;
            text-align: center;
            color: #7c7c7c;
            width: 61.8%;
            border-top: 1px solid #f6f3e4
        }

        .heart {
            color: red;
        }

        .fa-beat {
            animation: fa-beat 5s ease infinite;
        }

        @keyframes fa-beat {
            0% {
                transform: scale(1);
            }

            5% {
                transform: scale(1.25);
            }

            20% {
                transform: scale(1);
            }

            30% {
                transform: scale(1);
            }

            35% {
                transform: scale(1.25);
            }

            50% {
                transform: scale(1);
            }

            55% {
                transform: scale(1.25);
            }

            70% {
                transform: scale(1);
            }
        }
    </style>
</head>

<body>
    {!! $layout !!}

    <div id="modal"></div>
    <div id="alerts"></div>

    <script>
        document.getElementById('flarum-loading').style.display = 'block';
        var flarum = {
            extensions: {}
        };
    </script>

    {!! $js !!}

    <script>
        document.getElementById('flarum-loading').style.display = 'none';

        try {
            flarum.core.app.load(@json($payload));
            flarum.core.app.bootExtensions(flarum.extensions);
            flarum.core.app.boot();
        } catch (e) {
            var error = document.getElementById('flarum-loading-error');
            error.innerHTML += document.getElementById('flarum-content').textContent;
            error.style.display = 'block';
            throw e;
        }
    </script>

    {!! $foot !!}
</body>
<footer class="forum-footer">
    <div class="container">
        <div id="copyright">© <?= Date('Y'); ?> <strong>KakaCrow.</strong> All rights reserved.</div>
        <p>Beautifull Coded & Crafted with <i class="fa fa-heart heart fa-beat"></i> by <a href="https://www.twitter.com/LittleGyaani" target="_blank"><b>Little Gyaani</b></a></p>
    </div>
</footer>

</html>