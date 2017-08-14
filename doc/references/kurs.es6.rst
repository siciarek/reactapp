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

    const condition = (e) => e.ram > 16

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
