// map method

let arr = [12,45,35,656,6366,96,54,90]

let a=arr.map((value)=>{
    console.log(value)
    return value
}
)

console.log(a)




// filter method

let arr2 =[34,56,78,45,98,28,72]

 b=arr2.filter((a)=>{
return a>40
})
 console.log(b)







//  reduce method

let arr3 =[3,5,7,9,4,6]

let c=arr3.reduce((b,c)=>{ 
    return b+c
})

console.log(c)