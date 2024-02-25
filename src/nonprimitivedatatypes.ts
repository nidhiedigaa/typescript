//array

let x=[10,20]
//only number items are allowed

let y:['hello','world']
//only string items are allowed

let z:[true,false]
//only boolean items are allowed

let a=[undefined]
//only undefined is allowed

let b=[null]
//only null is allowed

let c=[/[0-9]/]
//only regular expressions are allowed

let d=[]
//any values are allowed

let e=['hello',10,true]
//string and number and boolean values are allowed

let f:string[]=[]
//f is an array which allows only string datatype

let g:number[]=[]
//only number items

let h:boolean[]=[]
//only boolean items

let i:undefined[]=[]
//only undefined items

let j:null[]=[]
//only null items

let k:RegExp[]=[]
//only regular expression as items

let l:any[]=[]
//any items

let m:(string | number)[];
//string or number

let n:{name:string}[]
n=[{name:'hello'}]
//only objects are allowed with name property of string datatype


//tuples

let o:[string,number]
//here o allows first item only to be string and second item only to be number, and also length is fixed thats the purpose of tuple, to fix the order and length
o=['hello',10]

//enum

enum direction{
    south,
    north,
    east,
    west
}
//by default starts from 0, but you can change it

// enum direction{
//     south=1,
//     north,
//     east,
//     west
// }

//in above example it starts from 1

// let obj={
//     name:'user',
//     age:20
// }
//above object does not allow new properties, it is fixed to name and age and also their data types are fixed to control the datatype you can use interface or type

// type objType={
//     name:string,
//     age:number
// }

// let obj:objType={
//     name:'user',
//     age:30
// }

//you can also make properties as optional

// interface ObjectInterface{
//     name:string,
//     age?:number
// }

// const obj:ObjectInterface={
//     name:'user',
//     age:20
// }
