const name="wajahat"
const age=22
let hasHobbies=true
hasHobbies=false
const summarizeUser=()=>{
    return(
        'Name is '+name+
        ', age is '+age+
        ', user has hobbies: '+hasHobbies
    )
}
// function summarizeUser(userName,userAge,userHasHobbies){
//     return(
//         'Name is '+userName+
//         ', age is '+userAge+
//         ', user has hobbies: '+userHasHobbies
//     )
// }
const add= (a,b)=>a+b
const addOne= a => a+1
const addRandom= ()=>1+2
console.log(add(2,3))
summarizeUser(name,age,hasHobbies)
console.log(addOne(1))
console.log(addRandom())

console.log(summarizeUser(name,age,hasHobbies))
