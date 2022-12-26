const textArea = document.getElementById("textArea");
const textCont = document.getElementById("textCont");
let limit = 130;
textCont.textContent = 0 + "/" + limit;

textArea.addEventListener("input", function(){
    let textLenght = textArea.value.length;
    textCont.textContent = textLenght + "/" + limit;

    if(textLenght >= 125){
        textArea.style.border = "1px solid #ff6347";
        textCont.style.color= "#ff6347";
    }
    else{
        textCont.style.color= "gray";
        textArea.style.border = "1px solid gray";
    }
})

