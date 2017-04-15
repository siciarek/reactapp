Intro
-----

Niniejsza dokumentacja przeznaczona jest dla osób, które chcą się dowiedzieć o co tak na prawdę chodzi
we frontendowym frameworku ``React`` z zastosowaniem podejścia ``redux``.
Odbiorcami powinni być programiści, którzy nie wiele na ten temat wiedzą ale posiadają za to
doświadczenie w pracy z frameworkami backendowymi MVC (Symfony, Phalcon itp.) z podstawową znajomością
JavaScript. Podejście ``react-redux`` jest bardzo dalekie od klasycznego ``MVC`` więc, nawet osoby
z dużym dotyczasowym doświadczeniem zawodowym mogą mieć problem z chwyceniem w lot o co chodzi.
Sam byłem taką osobą i wiem ile zajęło mi przegryzienie się przez pierwszą warstwę, szczególnie
irytujące było to, że większośc podręczników była napisana dla osób z doświadczeniem w tym nowym podejściu,
raczej nie wiele znalazłem dla tak na prawdę początkujących.

Założyłem sobie, że napiszę coś from scratch, aczkolwiek, pewne podstawowe doświadczenie np. w zakresie
natywnego kodu JavaScript jest niezbędne.

Od czas do czasu będzie się pojawiać nazwa ``EcmaScript``.
Ma razie niech ona będzie dla was synonimem ``JavaScript``.
Co to jest i czym się różni od ``JavaScript`` jest poza zakresem niniejszej publikacji.

Aby zacząć przygodę z ``react-redux``, należy mieć dużą świadomość w jaki sposób,
JavaScript zarządza zmiennymi (w szczególności jak zmienne są do siebie przypisywane)
aby postępować zgodnie z jedną z podstawowych zasad, na których oparta jest architektura
``react-redux`` zwaną **Immutable Data Management**.

Na początek, dla przypomnienia jak wygląda domyśne zarządzanie zmiennymi w ``JavaScript``.

Dla uproszczenia przykładów zakładamy, że zmienne ``a`` i ``b`` zostały wcześniej zainicjowane. Zapis
bez średników jest po to by przyzwyczaić oko do pisowni ``EcmaScript``.

Fragmenty kodu są gotowe do kopiowania i wklejania w konsolę przeglądarek, ja testowałem każdy przykład na ``Chrome``.

Typy proste
===========

Jeżeli zmienna przechowuje typ prosty (numeryczny, łańcuchowy, boolowski), to domyślne przekazanie jej
wartości do innej zmiennej odbywa się **przez wartość**.
Poniżej jak zachowuje się domyślne przypisanie zmiennych zawierających typy złożone.

.. code-block:: javascript

    // Numeric:

    a = 4
    b = a

    console.log(JSON.stringify([a, b])) // -> [4, 4]

    b = 10.5

    console.log(JSON.stringify([a, b])) // -> [4, 10.5]

    // String:

    a = 'Joe'
    b = a

    console.log(JSON.stringify([a, b])) // -> ["Joe", "Joe"]

    b = 'Jane'

    console.log(JSON.stringify([a, b])) // -> ["Joe", "Jane"]

    // Boolean:

    a = true
    b = a

    console.log(JSON.stringify([a, b])) // -> [true, true]

    b = false

    console.log(JSON.stringify([a, b])) // -> [true, false]

Typy żłożone
============

Jeżeli zmienna przechowuje typ złożony, taki jak tablica (Array) lub obiekt (Object), domyślne prekazywanie jej wartości odbywa się
**przez referencję**. Takie przekazywanie może spowodować nieporządane efekty u programistów przyzwyczajonych do innego domyślnego
sposobu przekazywania. Poniżej jak zachowuje się domyślne przypisanie zmiennych zawierających typy złożone.

.. code-block:: javascript

    // Object:

    a = { id: 1, name: 'Jane' }
    b = a

    console.log(JSON.stringify([a, b])) // -> [{ "id": 1, "name": "Jane" }, { "id": 1, "name": "Jane" }]

    b.name = 'Joe'

    console.log(JSON.stringify([a, b])) // -> [{ "id": 1, "name": "Joe" }, { "id": 1, "name": "Joe" }]

    // Array push:

    a = [1, 2, 3]
    b = a

    console.log(JSON.stringify([a, b])) // -> [[1, 2, 3], [1, 2, 3]]

    b.push(10.5)

    console.log(JSON.stringify([a, b])) // -> [[1, 2, 3, 10.5], [1, 2, 3, 10.5]]

    // Array pop:

    a = [1, 2, 3]
    b = a

    console.log(JSON.stringify([a, b])) // -> [[1, 2, 3], [1, 2, 3]]

    b.pop()

    console.log(JSON.stringify([a, b])) // -> [[1, 2], [1, 2]]

W świecie opisywanym przez ``react`` i ``redux`` obowiązuje zasada niezmieniania stanu a wyłącznie go nadpisywania,
co w skócie wymaga podawaniu nowej wartości zamias zmiany poprzedniej (immutable) co, fizycznie, sprowadza się
do przypisywania zmiennych przez wartość, czyli kopiując element z jednej zmiennej do drugiej.
Powyższe przykłady, aby osiągnąć wymagany efekt należy zmodyfikować następująco:

.. code-block:: javascript

    // Object:

    a = { id: 1, name: 'Jane' }
    b = Object.assign({}, a)

    console.log(JSON.stringify([a, b])) // -> [{ "id": 1, "name": "Jane" }, { "id": 1, "name": "Jane" }]

    b.name = 'Joe'

    console.log(JSON.stringify([a, b])) // -> [{ "id": 1, "name": "Jane" }, { "id": 1, "name": "Joe" }]

    // Powyższy zapis można skrócić, tworząc od razu zmodyfikowaną kopię:

    a = { id: 1, name: 'Jane' }
    b = Object.assign({}, a, {name: 'Joe'})

    console.log(JSON.stringify([a, b])) // -> [{ "id": 1, "name": "Jane" }, { "id": 1, "name": "Joe" }]

    // Array push:

    a = [1, 2, 3]
    b = a.concat()

    console.log(JSON.stringify([a, b])) // -> [[1, 2, 3], [1, 2, 3]]

    b.push(10.5)

    console.log(JSON.stringify([a, b])) // -> [[1, 2, 3], [1, 2, 3, 10.5]]

    // Powyższy zapis można skrócić, tworząc od razu zmodyfikowaną kopię:

    a = [1, 2, 3]
    b = a.concat([10.5])

    console.log(JSON.stringify([a, b])) // -> [[1, 2, 3], [1, 2, 3, 10.5]]

    // Array pop:

    a = [1, 2, 3]
    b = a.concat()

    console.log(JSON.stringify([a, b])) // -> [[1, 2, 3], [1, 2, 3]]

    b.pop()

    console.log(JSON.stringify([a, b])) // -> [[1, 2, 3], [1, 2]]


Metody operujące na tablicach, które zwracają kopię tablicy, na której zostały użyte to:

    * concat
    * filter
    * reduce
    * slice
    * splice
    * map

Uwaga na obiekty zawierające tablice
====================================

Obiekty zawierające tablice, pomimo przekazania ich przez wartość nadal zachowują referencje do tablic w obiekcie pierwotnym.

.. code-block:: javascript

    // Object:

    a = { name: 'Jane', things: [1, 2, 3, 4] }
    b = Object.assign({}, a)

    console.log(JSON.stringify([a, b])) // -> [{ "name": "Jane", "things": [1, 2, 3, 4] }, { "name": "Jane", "things": [1, 2, 3, 4] }]

    b.name = 'Joe'
    b.things.push(10.5)

    console.log(JSON.stringify([a, b])) // -> [{ "name": "Jane", "things": [1, 2, 3, 4, 10.5] }, { "name": "Joe", "things": [1, 2, 3, 4, 10.5] }]

Aby osiągnąć w pełni ``immutable`` obiekt należy dodać jedną linijkę:

.. code-block:: javascript

    // Object:

    a = { name: 'Jane', things: [1, 2, 3, 4] }
    b = Object.assign({}, a)

    console.log(JSON.stringify([a, b])) // -> [{ "name": "Jane", "things": [1, 2, 3, 4] }, { "name": "Jane", "things": [1, 2, 3, 4] }]

    b.things = b.things.concat() // <- dodana linia
    b.name = 'Joe'
    b.things.push(10.5)

    console.log(JSON.stringify([a, b])) // -> [{ "name": "Jane", "things": [1, 2, 3, 4] }, { "name": "Joe", "things": [1, 2, 3, 4, 10.5] }]

Zapis skrócony
==============

Dla ``Object.assign`` i ``Array.concat`` istnieją zapisy skrócone, niektóre dostępne dla środowisk obsługujących ES6:

.. code-block:: javascript

    // Array:

    // zamiast:
    b = a.concat()

    // można:
    b = [...a]

    // zamiast:
    b = a.concat(10.5)

    // można:
    b = [...a, 10.5]


    // Object (tylko ES6):

    // zamiast:
    b = Object.assign({}, a)

    // można:
    b = {...a}

    // zamiast:
    b = Object.assign({}, a, {name: "John"})

    // można:
    b = {...a, name: "John"}
