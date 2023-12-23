let a = document.getElementById("input1").value
let b = document.getElementById("input2").value
let c = document.getElementById("textarea").value

document.getElementById("bt1").addEventListener("click", ()=>{
    alert("Quer saber nada não.")
})

document.getElementById("bt2").addEventListener("click", ()=>{
    if(a.value == "" || b.value == "" || c.value == ""){
        alert("Campo vazio! Comentário não enviado.")
    } else{
        alert("Comentário enviado. Aguardando aprovação...")
    }
})