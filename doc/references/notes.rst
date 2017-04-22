Spostrzerzenia i notatki przy nauce react redux
-----------------------------------------------

    * Zapomnij o średnikach!
    * Sam ``react`` polega głównie na obiekcie Component, nasze komponenty dziedziczą po nim a konkretna implementacja robiona jest przy użyciu języka Babel.
    * Dane do komponentów przekazujemy jako atrybuty (tak jak w xml)
    * Piszemy wyłącznie w ES
    * Plik konfiguracyjny!
    * jeżeli odwołujemy się przy imporcie do katalogu, to kod jest reprezentowany przez plik ``index.js`` wewnątrz tegoż katalogu.
    * Komponenty zawierają fragmenty wizualne
    * Typizacja wejść funkcji : https://facebook.github.io/react/docs/typechecking-with-proptypes.html
    * Stan aplikacji to jeden duży obiek javascript przechowywany w jednym miejscu (storage) i zawierający kompletny stan aplikacji. obiekt ten nie podlega zmianom, za każdym zapisem zapisywany jest od nowa kompletny obiekt statu.
    * Grube sprawy jak wyciąganie rekordów z webserwisów odbywają się w "akcjach"
    * Co to jest ``EventEmiter``
    * Typy akcji powinny być unikalne w skali całego projektu.
    * Typizacja props w komponentach za pomocą 'prop-types' może być bardzo przydatna, zwłaszcza gdy wartości propsów przekazywane do argumentów komponentu są generowane przez funkcje.
    * ROUTING UWAGA

DOBRZE:

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



Alternatywne skrypty do ``create-react-app``
============================================

https://www.npmjs.com/package/custom-react-scripts


Docs
====

http://redux.js.org/

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

https://www.youtube.com/watch?v=MhkGQAoc7bc&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b


Smart and dumb Component
========================

https://jaketrent.com/post/smart-dumb-components-react/


Material
========

https://github.com/callemall/material-ui
http://www.material-ui.com/
https://github.com/callemall/material-ui/tree/master/docs

Auth
====

