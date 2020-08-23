const {hash}= window.location;
const messsage = atob(hash.replace("#",""));

if(messsage)
{
    document.querySelector("#msg-form").classList.add("hide");
    document.querySelector("#msg-show").classList.remove("hide");
    
    document.querySelector("#msg-show h1").innerText = messsage;

}

document.querySelector("form").addEventListener("submit",event =>{

    event.preventDefault();

    document.querySelector("#msg-form").classList.add("hide");
    document.querySelector("#link-form").classList.remove("hide");


   const input = document.querySelector(".msg-input");
    console.log(input.value);

    let encrypted = btoa(input.value)

const linkInput  =  document.querySelector(".link-input");


linkInput.value = `${window.location}#${encrypted}`;
linkInput.select();

});