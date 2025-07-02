const obj={
  name:"boy",
  age:30,
  gender:"male"
}

const  someNme="name"
console.log(obj[someNme]);

obj.school="ui"
console.log(obj);

const obj2={
  height:"20cm",
  realtionship:"single",complexion:"light"
}

const propName="relationship"

obj={
  ...obj,
  ...obj2,
  [propName]:"compilcated"
}

console.log(obj);



