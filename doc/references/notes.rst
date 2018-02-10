Bootstrap na wypasie (tylko CSS)
================================

http://bulma.io/


Nazwy modułowe
==============

https://www.npmjs.com/package/babel-plugin-module-resolver

można zastąpić zmienną NODE_PATH=./src

https://medium.com/@ktruong008/absolute-imports-with-create-react-app-4338fbca7e3d


Testowanie rx online
====================

https://regex101.com/

Testowanie
==========

http://www.hammerlab.org/2015/02/14/testing-react-web-apps-with-mocha/

Mocha sucks (starocie, za to chai i owszem)


Konferencja desmart
-------------------

Obsługa redux-promise-middleware (skróty nazw akcji PENDING, REJECTED, FULFILLED)

https://github.com/acdlite/flux-standard-action



Pierwszy
========
    * Wszystkie funkcje na arrow functions nie params tylko gotowe

function Tada(props) { - NIE

const Tada = ({title, icon}) => { - TAK

Drugi
=====
    * Styleguide (opis jak komponenty mają wyglądać)
    * Komunikacja (Jira)
    * Wydajność (
    * Storybook (apka)


Instalacja storybook
====================

npm i -g getstorybook

cd songbook

npm i --save-dev @kadira/storybook

getstorybook

npm run storybook


pluginy:

    * KNOBS (dodaje pola formularza)
    * Storyshots

style globalne:

    plik .storybook/preview.head.html


framework "bulma"





Spostrzerzenia i notatki przy nauce react redux
-----------------------------------------------

    * Na produkcji, jeżeli mamy Apache, KONIECZNIE trzeba użyć pliku .htaccess:

TODO: wersja dla nginx

.. code-block:: apache

    # Map all non-existing URLs to be processed by index.html,
    # so any URL that doesn't point to a JS file, CSS file, etc etc...
    # goes through my React app.

    <IfModule mod_rewrite.c>
      RewriteEngine on
      RewriteCond %{REQUEST_FILENAME} !-f
      RewriteCond %{REQUEST_FILENAME} !-d
      RewriteCond %{REQUEST_URI} !=/favicon.ico
      RewriteRule ^ index.html [L]
    </IfModule>

    W przeciwnym razie każde odświeżenie strony na routingu, będzie powodować 404.

    * Do daty używamy formatu ISO 8601 'YYYY-MM-DD' https://www.iso.org/iso-8601-date-and-time-format.html
    * W reduxowym State trzymamy tylko proste wartości, bo przy zapisie stanu dane np. typu Date() nie odtworzą nam się dobrze
    * "single source of truth"
    * Obkumać https://github.com/pburtchaell/redux-promise-middleware i https://github.com/gaearon/redux-thunk
    * Zapomnij o średnikach!
    * Sam ``react`` polega głównie na obiekcie Component, nasze komponenty dziedziczą po nim
      a konkretna implementacja robiona jest przy użyciu języka Babel.
    * Dane do komponentów przekazujemy jako atrybuty (tak jak w xml)
    * Piszemy wyłącznie w ES
    * Plik konfiguracyjny!
    * jeżeli odwołujemy się przy imporcie do katalogu, to kod jest reprezentowany przez plik ``index.js`` wewnątrz tegoż katalogu.
    * Komponenty zawierają fragmenty wizualne
    * Typizacja wejść funkcji : https://facebook.github.io/react/docs/typechecking-with-proptypes.html
    * Stan aplikacji to jeden duży obiekt javascript przechowywany w jednym miejscu (storage) i zawierający kompletny stan aplikacji. obiekt ten nie podlega zmianom, za każdym zapisem zapisywany jest od nowa kompletny obiekt statu.
    * Grube sprawy jak wyciąganie rekordów z webserwisów odbywają się w "akcjach"
    * Co to jest ``EventEmiter``
    * Typy akcji powinny być unikalne w skali całego projektu!
    * Typizacja props w komponentach za pomocą 'prop-types' może być bardzo przydatna,
      zwłaszcza gdy wartości propsów przekazywane do argumentów komponentu są generowane przez funkcje.
    * ROUTING UWAGA
ŹLE:

.. code-block:: xml

    <Route path="/lyrics/add" component={LyricsEditor}/>
    <Route path="/lyrics/:id" component={LyricsItem}/>

DOBRZE:

.. code-block:: xml

    <Route path="/lyrics/:id" component={LyricsItem}/>
    <Route path="/lyrics/add" component={LyricsEditor}/>


.. code-block:: javascript

    /* global config file */

    export default {
      apiUrl: 'http://localhost:8000'
    };

    /* import wszystkich funkcji */
    import * as user from '../userActions'
    user.setUserName('Jon')

    // Pokazanie aktywnej pozycji w siedebarze
    const path = this.props.router.getCurrentLocation().pathname


Zmiana wartości boolowskich
===========================

.. code-block:: javascript

    toggleValue = (event) => {
        const key = event.nativeEvent.target.id
        const val = !this.props.current[key]

        this.props.update(key, val)
    }

    updateBooleanValue = (proxy, value) => {
        const key = 'public'
        const val =  value

        this.props.update(key, val)
    }


    <Toggle
        id="public"
        label="Profile visible to the public"
        labelPosition="right"
        defaultToggled={this.props.current.public}
        onToggle={this.toggleValue}
    />

    <br/>

    <Checkbox
        label="Profile visible to the public"
        labelPosition="right"
        defaultChecked={this.props.current.public}
        onCheck={this.updateBooleanValue}
    />


Ciekawe
=======

    * renderowanie reduxa po stronie serwera
    * Co to jest biblioteka "moment"
    * http://stackoverflow.com/questions/491052/minimum-and-maximum-value-of-z-index
    * https://github.com/reactjs/react-router-redux


Redux middleware
================

.. code-block::javascript

    /**
     * Sample middleware
     *
     * ES6
     */
    const simpleLogger = store => next => action => {
      console.log(action.type)

      // console.group(action.type)
      // console.info('dispatching', action)
      let result = next(action)
      // console.log('next state', store.getState())
      // console.groupEnd(action.type)

      return result
    }

    /**
     * Sample middleware
     * Vanilla JS
     */
    function simpleLogger(store) {
        return function(next) {
            return function(action) {
                console.log(action.type)

                // console.group(action.type)
                // console.info('dispatching', action)
                var result = next(action)
                // console.log('next state', store.getState())
                // console.groupEnd(action.type)

                return result
            }
        }
    }

    /**
     * Sample middleware
     * ES6.
     *
     * @param store
     * @returns {function(*): function(*=)}
     */
    const sampleMiddleware = store => next => action => {
      console.group(action.type)

      console.info('dispatching', action)
      let result = next(action)
      console.log('next state', store.getState())

      console.groupEnd(action.type)

      return result
    }

export default sampleMiddleware
Własne walidatory PropType
==========================

https://www.ian-thomas.net/custom-proptype-validation-with-react/


Alternatywne skrypty do ``create-react-app``
============================================

https://www.npmjs.com/package/custom-react-scripts


Docs
====

http://redux.js.org/
http://es6-features.org

Struktura
=========

https://marmelab.com/blog/2015/12/17/react-directory-structure.html

https://medium.com/@dabit3/beginner-s-guide-to-react-router-53094349669


Przykładowe użycie redux
========================

http://redux.js.org/docs/basics/ExampleTodoList.html

https://www.codementor.io/reactjs/tutorial/intro-to-react-redux-pros

https://facebook.github.io/flux/docs/in-depth-overview.html#content

http://jpsierens.com/simple-react-redux-application/


Świetne wideo
~~~~~~~~~~~~~

https://egghead.io/courses/getting-started-with-redux
https://www.youtube.com/watch?v=MhkGQAoc7bc&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b


Smart and dumb Component
========================

https://jaketrent.com/post/smart-dumb-components-react/
https://facebook.github.io/react/docs/forms.html#controlled-components
https://facebook.github.io/react/docs/lifting-state-up.html

Material
========

https://github.com/callemall/material-ui
http://www.material-ui.com/
https://github.com/callemall/material-ui/tree/master/docs
http://redux-form.com/6.0.0-rc.1/examples/material-ui/

Layout
======

https://github.com/STRML/react-grid-layout

Auth
====

https://stormpath.com/blog/stormpaths-new-path
http://blog.slatepeak.com/build-a-react-redux-app-with-json-web-token-jwt-authentication/
http://stackoverflow.com/questions/33773477/jwt-json-web-token-in-php-without-using-3rd-party-library-how-to-sign

Testowanie
==========
http://redux.js.org/docs/recipes/WritingTests.html
https://jasmine.github.io/edge/node.html
http://revelry.co/react-testing-with-jasmine/
https://facebook.github.io/react/docs/test-utils.html#iscompositecomponentwithtype
https://medium.com/@TuckerConnelly/good-practices-for-testing-react-apps-3a64154fa3b1
https://www.npmjs.com/package/react-test-renderer
