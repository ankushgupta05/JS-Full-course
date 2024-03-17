
console.log("ankush gupat")
submit.addEventListener("click", (e) => {
    e.preventDefault();  // ye line page ko reload hone se rokta hai
    let titlec = title.value;
    let descc = desc.value;
    console.log(titlec, descc)
    // localStorage.setItem("todo",JSON.stringify([titlec,descc]))  // this line is also work
    localStorage.setItem("todo", [titlec, descc])
    console.log(e)

    // NOTE :- below line agar todo ek class ka nam hota to isko direct access nahi kar pate is liye todo ko id diya hai
    todo.innerHTML = `
    <h1>${titlec}</h1>
    <p>${descc}</p> `

    title.value = "";
    desc.value = "";
})

deleteBtn.addEventListener("click", (e) => {

    e.preventDefault();  // ye line page ko reload hone se rokta hai
    localStorage.removeItem("todo")
    todo.innerHTML = "";

})