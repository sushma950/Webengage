var popUp_Close = document.getElementById("model")
function handleClose(){
    document.getElementsByClassName("popup")
    [0].classList.add("close")
}

function handleCopy(code,id){
    var copiedCode = document.getElementById(code).innerText
    copyToClipBoard(copiedCode)
    handleBtnDisable(id)
}

function copyToClipBoard(copiedCode){
    const textarea = document.createElement("textarea")
    textarea.setAttribute('readonly','');
    textarea.value = copiedCode
    textarea.style.position = "absolute"
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    document.body.removeChild(textarea)
}

function handleBtnDisable(id){
    var codeBtn = document.getElementsByClassName('cpcode')
    for(var i=0;i<codeBtn.length;i++){
        if(codeBtn[i].id===id){
            codeBtn[i].classList.add("disable")
            codeBtn[i].innerText="CODE COPIED"
        }else if(codeBtn[i].id !== id){
            codeBtn[i].classList.remove("disable")
            codeBtn[i].innerText="COPY CODE"

        }
        console.log(codeBtn[i].id,id)    

    }
}