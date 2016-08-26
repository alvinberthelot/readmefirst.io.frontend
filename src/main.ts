import {ShopList} from './shoplist';

new ShopList();

class App {
  constructor() {
    console.log('App created !');
  }
}

new App();

class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

var user = new Student('Janine', 'M.', 'Doe');

function showHello(divName: string) {
    const elt = document.getElementById(divName);
    elt.innerText = greeter(user);
}

showHello('greeting');
