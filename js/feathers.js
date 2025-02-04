document.getElementById('btn-show-cush-out').addEventListener('click',function(){
    console.log('btn clicked')
    document.getElementById('cush-out-form').classList.remove('hidden')
    document.getElementById('add-money-form').classList.add('hidden')
    
})

document.getElementById('btn-show-add-money').addEventListener('click',function(){
    document.getElementById('add-money-form').classList.remove('hidden')



    
    
})