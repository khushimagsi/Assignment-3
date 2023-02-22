function validtion() {
    let adminEmail ="admin";
    let adminPassword="admin123"
    let name= document.getElementById('name') 
    let email=document.getElementById('email')
    let password=document.getElementById('password') 
    let form=document.getElementById('form');
    let welcome = document.getElementById('welcome');



    if(email.value == adminEmail && password.value == adminPassword){

        let h1 = document.createElement('h1')
    

        h1.innerText = `welcome ${name.value}`;
        welcome.appendChild(h1);
        form.remove()
    }else{
        let err = document.getElementById('error');
        let h1 = document.createElement('h1')
        h1.innerText = 'Invalid password or email.';
        h1.style.color = 'white';

        err.appendChild(h1);
        err.style.backgroundColor = 'red'
        err.style.width = '300px'
    }




    
}