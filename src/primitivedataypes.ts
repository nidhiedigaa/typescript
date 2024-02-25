//type inference=> letting typescript assign the datatype to the variable depending on the value we initalize the varibale with

// let x='user'
//x is locked down to the datatype string and can only allow string values to be stored inside of it

// let y=10
//only number

// let z=true
//only boolean

// let a=undefined
//any values can be stored

// let b=null
//any values can be stored

// let c=/[a-z]/
//only regular expression is allowed

// let d;
//any values are allowed


//but its always a better practise to explicitly specify the datatype for the variables which is the whole point of typescript (type safety)

// let e:string;
//only string values

// let f:number;
//only number values

// let g:boolean;
//only boolean values

// let h:undefined
//only undefined values

// let i:null
//only null values

// let j:RegExp;
//only regular expression

// let k:any;
//any values are allowed

//there is also something called as union type where you can assign more than one datatype for a variable

// let l:string | number;
//string or number 

// let m:string | number | boolean;
//string or number or boolean


