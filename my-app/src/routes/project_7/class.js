// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// behind the scene


// @ts-ignore
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password

    return this
}

User.prototype.encryptPassword = function(){
    // @ts-ignore
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


// @ts-ignore
const tea = User("tea", "tea@gmail.com", "123")

// @ts-ignore
console.log(tea);
// @ts-ignore
console.log(tea.changeUsername());

