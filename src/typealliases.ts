type username=string

// let first_name:username;
// first_name='dave'

type stringOrNumber=string | number
// let isActive:stringOrNumber;
// isActive='no'
// isActive=1

type rollNumber=stringOrNumber

// let rollNo:rollNumber;
// rollNo=2
// rollNo='two'

//interface cannot be used as type aliases, it is only reccomended for objects and classes

//literal types

type name='dave' | 'gary'

// let myName:name;
// myName='dave'
// myName='gary'


//optional paramaters => they should always be specified as last parameter

function addNumbers(a:number,b?:number):number | void
{
    if(typeof b != 'undefined') return a+b

}

// addNumbers(10,20)
// addNumbers(10)

//default parameters => they should be specified at last


function multiplyNumbers(a:number=10,b:number):number
{
    return a*b
}

// multiplyNumbers(10,20)
// multiplyNumbers(undefined,30)


//rest parameters

function exampleForRest(a:number,b:number,...c:number[]):number
{
    return a+b+c.reduce((total,ele)=>total+=ele,0)
}

// exampleForRest(10,20,30,40,50)


//never type=> we will come across never type when the function is throwing an error or if there is an infinite loop inside of a function

// const errorMessage=(messsage:string)=>{
//     throw new Error(messsage)
// }

// const infiniteLoop=()=>
// {
//     let i=1
//     while(true)
//     {
//         i++
//     }
// }


//custom type guard

// function numberSum(a:any):boolean
// {
//    return typeof a==='number'?true:false
// }

