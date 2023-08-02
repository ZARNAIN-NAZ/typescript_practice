"use strict";
//generics are reusable components
const score = [];
const string = [];
function identitiyOne(value) {
    return value;
}
function identityTwo(value) {
    return value;
}
function identitiyThree(val) {
    return val; // we can use anyword on Type for our ease
}
identitiyThree("k");
function identitiyFour(val) {
    return val;
}
// identitiyFour<Bootle>({}) // we can used anywhere our generic type by this syntax
//generics in array and arrow functions
function getSearchProducts(products) {
    const myIndex = 9;
    return products[myIndex];
}
//arrow function of upper code
const getMoreSarchProduct = (products) => {
    // const getMoreSarchProduct=(products:number[]):number=>{ // it is simple arrow funciton
    const myIndex = 9;
    return products[myIndex];
};
// function anotherFunction<T,U extends number>(val1:T, val2:U):object{ // ot only accept number in 2nd param
function anotherFunction(val1, val2) {
    return {
        val1,
        val2
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
