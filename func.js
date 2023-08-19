function product(a,b){
    console.log("Print Product Of Two Numbers :")
    return a*b
}
console.log(product(4,5))


// arrow functions
const unparameterized = () => {
    return ( "HEY IM UNPARAMETERIZED ARROW FUNCTION" );
}
console.log(unparameterized())

const parameterized = (a,b) => {
    console.log( "HEY IM PARAMETERIZED ARROW FUNCTION" );
    console.log( a+b );
}
(parameterized(60,40))