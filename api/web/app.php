<?php
define('DELAY', 1);

ini_set('html_errors', false);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include_once 'data.php';

$user = [
    'token' => null,
    'id' => 0,
    'username' => null,
    'email' => null,
    'firstName' => 'Erma',
    'lastName' => 'Cassini',
    'authenticated' => false,
    'error' => '',
    'message' => '',
];

$users = [
    'siciarek:pass' => [
        'id' => 2345,
        'skillLevel' => 12,
        'public' => true,
        'gender' => 'male',
        'dateOfBirth' => '1966-10-21 15:10:00',
        'firstName' => 'Jacek',
        'lastName' => 'Siciarek',
        'username' => 'jsiciarek',
        'email' => 'siciarek@gmail.com',
        'info' => 'Spoko ziom.',
        'authenticated' => true,
        'error' => '',
        'message' => '',
    ],
    'colak:pass' => [
        'id' => 3456,
        'public' => false,
        'skillLevel' => 32,
        'gender' => 'male',
        'dateOfBirth' => '1966-10-21 15:10:00',
        'firstName' => 'Czesław',
        'lastName' => 'Olak',
        'username' => 'colak',
        'email' => 'colak@gmail.com',
        'info' => null,
        'authenticated' => true,
        'error' => '',
        'message' => '',
    ],
    'molak:pass' => [
        'id' => 4928,
        'skillLevel' => 44,
        'public' => true,
        'gender' => 'female',
        'dateOfBirth' => '1966-10-21 15:10:00',
        'firstName' => 'Marianna',
        'lastName' => 'Olak',
        'username' => 'molak',
        'email' => 'molak@gmail.com',
        'info' => null,
        'authenticated' => true,
        'error' => '',
        'message' => '',
    ],
    'zblues:pass' => [
        'id' => 8928,
        'skillLevel' => 61,
        'public' => true,
        'gender' => 'male',
        'dateOfBirth' => '1966-10-21 15:10:00',
        'firstName' => 'Zenek',
        'lastName' => 'Blues',
        'username' => 'zblues',
        'email' => 'zenek.blues@gmail.com',
        'info' => null,
        'authenticated' => true,
        'error' => '',
        'message' => '',
    ],
];

$filename = 'data.json';
$userFilename = 'user.json';

if (isset($_GET['reset'])) {
    if (file_exists($filename)) {
        unlink($filename);
    }
    if (file_exists($userFilename)) {
        unlink($userFilename);
    }
}

if (!file_exists($filename)) {
    file_put_contents($filename, json_encode($songs, JSON_PRETTY_PRINT));
}

if (!file_exists($userFilename)) {
    file_put_contents($userFilename, json_encode($user, JSON_PRETTY_PRINT));
}

$json = file_get_contents($filename);
$songs = json_decode($json, true);

$data = [];

$elements = [];
$query = null;

foreach (['PATH_INFO', 'REQUEST_URI'] as $key) {
    if (array_key_exists($key, $_SERVER)) {
        $path = $_SERVER[$key];
        $temp = explode('?', $_SERVER[$key]);
        if(count($temp) > 1) {
            $path = $temp[0];
            $query = $temp[1];
        }
        $elements = explode('/', $path);
        $elements = array_filter($elements);
        $elements = array_values($elements);
        break;
    }
}

function base64url_encode($data)
{
    return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
}

function getJwtToken()
{
    //build the headers
    $headers = ['alg' => 'HS256', 'typ' => 'JWT'];
    $headers_encoded = base64url_encode(json_encode($headers));

    //build the payload
    $payload = ['sub' => '1234567890', 'name' => 'John Doe', 'admin' => true];
    $payload_encoded = base64url_encode(json_encode($payload));

    //build the signature
    $key = md5(null);
    $data = sprintf('%s.%s', $headers_encoded, $payload_encoded);
    $signature = hash_hmac('SHA256', $data, $key, true);
    $signature_encoded = base64url_encode($signature);

    //build and return the token
    $token = "$headers_encoded.$payload_encoded.$signature_encoded";
    return $token;
}

if (count($elements) > 0) {

    $resource = $elements[0];

    switch ($resource) {
        case 'user':

            $token = getJwtToken();

            if (!isset($elements[1])) {
                $data = [];
            } else {
                switch ($elements[1]) {
                    case 'login' :

                        $json = file_get_contents("php://input");
                        $request = json_decode($json, true);

                        $username = $request['username'];
                        $password = $request['password'];

                        $key = sprintf('%s:%s', $username, $password);

                        if (array_key_exists($key, $users)) {

                            $token = getJwtToken();

                            $data = array_merge($user, $users[$key]);

                            $data['token'] = $token;
                        } else {
                            $data = array_merge($user, []);
                        }

                        file_put_contents($userFilename, json_encode($data, JSON_PRETTY_PRINT));
                        break;
                    case 'logout' :
                        $json = file_get_contents($userFilename);
                        $data = json_decode($json, true);

                        $data['token'] = null;
                        $data['authenticated'] = false;
                        file_put_contents($userFilename, json_encode($data, JSON_PRETTY_PRINT));
                        break;
                    case 'auth' :
                        $json = file_get_contents($userFilename);
                        $data = json_decode($json, true);

                        if ($_SERVER['REQUEST_METHOD'] === 'GET') {

                            $headers = getallheaders();

                            $data['authenticated'] = $data['token'] === $headers['Authorization'];

                            if ($data['authenticated'] === false) {
                                $data['token'] = null;
                            }
                        }
                        file_put_contents($userFilename, json_encode($data, JSON_PRETTY_PRINT));
                        break;
                    default:
                        $id = $elements[1];

                        if ($_SERVER['REQUEST_METHOD'] === 'PUT') {

                            $json = file_get_contents("php://input");
                            $request = json_decode($json, true);

                            $temp = $request['data'];
                            $temp['id'] = intval($id);
                            unset($temp['error']);
                            unset($temp['message']);

                            $temp['token'] = $request['headers']['Authorization'];
                            $temp['authenticated'] = true;

                            file_put_contents($userFilename, json_encode($temp, JSON_PRETTY_PRINT));

                            $data = [
                                'type' => 'info',
                                'success' => true,
                                'msg' => 'Updated successfully',
                                'datetime' => date('Y-m-d H:i:s'),
                                'data' => $temp,
                            ];
                        }

                        break;

                }
            }


            break;
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
$temp = explode('=', $query);


if (
    in_array($resource, ['lyrics', 'authors', 'artists', 'videos', 'music'])
    AND !empty($query)
) {

    $temp = explode('=', $query);

    if ($temp[0] === 'swap') {
        list($first, $second) = explode(',', $temp[1]);
        $first *= 1;
        $second *= 1;

        $temp = $data[$first];
        $data[$first] = $data[$second];
        $data[$second] = $temp;
    }
}

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

sleep(DELAY);

echo json_encode($data, JSON_PRETTY_PRINT);