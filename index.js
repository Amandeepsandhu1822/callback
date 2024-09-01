function greeting(){
    console.log('Hi, how are you');
}

// function greet(name){
//     console.log(`Hello ${name}!`);
//     greeting();
// }

function greet(name){
    setTimeout(()=> console.log(`Hello ${name}!`),5000);
    greeting();
}


greet('Saravjeet Singh');