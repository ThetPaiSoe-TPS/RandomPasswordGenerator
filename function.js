    const characterList= 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z';
    var splitted= characterList.split(', ');
    var rst= splitted.join('');
    var upperCase= rst;
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

