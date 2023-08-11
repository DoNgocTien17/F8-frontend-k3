function element(n) {
    if(n < 2) {
        return false;
    }
    for(var i = 2; i < n; i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}

const n = 5;
if(element(n) === true){
    console.log(`Nguyen to`);
}else {
    console.log(`Ko nguyen to`);
}