let a = document.getElementById('input1')
let b = document.getElementById("input2")
let c = document.getElementById("input3")

document.getElementById("bt3").addEventListener("click", ()=>{
    if(a.value == "" || b.value == "" || c.value == ""){
        alert("Campo vazio! Usuário não registrado.")
    } else if(b.value.includes("@")){
        alert("Usuário registrado com sucesso!!!")
    } else{
        alert("Campo de email incorreto! Usuário não registrado.")
    }
})