// @ts-nocheck
class user{
    constructor(name, email){
        this.email = email;
        this.name = name
    }
    
     changeName(){
        console.log(`Changed name is ${this.name}abc`);

    }

}

const call = new user('ali', 'abc@123')
console.log(call);
call.changeName();