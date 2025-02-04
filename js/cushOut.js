document.getElementById('btn-cushOut').addEventListener('click',function(e){
    e.preventDefault()
    const cushOut = document.getElementById('input-cushOut').value;
    console.log(cushOut) 
    const cushOutPin = document.getElementById('input-cushOut-pin').value;
    console.log(cushOutPin)
    const balance = document.getElementById('current-account').innerText;

    if(cushOutPin === '1234'){
        const balance = document.getElementById('current-account').innerText;
        const newCushOut = parseFloat(cushOut);
        const newBalance = parseFloat(balance)

        const cushOutBalnce = newBalance - newCushOut;

        console.log(cushOutBalnce)

        document.getElementById('current-account').innerText = cushOutBalnce;

        

    }else{
        alert('worng password')
    }
})