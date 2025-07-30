let passw = '';
let dictionary = '1234567890qwertyuiopasdfghjklzxcvbnm,QWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*(){}][`~<>?,./;:"\|';

let userpass ='FKf7#';

// console.log(userpass.match(/[A-Z]/g))
// console.log(userpass.match(/[a-z]/g))
// console.log(userpass.match(/[0-9]/g))
// console.log(userpass.match(/[!-.:-@[-`{-~]/g))

if(userpass==''){
    console.log('Password is empty')
}
else if(userpass.length<=7){
    console.log('Password is too short')
}
else if(userpass.match(/[A-Z]/g)==null){
    console.log('Password should have at least one uppercase letter')
}
else if(userpass.match(/[a-z]/g)==null){
    console.log('Password should have at least one lowercase letter')
}
else if(userpass.match(/[0-9]/g)==null){
    console.log('Password should have at least one digit')
}
else if(userpass.match(/[!-.:-@[-`{-~]/g)==null){
    console.log('Password should have at least one special character')
}
else{
    console.log("Valid Password !!")
}