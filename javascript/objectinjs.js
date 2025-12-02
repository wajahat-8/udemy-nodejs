const person =  {
    name:'wajahat',
    age:22,
    //best short
    greet(){
        console.log('Hi, I am '+ this.name)
    }
////
 //Arrow functions do not have their own this.
// this refers to the outer scope (global object in browsers, or undefined in strict mode), not person.//
////
    // greet:()=>{
    //     console.log('Hi, I am '+ this.name)
    // }
  //useful
    // greet:function(){
    //     console.log('Hi, I am '+ this.name)
    // }
}
console.log(person)
person.greet()
const copiedPerson= {...person}
console.log(copiedPerson)
const printName=({name})=>{
    console.log(name)
}   
printName(person)
const {name,age}=person
console.log(name,age)