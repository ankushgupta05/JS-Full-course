const hello = ()=>{
    console.log("ankush gupta")
}
const ahello = (name)=>{
    console.log("ankush gupta  and  "  + name)
}

module.exports = {hello, ahello};  // below line also run that means same as this line
// module.exports = {hello : hello , ahello : ahello};  