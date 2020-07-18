(function(){
    let text = document.getElementById('caractere')
    let msg = document.getElementById('message')
    let btn = document.getElementById('btninverser')
    
    function strInverse(str){
        msg.innerHTML = str.split("").reverse().join("")
    }
    
    btn.addEventListener('click', function(){
        let txt = text.value
        if(text.value ==''){
            alert('Le champs est vide, veuillez le renseigner SVP !')
            text.classList.add('error')
        }
        else{
            text.classList.remove('error')
        }
        strInverse(txt)
    })
    text.addEventListener('keydown', function(){
        text.classList.remove('error')
    })
})()
