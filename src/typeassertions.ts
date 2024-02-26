//sometimes typescript maynot predict the output in that case you can explicitly specify what datatype the value is going to be by using 'as' keyword


type a=number
type b=string | number
type c='hello'

// const num:a=20
// const numTwo=num as b
// let msg='hello' as c
// msg='what'
// msg='hi'
// msg='hello'


//you can also use angular brackets but it is not supported in tsx file in react so its better to use as keyword only

function sumOfNumbers(a:number|string,b:number|string):number|string
{
    if(typeof a==='number' && typeof a==='number') return (a as number) + (b as number)
    return ''+a+b
}

let resultOfSumOfNumbers:number=sumOfNumbers(10,20) as number


//mostly you use type assertions when dealing with the dom elements

let p=<HTMLImageElement>document.getElementById('parahgraph')
p.innerText='hello'

let img=document.getElementById('img') as HTMLImageElement
img.setAttribute('alt','img')


