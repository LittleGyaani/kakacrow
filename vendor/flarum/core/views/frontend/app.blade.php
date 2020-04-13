<!doctype html>
<html @if ($direction) dir="{{ $direction }}" @endif @if ($language) lang="{{ $language }}" @endif>

<head>
    <!-- Meta updated by Little Gyaani (BRAHMA) {L - https://www.linkedin.com/in/brahmanmohanty G - https://www.github.com/LittleGyaani T - https://www.twitter.com/LittleGyaani F - https://www.facebook.com/brahmanmohanty} W - https://www.meetlittlegyaani.com/ E - bmohanty@live.com P/WA - +91 9853 233 951 -->

    <!-- All Require Meta Tags Starts Here -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords" content="Encore Education, Encore Bhubaneswar, Encore Group, Abroad Education Consultants, For Visa,  Study In United Kingdom (UK), Study In New Zealand, Study In Canada, Study In Australia, Study In USA, Study In Ireland,Study In Germany, Study In Singapore, Study In Malaysia, Foreign Universities and Educational Institutions, GRE, GMAT, IELTS, SAT, TOEFL, VISA APPLICATION Bhubaneswar, Study Abroad Bhubaneswar, MBBS Abroad Bhubaneswar, MBBS in China, MBBS in Bangladesh, MBBS in Philippines, AUPP, ATMC, Manipal Bhubaneswar, SARASWARIONLINE.com, Encore Consulting">
    <meta name="description" content="Encore Education Bhubaneswar is pioneered in providing pathway programs like Abroad Education, Overseas education, VISA Assistance, Foreign Studies, MBBS Abroad and only Foreign Education Company in Bhubaneswar which provides various courses for Studying Abroad like MBBS, partnered up with programs like ATMC, AUPP, Manipal and SARASWARIONLINE to make foreign studies easier and better at cheaper costs." />
    <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="author" content="LittleGyaani - BRAHMA" />
    <meta name="topic" content="Overseas Education Consultants, Study Abroad, Study MBBS Abroad, VISA Provider Bhubaneswar, Education Consultants Bhubaneswar, Encore Education Bhubaneswar, Encore Bhubaneswar, Encore Group, Education At Abroad Bhubaneswar, MBBS ABROAD, AUPP, SARASWARIONLINE, ATMC, China, Bangladesh, Philippines, VISA APPLICATION ONLINE Bhubaneswar, Study In United Kingdom (UK), Study In New Zealand, Study In Canada, Study In Australia, Study In USA, Study In Ireland,Study In Germany, Study In Singapore, Study In Malaysia, Foreign Universities and Educational Institutions, GRE, GMAT, IELTS, SAT, TOEFL, VISA APPLICATION Bhubaneswar, Study Abroad Bhubaneswar, MBBS Abroad Bhubaneswar, MBBS in China, MBBS in Bangladesh, MBBS in Philippines, AUPP, ATMC, Manipal Bhubaneswar, SARASWARIONLINE.com, Encore Consulting" />
    <meta name="Search_Engines" content="Google, MSN, Bing, Overture, AltaVista, Yahoo, AOL, Infoseek, LookSmart, Excite, Hotbot, Lycos, Magellan, CNET, DogPile, Ask Jeeves, Teoma, Snap, Webcrawler" />
    <meta name='robots' content="INDEX, FOLLOW" />
    <meta name="YahooSeeker" content="INDEX, FOLLOW" />
    <meta name="msnbot" content="INDEX, FOLLOW" />
    <meta name="googlebot" content="INDEX, FOLLOW" />
    <meta name="copyright" content="(C) Encore Education - Encore Group." />
    <meta name="owner" content="bmohanty@live.com" />
    <meta name="allow-search" content="yes" />
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <meta http-equiv="cache-control" content="max-age=0" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="expires" content="0" />
    <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
    <meta http-equiv="pragma" content="no-cache" />
    <meta name="rating" content="General">
    <meta name="audience" content="All">
    <meta name="doc-type" content="Web Page">
    <meta name="doc-class" content="Published">
    <meta property="og:locale" content="en_US" />
    <meta property='og:title' content="Study Abroad, Study MBBS Abroad, Overseas Education Consultants in Bhubaneswar - Encore Education" />
    <meta property='og:type' content="Website" />
    <meta property='og:url' content="https://www.encoregroup.in/" />
    <meta property="og:image" content="https://www.encoregroup.in/img/encore_logo.png" />
    <meta property='og:image:width' content="1200" />
    <meta property='og:image:height' content="630" />
    <meta property='og:image:type' content="image/png" />
    <meta property='og:description' content="Encore Education Bhubaneswar is pinoeered in providing pathway programs like Abroad Education, Overseas education, VISA Assistantce, Foregin Studies, MBBS ABROAD and only Foreign Education Company in Bhubaneswar which provides various courses for Studying Abroad like MBBS, partnered up with programs like ATMC, AUPP, Manipal and SARASWARIONLINE to make foregin studies easier and better at cheaper costs." />

    <!-- Cannonical Link -->
    <link rel="canonical" href="https://www.encoregroup.in/" />
    <link rel="profile" href="http://gmpg.org/xfn/11">

    <title>{{ $title }}</title>
    <link rel="shortcut icon" href="https://www.brandcrowd.com/gallery/brands/pictures/picture15642290767182.png" type="image/x-icon" />
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

<script>
    $(document).ready(function() {
        //First Console Message to Stucker
        if (typeof console != "undefined") {
            console.log("KakaCrow Forum - Official Website. (c) 2020 KakaCrow Forums.");
            console.log("Hello Stucker! Thank you for digging-in 😜. This is Little Gyaani 😎, developer of this Portal. Want to hire me!");
            console.log("Connect with me : BRAHMA | P/WA : 9853 233 951 | E : bmohanty@live.com | W : www.meetlittlegyaani.com | twitter.com/LittleGyaani | facebook.com/brahmanmohanty | linkedin.com/brahmanmohanty");
        }
    });
</script>