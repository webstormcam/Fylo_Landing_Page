function validateForm(){
    let x=document.getElementById('email').value;
    let text;
    if (x ===''){
        text=' Oops! Please add your email'
    
    } else if (x.includes('@')==false){
        text='Oops! Please check your email'
    
    }else if (x.length<5 && x.includes('@')===true){
        text='Oops! Please check your email'
   
    } else if (x.length>=6 && x.includes('@')===true){
        text=''
        document.getElementById("myForm").submit();
     }
    document.getElementById('error').innerHTML=text;
}


function validateForm2(){
    let x=document.getElementById('email2').value;
    let text;
    if (x ===''){
        text=' Oops! Please add your email'
    
    } else if (x.includes('@')==false){
        text='Oops! Please check your email'
    
    }else if (x.length<5 && x.includes('@')===true){
        text='Oops! Please check your email'
   
    } else if (x.length>=6 && x.includes('@')===true){
        text=''
        document.getElementById("myForm2").submit();
     }
    document.getElementById('error2').innerHTML=text;
}
