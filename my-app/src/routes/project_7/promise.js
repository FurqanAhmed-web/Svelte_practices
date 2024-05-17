import { error } from "@sveltejs/kit";

const prom1 = new Promise(function (resolve, reject) {
  let error = false;
  if (!error) {
    setTimeout(() => {
      resolve({ name: "ali", age: 26, gender: "male" });
      //   resolve({ name: "ahmed", age: 22, gender: "teen" });
    }, 2000);
  } else {
    reject("try again");
    // reject("try try again");
  }
});

// prom1
//   .then((data) => {
//     console.log(data);
//     const name = data.name;
//     console.log(name);
//   })
//   .catch((error) => {
//     console.log(error);
// }).finally(() => {
//   console.log(`is working`);
// });

async function promiseWithAsyc(){
    try {
        const promiseData = await prom1
        const result = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = result.json()
        console.log(promiseData, result);
    } catch (error) {
        console.log(error);
    }
}
promiseWithAsyc()

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
  
