const hobbies=['Sports','Cooking']
// for (let hobby of hobbies){
//     console.log(hobby)
// }
// console.log(hobbies.map(hobby=>'Hobby: '+hobby))
// for (let hobby in hobbies){
//     console.log(hobby)
// }
// hobbies.push('Reading')
// console.log(hobbies)
const coppiedHobbies=hobbies.slice()
console.log(coppiedHobbies)
const coppiedHobbies2=[...hobbies]
console.log(coppiedHobbies2)        
const toArray= (...args)=>{
    return args
}
console.log(toArray(1,2,3,4))
const [hobby1]=hobbies
console.log(hobby1)