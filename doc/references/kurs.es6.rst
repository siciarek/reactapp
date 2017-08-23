Wywołanie wielu równoległych zapytań przez axios
================================================

var options = [{
      baseURL: 'https://some-base-url'
    , url: '/some-path&key=some-key'
    , method: 'post'
    , data: 'some-data'
}, {
      baseURL: 'https://some-base-url'
    , url: '/some-path&key=some-key'
    , method: 'post'
    , data: 'some-other-data'
}, {
      baseURL: 'https://some-base-url'
    , url: '/some-path&key=WRONG-KEY' // WRONG KEY
    , method: 'post'
    , data: 'some-other-data'
}]

axios.all([
      axios.request(options[ 0 ])
    , axios.request(options[ 1 ])
    , axios.request(options[ 2 ]).catch(function() { return false})
]).then(axios.spread(function (res1, res2, res3) {
    console.log(res1) //Respone of options[0]
    console.log(res2) //Response of options[1]
    console.log(res3) //False (When options[2] fails)
}))


Dodatkowe materiały (lista zagadnień drogiego kursu)
====================================================

https://es6.io/
https://ponyfoo.com/articles/es6-template-strings-in-depth
http://exploringjs.com/es6/index.html

Funkcje kolekcji
----------------

    * forEach
    * map
    * filter
    * find
    * some
    * every
    * reduce - służy do obliczania wyniku np. sumy

var numbers = [2, 39, 44, 11];
numbers.reduce(function(sum, number){return sum + number;}, 100) // zwróci 196

var primaryColors = [ {color: 'red'}, {color:'blue'}, {color:'green'}];
primaryColors.reduce(function(prev, color){
    prev.push(color.color);
    return prev;
},[]); // zwróci ["red", "blue", "green"]

    const condition = i => i.ram > 16

    computers.some(condition)
    computers.every(condition)


Fat arrow function
===================

// Działa:
const struct = {
    name: 'John Doe',
    getName: function() {
        return this.name;
    }
}

// Nie działa:
const struct = {
    name: 'John Doe',
    getName: () => {
        return this.name;
    }
}

Rest and spread
===============

rest ->

function addNumbers(...numbers) -> dowolna ilość argumentów, ląduje w arrayu numbers.

Destructuring
=============

const a = [1, 2, 4]

const {length} = a

length // zawiera 3

const [name, ...rest] = array

name - pierwszy element

rest - tablica z resztą elementów

const [{location}] = list // wartość argumentu location pochodząca z pierwszego elementu listy

const a = [
    [2,5],
    [8,19],
    [4,2],
]

const b = a.map(([x, y]) => ({x, y}))

b = [
    {x: 2, y: 5},
    {x: 8, y: 19},
    {x: 4, y: 2},
]
