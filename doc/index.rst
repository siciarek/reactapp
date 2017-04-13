Konfiguracja aplikacji react from scratch
-----------------------------------------

Należy uaktualnić do najnowszej wersji ``nodejs``.

..code:: bash

    $ wget -qO- https://deb.nodesource.com/setup_7.x | sudo bash -
    $ sudo apt-get install -y nodejs

Należy uaktualnić do najnowszej wersji ``npm``.

..code:: bash

    $ sudo npm install -g npm

Zainstalować aplikację do tworzenia aplikacji react.

..code:: bash

    $ sudo npm install -g create-react-app

Utowrzyć aplikację o nazwie np. ``reactappname``.

..code:: bash

    $ create-react-app reactappname

Wejdź do katalogu projektu.

..code:: bash

    $ cd reactappname

Odpalić skrypt ``test``.

..code:: bash

    $ npm run test

Odpalić skrypt ``start``.

..code:: bash

    $ npm run start

Jeżeli nie jesteśmy zadowoleni z tego co mamy w przygotowanych skryptach ``test``, ``start`` lub ``build`` a czujemy
się na siłach konfigurować wszystko sami możemy użyć komendy ``eject`` po której wszystkie moduły zostaną dodane bezpośrednio
do pliku ``package.json``, utworzone zostaną wszyhttps://medium.com/@dabit3/beginner-s-guide-to-react-router-53094349669

stkie skrypty konfiguracyjne (katalog ``config``) oraz skrypty wykonywalne (katalog ``scripts``). Polecenie ``eject`` można wykonać tylko raz.

Poniżej różnica między plikami ``package.json`` przed i po wykonaniu ppolecenia ``npm run eject``:

..code:: bash

    $ npm run eject

Odpalić skrypt ``build`` aby zbudować paczkę dystrybucyjną aplikacji.

..code:: bash

    $ npm run build

Zainstalować i odpalić serwer w celu przetestowania paczki dystrybucyjnej

    $ sudo npm install -g serve
    $ serve -s build

Równie dobrze może to być dowolny serwer www np. wbudowany serwer ``php``.

    $  php -S localhost:8080 -t build


Struktura
=========

https://marmelab.com/blog/2015/12/17/react-directory-structure.html

https://medium.com/@dabit3/beginner-s-guide-to-react-router-53094349669

Przykładowe użycie redux
========================

http://redux.js.org/docs/basics/ExampleTodoList.html
