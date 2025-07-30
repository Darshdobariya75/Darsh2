console.log(Math.random()*10)
console.log(Math.round(Math.random()*10))

// otp 
// autogenerate password

// password generator
var dicti = 'qwertyuiopasdfghjklzxcvbnmZXCVBNM<ASDFGHJKLQWERTYUIO1234567890!@#$%^&*()_+][;,./';
var password = '';

for(i=0;i<16;i++){
    let index = Math.round(Math.random()*(dicti.length-1));
    password+=dicti[index]
}
console.log(password)