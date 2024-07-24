    const upperCase= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase= upperCase.toLocaleLowerCase();
    const symbol= `!@#$%^&*()_~<>?,./|"+:-;'={[]`;
    const number= '0123456789';
    const passwordBox= document.getElementById("password");
    const total= upperCase+ lowerCase+ symbol+ number+ passwordBox;
    const limit= 12;
     
function createPassword(){
    var password= '';
    password+= upperCase[Math.floor(Math.random()* upperCase.length)];
    password+= lowerCase[Math.floor(Math.random()* lowerCase.length)];
    password+= symbol[Math.floor(Math.random()* symbol.length)];
    password+= number[Math.floor(Math.random()* number.length)];
    while(limit> password.length){
        password+= total[Math.floor(Math.random()* total.length)];
    }
    passwordBox.value= password; 
}

function copy(){
    passwordBox.select();
    document.execCommand('copy');
}

