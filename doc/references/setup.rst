Konfiguracja aplikacji react from scratch
-----------------------------------------

Należy uaktualnić do najnowszej wersji ``nodejs``.

.. code-block:: bash

    $ wget -qO- https://deb.nodesource.com/setup_8.x | sudo bash - # w miejscu 8 wstawiamy nr najnowszej wersji
    $ sudo apt-get install -y nodejs                               # instalacja nodejs
    $ sudo npm rebuild node-sass --force                           # przebudowa node-sass do nowej wersji nodejs
    $ sudo npm install -g npm                                      # uaktualnienie npm

Zainstalować aplikację do tworzenia aplikacji react.

.. code-block:: bash

    $ sudo npm install -g create-react-app

Utowrzyć aplikację o nazwie np. ``reactappname``.

.. code-block:: bash

    $ create-react-app reactappname

Wejdź do katalogu projektu.

.. code-block:: bash

    $ cd reactappname

Odpalić skrypt ``test``.

.. code-block:: bash

    $ npm run test

Odpalić skrypt ``start``.

.. code-block:: bash

    $ npm run start

Jeżeli nie jesteśmy zadowoleni z tego co mamy w przygotowanych skryptach ``test``, ``start`` lub ``build`` a czujemy
się na siłach konfigurować wszystko sami możemy użyć komendy ``eject`` po której wszystkie moduły zostaną dodane bezpośrednio
do pliku ``package.json``, utworzone zostaną wszyhttps://medium.com/@dabit3/beginner-s-guide-to-react-router-53094349669

stkie skrypty konfiguracyjne (katalog ``config``) oraz skrypty wykonywalne (katalog ``scripts``). Polecenie ``eject`` można wykonać tylko raz.

Poniżej różnica między plikami ``package.json`` przed i po wykonaniu ppolecenia ``npm run eject``:

.. code-block:: bash

    $ npm run eject

Odpalić skrypt ``build`` aby zbudować paczkę dystrybucyjną aplikacji.

.. code-block:: bash

    $ npm run build

Zainstalować i odpalić serwer w celu przetestowania paczki dystrybucyjnej

.. code-block:: bash

    $ sudo npm install -g serve
    $ serve -s build

Równie dobrze może to być dowolny serwer www np. wbudowany serwer ``php``.

.. code-block:: bash

    $  php -S localhost:8080 -t build


Zakładam, że używamy przeglądarki Chrome, więc należy zainstalowąć użyteczne dodatki:

    * React DevTools
    * Redux DevTools

Tu artykuł z instrukcją obsługi http://mediatemple.net/blog/tips/a-quick-look-at-the-react-and-redux-devtools/
