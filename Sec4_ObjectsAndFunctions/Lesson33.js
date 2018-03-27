//Convert object literal to JSON
var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}

console.log(JSON.stringify(objectLiteral));

//Convert JSON to object literal
var jsonValue = JSON.parse(
'{"firstname":"Mary","isAProgrammer":true}'
);

console.log(jsonValue);