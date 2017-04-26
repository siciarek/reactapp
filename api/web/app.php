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
    'genre' => null,
    'createdAt' => null,
    'title' => null,
    'lyrics' => null,
    'authors' => [],
    'artists' => [],
    'music' => [],
    'videos' => []
];

$songs = [
    [
        'id' => 101,
        'genre' => 'Rock',
        'createdAt' => '2017-01-01 00:00:00',
        'title' => 'Satisfaction',
        'lyrics' => "I can't get no satisfaction, I can't get no satisfaction
'Cause I try and I try and I try and I try
I can't get no, I can't get no

When I'm drivin' in my car, and the man come on the radio
He's tellin' me more and more about some useless information
Supposed to fire my imagination
I can't get no, oh, no, no, no, hey, hey, hey
That's what I say

I can't get no satisfaction, I can't get no satisfaction
'Cause I try and I try and I try and I try
I can't get no, I can't get no

When I'm watchin' my tv and a man comes on and tell me
How white my shirts can be
But, he can't be a man 'cause he doesn't smoke
The same cigarettes as me
I can't get no, oh, no, no, no, hey, hey, hey
That's what I say

I can't get no satisfaction, I can't get girl reaction
'Cause I try and I try and I try and I try
I can't get no, I can't get no
When I'm ridin' round the world
And I'm doin' this and I'm signin' that
And I'm tryin' to make some girl, who tells me
Baby, better come back maybe next week
Can't you see I'm on a losing streak
I can't get no, oh, no, no, no, hey, hey, hey
That's what I say,

I can't get no, I can't get no
I can't get no satisfaction, no satisfaction
No satisfaction, no satisfaction",
        'authors' => [],
        'artists' => [],
        'music' => [],
        'videos' => []
    ],
    [
        'id' => 100,
        'createdAt' => '2016-10-21 00:00:00',
        'genre' => 'Ballad',
        'title' => 'Yesterday',
        'authors' => [
            $people['lennon'],
            $people['mccartney'],
        ],
        'artists' => [
            $people['sinatra'],
        ],
        'lyrics' => "Yesterday all my troubles seemed so far away.
Now it looks as though they're here to stay.
Oh, I believe in yesterday.

Suddenly I'm not half the man I used to be.
There's a shadow hanging over me.
Oh, yesterday came suddenly.

Why she had to go, I don't know, she wouldn't say.
I said something wrong, now I long for yesterday.

Yesterday love was such an easy game to play.
Now I need a place to hide away.
Oh, I believe in yesterday.

Why she had to go, I don't know, she wouldn't say.
I said something wrong, now I long for yesterday.

Yesterday love was such an easy game to play.
Now I need a place to hide away.
Oh, I believe in yesterday.

Mm mm mm mm mm mm mm",
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
        'createdAt' => '2016-10-21 00:00:00',
        'genre' => 'Ballad',
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
        'createdAt' => '2016-10-21 00:00:00',
        'genre' => 'Jazz',
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
        'createdAt' => '2016-10-21 00:00:00',
        'genre' => 'Jazz',
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

if (isset($_GET['reset'])) {
    unlink($filename);
}

if (!file_exists($filename)) {
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

            switch ($_SERVER['REQUEST_METHOD']) {
                case 'DELETE':

                    $id = $elements[1];

                    $before = count($songs);

                    $songs = array_filter($songs, function ($e) use ($id) {
                        return $e['id'] != $id;
                    });
                    $songs = array_values($songs);

                    $after = count($songs);

                    $data = [
                        'type' => 'info',
                        'success' => true,
                        'msg' => 'OK',
                        'datetime' => date('Y-m-d H:i:s'),
                        'data' => [$before, $after],
                    ];

                    break;

                case 'OPTIONS':

                    break;

                default:

                    $json = file_get_contents("php://input");
                    $request = json_decode($json, true);

                    $temp = array_map(function ($e) {
                        return $e['id'];
                    }, $songs);
                    $temp[] = 0;
                    $id = max($temp) + 1;

                    $index = null;

                    $record = [];

                    if (!(isset($request['id']) and $request['id'] !== null)) {
                        $request['id'] = $id;
                        $record = array_merge($song, $request);
                        array_unshift($songs, $record);
                    } else {

                        for ($i = 0; $i < count($songs); $i++) {
                            if ($songs[$i]['id'] == $request['id']) {
                                $record = array_merge($song, $request);
                                $songs[$i] = $record;
                                break;
                            }
                        }
                    }


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

                    break;
            }

            file_put_contents($filename, json_encode($songs, JSON_PRETTY_PRINT));

            break;
        case 'lyrics':
            $data = array_map(function ($e) {
                return [
                    'id' => $e['id'],
                    'genre' => $e['genre'],
                    'title' => $e['title'],
                    'createdAt' => isset($e['createdAt']) ? $e['createdAt'] : date('Y-m-d H:i:s'),
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