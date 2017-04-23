<?php
ini_set('html_errors', false);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$people = [
    'lennon' => [
        'id' => 10,
        'firstName' => 'John',
        'lastName' => 'Lennon',
        'description' => 'John Lennon',
        'info' => 'Member of The Beatles.',
    ],
    'mccartney' => [
        'id' => 11,
        'firstName' => 'Paul',
        'lastName' => 'Mc Cartney',
        'description' => 'Paul Mc Cartney',
        'info' => 'Member of The Beatles.',
    ],
    'sinatra' => [
        'id' => 1,
        'firstName' => 'Frank',
        'lastName' => 'Sinatra',
        'description' => 'Paul Anka',
        'info' => 'No explenation is required. If you do not know the guy, you are dummbass.',
    ],
    'paulanka' => [
        'id' => 4,
        'firstName' => 'Paul',
        'lastName' => 'Anka',
        'description' => 'Paul Anka',
        'info' => 'Legendary performer of Diana.'
    ],
    'lisaminelli' => [
        'id' => 3,
        'firstName' => 'Lisa',
        'lastName' => 'Minelli',
        'description' => 'Lisa Minelli',
        'info' => 'Daughter of Judy Garland. Great singer and actress. Watch the Cabaret!',
    ],
];

$song = [
    'id' => null,
    'title' => null,
    'lyrics' => null,
    'authors' => [],
    'artists' => [],
    'music' => [],
    'videos' => []
];

$songs = [
    [
        'id' => 100,
        'title' => 'Yesterday',
        'authors' => [
            $people['lennon'],
            $people['mccartney'],
        ],
        'artists' => [
            $people['sinatra'],
        ],
        'lyrics' => "Yesterday, love was such an easy game to play",
        'music' => [

        ],
        'videos' => [
            [
                'id' => 500,
                'source' => 'youtube',
                'url' => 'https://www.youtube.com/watch?v=haWRUpPw_tI&autoplay=1',
                'artist' => 'The Beatles',
                'info' => 'Live performance',
            ],
            [
                'id' => 501,
                'source' => 'youtube',
                'url' => 'https://www.youtube.com/watch?v=RjpzTys0s9g&autoplay=1',
                'artist' => 'Paul Mc Cartney',
                'info' => 'Live performance',
            ],
        ],
    ],
    [
        'id' => 1,
        'title' => 'My Way',
        'authors' => [
            $people['paulanka'],
        ],
        'artists' => [
            $people['sinatra'],
        ],
        'lyrics' => "And now, the end is near
And so I face the final curtain
My friend, I'll say it clear
I'll state my case, of which I'm certain

I've lived a life that's full
I've traveled each and every highway
But more, much more than this
I did it my way

Regrets, I've had a few
But then again, too few to mention
I did what I had to do
And saw it through without exemption

I planned each charted course
Each careful step along the byway
And more, much more than this
I did it my way

Yes, there were times, I'm sure you knew
When I bit off more than I could chew
But through it all, when there was doubt
I ate it up and spit it out
I faced it all and I stood tall
And did it my way

I've loved, I've laughed and cried
I've had my fill my share of losing
And now, as tears subside
I find it all so amusing

To think I did all that
And may I say - not in a shy way
Oh no, oh no, not me
I did it my way

For what is a man, what has he got
If not himself, then he has naught
To say the things he truly feels
And not the words of one who kneels
The record shows I took the blows
And did it my way

Yes, it was my way",
        "music" => [],
        "videos" => [
            [
                'id' => 502,
                'source' => 'youtube',
                'url' => 'https://www.youtube.com/watch?v=FSNidgTKsbE&autoplay=1',
                'artist' => 'Frank Sinatra',
                'info' => 'Live performance'
            ],
        ],
    ],
    [
        'id' => 2,
        'title' => 'Fly Me To The Moon',
        'authors' => [
            $people['paulanka'],
        ],
        'artists' => [
            $people['sinatra'],
        ],
        'lyrics' => 'Fly me to the moon
Let me play among the stars
Let me see what spring is like on
A Jupiter and Mars
In other words, hold my hand
In other words, baby, kiss me

Fill my heart with song and let me sing for ever more
You are all I long for
All I worship and adore
In other words, please be true
In other words, I love you',
        "music" => [],
        "videos" => [],
    ],
    [
        'id' => 3,
        'title' => 'New York, New York',
        'authors' => [
            $people['paulanka'],
        ],
        'artists' => [
            $people['sinatra'],
            $people['lisaminelli'],
        ],
        'lyrics' => "Start spreadin' the news, I'm leavin' today
I want to be a part of it, New York, New York
These vagabond shoes are longing to stray
Right through the very heart of it, New York, New York

I want to wake up in a city that doesn't sleep
And find I'm king of the hill, top of the heap

These little town blues are melting away
I'll make a brand new start of it, in old New York
If I can make it there, I'll make it anywhere
It's up to you , New York, New York

New York, New York
I want to wake up in a city that never sleeps
And find I'm A-number-one, top of the list,
King of the hill, A-number-one

These little town blues are melting away
I'm gonna make a brand new start of it in old New York
A-a-a-nd if I can make it there, I'm gonna make it anywhere
It's up to you, New York, New York

New York",
        "music" => [
            [
                'id' => 332,
                'source' => 'youtube',
                'url' => 'https://www.youtube.com/watch?v=EUrUfJW1JGk&autoplay=1',
                'artist' => 'Frank Sinatra',
                'info' => 'Live performance'
            ],
        ],
        "videos" => [
            [
                'id' => 503,
                'source' => 'youtube',
                'url' => 'https://www.youtube.com/watch?v=xMfz1jlyQrw&autoplay=1',
                'artist' => 'Frank Sinatra',
                'info' => 'Live performance'
            ],
            [
                'id' => 50,
                'source' => 'youtube',
                'url' => 'https://www.youtube.com/watch?v=N8hVOMAmY-s&autoplay=1',
                'artist' => 'Luciano Pavarotti and Lisa Minelli',
                'info' => 'Live performance'
            ]
        ],
    ]
];

$filename = 'data.json';

if(isset($_GET['reset'])) {
    unlink($filename);
}

if(!file_exists($filename)) {
    file_put_contents($filename, json_encode($songs, JSON_PRETTY_PRINT));
}

$json = file_get_contents($filename);
$songs = json_decode($json, true);

$data = [];

$elements = [];
foreach (['PATH_INFO', 'REQUEST_URI'] as $key) {
    if (array_key_exists($key, $_SERVER)) {
        $elements = explode('/', $_SERVER[$key]);
        $elements = array_filter($elements);
        $elements = array_values($elements);
        break;
    }
}

if (count($elements) > 0) {

    $resource = $elements[0];

    switch ($resource) {
        case 'song':

            $json = file_get_contents("php://input");
            $request = json_decode($json, true);

            $temp = array_map(function($e) {
                return $e['id'];
            }, $songs);
            $id = max($temp) + 1;

            if($request['id'] === null) {
                $request['id'] = $id;
            }

            $record = array_merge($song, $request);

            array_unshift($songs, $record);

            $data = [
                'type' => 'info',
                'success' => true,
                'msg' => 'OK',
                'datetime' => date('Y-m-d H:i:s'),
                'data' => $record,
            ];

            if (count($elements) > 1) {
                $id = $elements[1];
            }

            file_put_contents($filename, json_encode($songs, JSON_PRETTY_PRINT));

            break;
        case 'lyrics':
            $data = array_map(function ($e) {
                return [
                    'id' => $e['id'],
                    'title' => $e['title'],
                ];
            }, $songs);

            if (count($data) === 0) {
                break;
            }

            if (count($elements) > 1) {

                $data = array_filter($songs, function ($e) use ($elements) {
                    return $e['id'] == $elements[1];
                });

                $data = array_values($data);
                $data = array_pop($data);
            }

            break;
        case 'videos':
        case 'music':
            $temp = array_filter($songs, function ($e) use ($resource) {
                return count($e[$resource]) > 0;
            });
            $temp = array_values($temp);

            $data = [];

            foreach ($temp as $e) {
                unset($e['authors']);
                unset($e['artists']);
                unset($e['lyrics']);
                switch ($resource) {
                    case 'videos':
                        unset($e['music']);
                        break;
                    case 'music':
                        unset($e['videos']);
                        break;
                }

                $data = array_merge($data, [$e]);
            }

            if (count($data) === 0) {
                break;
            }

            if (count($elements) > 1) {

                $data = array_filter($data, function ($e) use ($elements) {
                    return $e['id'] == $elements[1];
                });

                $data = array_values($data);
                $data = array_pop($data);
            }

            break;
        case 'authors':
        case 'artists':

            $temp = array_map(function ($e) use ($resource) {
                return $e[$resource];
            }, $songs);

            $data = [];

            foreach ($temp as $e) {
                $data = array_merge($data, $e);
            }

            if (count($data) === 0) {
                break;
            }

            $data = array_unique($data, SORT_REGULAR);
            $data = array_values($data);

            $temp = array_map(function ($e) {
                return [
                    'id' => $e['id'],
                    'name' => implode(' ', [$e['firstName'], $e['lastName']]),
                ];
            }, $data);

            if (count($elements) > 1) {

                $data = array_filter($data, function ($e) use ($elements) {
                    return $e['id'] == $elements[1];
                });

                $data = array_values($data);
                $data = array_pop($data);
            } else {
                $data = $temp;
            }

            break;
        default:

            break;
    }

    if ($data === null) {
        $data = new \stdClass();
    }
}

header("Content-Type: application/json");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

echo json_encode($data, JSON_PRETTY_PRINT);