/*
Function b Outer Environment is "var myVar = 1"

function b() {
    console.log(myVar);
}

function a(){
    var myVar = 2;
    b();
}

var myVar = 1;
a();
*/

function a(){
    function b(){
        console.log(myVar);
    }

    var myVar = 2;
    b();
}

var myVar = 1;
a();