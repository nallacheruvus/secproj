class Books {
    constructor(name, auth) {
        this.name = name;
        this.auth = auth;
    }
}
const book = new Books("Ramayan", "Tulsidas");
console.log(JSON.stringify(book));
for (const k in book) {
    console.log(k + " " + book[k]);
}
class Novels {
    _novName;
    get novName() {
        return this._novName;
    }
    set novName(value) {
        this._novName = value;
    }
    _novAuth;
    get novAuth() {
        return this._novAuth;
    }
    set novAuth(value) {
        this._novAuth = value;
    }
}
const obja = new Novels();
obja.novName = "Last sigh of moor";
obja.novAuth = "Salman Rushdie";
console.log(JSON.stringify(obja));
const Cars = class {
    _carName;
    get carName() {
        return this._carName;
    }
    set carName(value) {
        this._carName = value;
    }
    _carBrand;
    get carBrand() {
        return this._carBrand;
    }
    set carBrand(value) {
        this._carBrand = value;
    }
}

const objCar = new Cars();
objCar.carName = "E Class";
objCar.carBrand = "Mercedes";
console.log(JSON.stringify(objCar));

class MyCls {
    static aa() {
        console.log("Iam static method");
    }
}
MyCls.aa();

class A {
    f1() {
        console.log("From parent");
    }
}

class B extends A {
    f2() {
        console.log("From Child");
    }
}
const bb = new B();
bb.f1();
bb.f2();
class C {
    constructor(id) {
        this.id = id;
    }
    ffff() {
        console.log("From parent");
    }
}
class D extends C {
    constructor(id, name) {
        super(id);
        this.name = name;
    }
}
const dd = new D(21, "satish");
dd.ffff();
console.log(JSON.stringify(dd));


