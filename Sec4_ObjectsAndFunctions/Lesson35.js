greet();

//function statement
function greet(){
    console.log('hi');
}


//anonymous function = variable name references function object, so there is no need to name function
//function expression
var anonymousGreet = function(){
    console.log('hi');
};

anonymousGreet();

function log(a){
    a();
}

// log(3);

// log({
//     greeting:'hi'
// });

log(
    //function expression
    function(){
        console.log('hi');
    }
);


