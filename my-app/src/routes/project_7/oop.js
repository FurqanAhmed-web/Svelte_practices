
// const name ='ali';

// const detail = {
//   username: "hitesh",
//   loginCount: 8,
//   signedIn: true,
//   getUserDetails: function () {
//     console.log("Got user details from database");
//     const state = `Username: ${this.username}`;
//     console.log(state);
//     //console.log(this);
//     return state;
//   },
// };
// console.log();

// @ts-ignore

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne, userTwo);
  
  // @ts-ignore
  function multipleBy5(num) {
    return num * 5;
  }

  multipleBy5.power = 2;

  console.log(multipleBy5(5));
  console.log(multipleBy5.power);
  console.log(multipleBy5.prototype);

  // @ts-ignore
  function createUser(username, score) {
    this.username = username;
    this.score = score;
  }

  createUser.prototype.increment = function () {
    this.score++;
  };
  createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
  };

  const chai = new createUser("chai", 25);
  // @ts-ignore
  const tea = createUser("tea", 250);

  chai.printMe();
//////////////////////////////////////////////////////////////

function SetUsername(username){
  //complex DB calls
  this.username = username
  console.log("called");
}

function createUser(username, email, password){
  SetUsername.call(this, username)
 
  this.email = email
  this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);