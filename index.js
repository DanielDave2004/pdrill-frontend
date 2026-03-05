const content=document.querySelector("#content");
const submit=document.querySelector("#add");

//POST API
submit.addEventListener('click',()=>{
    let iName=document.querySelector("#itemName").value;
    let uPrice=document.querySelector("#unitPrice").value;
    let qt=document.querySelector("#quantity").value;
    let sp=document.querySelector("#supplier").value;
    let formData={iName,uPrice,qt,sp};

    fetch("https://pdrill-backend.onrender.com/api/products",{
        method:'POST',
        body: JSON.stringify(formData),
        headers:{
            "Content-Type":"application/json",
        },
    }).catch((error)=>{
        console.log(error);
    })
    alert("Product Added Successfully");
    location.reload();
});


window.addEventListener('load', ()=>{
    getUsers();
})


function getUsers(){
    let html=""
    //FETCH API
    fetch('https://pdrill-backend.onrender.com/api/products',{mode:'cors'})
    .then(response=>{
        console.log(response);
        return response.json();
    })
    .then(data=>{
        console.log(data);
        data.forEach(element=>{
            html+=`<li> ${element.itemName} ${element.unitPrice} ${element.quantity} ${element.supplier}</li>`
        })

        content.innerHTML=html;
    })
    .catch(error=>{
        console.log(error);
    })

}
