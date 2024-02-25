//with return type

function add(a:number,b:number):number
{
    return a+b
}

//without return type

function greet(message:string):void
{
    console.log(message)
}

//using interface and type for function, but remember always use interface for objects and classes and for others consider type

interface InterfaceForFunction{
    (a:number,b:number):number
}

const substract:InterfaceForFunction=(a,b)=>
{
    return a-b
}

type greetByMessage=(a:string)=>void

const greetMessage:greetByMessage=(a)=>
{
    console.log(a)
}
