let a = null;
let b = 345
let c = true;
let d = BigInt("234") + BigInt("23");
let e = "Harry";
let f = Symbol("I am a nice symbol")
let g = undefined;

console.log(a, b, c, d, e, f, g)

console.log(typeof b)



// object 
const item = {
    "ankush": true,
    "ankush12": false,
    "ankus3412h": undefined,
}

item['frined'] = "mahesh";  // we can also concatenate this item

console.log(item)


// for in Loop
for (let a in item) {
    console.log(" name is " + a + "  and property is  " + item[a]);
}


// for of loop
// for (const a of item) {
//     console.log(" name is " + a + "  and property is  "+ item[a]);
//   } this is not aplicable for object aplicable only for strings

// for of loop


let words = "ankush gupyadf"
for (const a of words) {
    console.log(a)
}


for (let i = 0; i < 5; i++) {
    console.log(i)
}

// console.log(i)  this i gerate error bcz let is a block scope element 



/*  concept of number and parseInt keyword */

let m = 10.234;
let n = 10;

console.log(parseInt(m))
console.log(parseInt(n))

console.log(Number(m))
console.log(Number(n))



// new concept of object value print in for loop

let marks = {
    harry: 90,
    shyam: 30,
    monu: 230,
    ankush: 50
}

for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log(Object.keys(marks)[i], Object.values(marks)[i])
}

for (let i in marks) {
    // console.log(i)  // print all key name
    console.log(marks[i])  // print all value name
}



// concept of for each loop


// array original ko change kar deta hai
num = [1, 2, 4, 3, 6, 4, 5, 6]

num.forEach(element => {
    console.log(element * element)
});

console.log(num)


// concept of Array.from

let name_arr = "ankushgupat";

let arr = Array.from(name_arr)

console.log(arr)
console.log(name_arr)

/* 

output :-

[
  'a', 'n', 'k', 'u',
  's', 'h', 'g', 'u',
  'p', 'a', 't'
]
ankushgupat

*/



// map() concept
// ye original array ko change nahi karta

let arr_map = [23,1,3,2]

let new_arr = arr_map.map((value)=>{
    console.log(value)
    return value + 1;
})
console.log(new_arr)


/* 
// Output 

23
1
3
2
[ 24, 2, 4, 3 ]


*/




// this code also give index
// i means index and arr1 means original array
let arr_map1 = [23,1,3,2]

let new_arr1 = arr_map.map((value, index, arr1)=>{
    console.log(value, index, arr1)
    return value + 1;
})
console.log(new_arr1)



/* 
// output

23 0 [ 23, 1, 3, 2 ]
1 1 [ 23, 1, 3, 2 ]
3 2 [ 23, 1, 3, 2 ]
2 3 [ 23, 1, 3, 2 ]
[ 24, 2, 4, 3 ]

*/




// concept of filter ye original array ko change nahi kaarte .

let arr2 = [45,23,21,0,3,5]
let a2 = arr2.filter((a)=>{
    return (a<10);
})

console.log(a2)

/* 
output

[ 0, 3, 5 ]
*/



// reduce()
let arr3 = [1,2,3,4,5,6]

let a3 = arr3.reduce((h1,h2)=>{
    return (h1 + h2)
})

console.log(a3)

/* 
output:-

21
*/





// reduce() can also declare

let arr4 = [1,2,3,4,5,6]

const reduce_func = (h1,h2)=>{
    return (h1 + h2)
}

let a4 = arr3.reduce(reduce_func)

console.log(a3)


/* 
output:-

21
*/
