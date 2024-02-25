//type inference=> letting typescript assign the datatype to the variable depending on the value we initalize the varibale with

let x='user'
//x is locked down to the datatype string and can only allow string values to be stored inside of it

let y=10
//only number

let z=true
//only boolean

let a=undefined
//any values can be stored

let b=null
//any values can be stored

let c=/[a-z]/
//only regular expression is allowed

let d;
//any values are allowed
