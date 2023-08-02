"use strict";
function detetTypes(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("please provide id");
        return;
    }
    id.toLowerCase();
}
function xyz(val) {
    if (val) {
        if (typeof val === "object") {
            for (const a of val) {
                console.log(a);
            }
        }
        else if (typeof val === "string") {
            console.log(val);
        }
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
//instance and type predicates
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return 'fish food';
    }
    else {
        pet;
        return "bird food";
    }
}
function getShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    return shape.side * shape.side;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            shape.side * shape.side;
        //   case "rectangle":
        //     return shape.length * shape.width   
        default:
        // const  anyname:never =shape;
        // return  anyname
    }
}
