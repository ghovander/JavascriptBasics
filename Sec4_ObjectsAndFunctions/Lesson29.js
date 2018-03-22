//Object literal syntax
var person = {firstname:'Tony', lastname:'Alicea'};
console.log(person);

//Object literal syntax - nested objects
var Tony = {
    firstname: 'Tony',
    lastname: 'Alicea',
    address: {
        street: '111 Main St.',
        city: 'New York',
        state: 'NY'
    }
}
console.log(Tony);

function greet(person){
    console.log('Hi'+person.firstname);
}

greet(Tony);

greet({firstname: 'Mary', lastname: 'Doe'});

//New method of creating object
person = new Object();
person.firstname = "Tony";
person.lastname = "Alicea";

