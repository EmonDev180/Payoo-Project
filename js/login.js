document.getElementById('btn-login').addEventListener('click',function(e){

    e.preventDefault()

    const phoneNumber = document.getElementById('phone-number').value;

  

    const pinNumber = document.getElementById('pin-number').value;



    if(phoneNumber === '5' && pinNumber === "1234"){
       
        window.location.href = './home.html'
    }else{
        alert('Wrong phone or pin')
    }
})