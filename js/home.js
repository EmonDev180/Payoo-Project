// document.getElementById('btn-add-money').addEventListener('click',function(e){
//     e.preventDefault()
//     const addMoney = document.getElementById('input-add-money').value;

//     const addPin = document.getElementById('input-pin').value;



//     if(addPin ==='1234'){

//         const balance = document.getElementById('current-account').innerText;
//         const newMoney = parseFloat(addMoney);
//         const balanceNumber = parseFloat(balance);
//         const newBalance = newMoney + balanceNumber
//         console.log(newBalance)

//         document.getElementById('current-account').innerText = newBalance;

        
//     }else{
//         alert('wrong password')
//     }
// })


document.getElementById('btn-add-money').addEventListener('click',function(e){
    e.preventDefault()
    const addMoney = document.getElementById('input-add-money').value;

    const pinNumber = document.getElementById('input-pin').value;

    if(pinNumber === '1234'){
        const balance = document.getElementById('current-account').innerText;

        const newMoney = parseFloat(addMoney)
        const newBalance = parseFloat(balance)

        const currentBalance = newBalance + newMoney;
        console.log(currentBalance)

        document.getElementById('current-account').innerText = currentBalance
      


        
    }else{
        alert('Wrong pin number');

    }
   
    
})