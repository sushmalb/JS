//promise
// age = 30;
// function simulateAPIPromise(age) {
//   const prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Printing within SetTimeout");
//       if (age > 25) {
//         resolve({ id: 1, name: "Snehal" });
//       } else {
//         reject("Age is not proper");
//       }
//     }, 3000);
//   });
//   return prom;
// }

// FunctionResponse = simulateAPIPromise(20);
// console.log("result", FunctionResponse);
// //.then
// FunctionResponse.then((result) => {
//   console.log(result);
// });
// FunctionResponse.catch((error) => {
//   console.log(error);
// });

// //async and await ES6
// //
// async function simulateApi() {
//   try {
//     result = await simulateAPIPromise(30);
//     console.log(result);
//   } catch {}
// }
// simulateApi();

//result = fetch("url");
async function fetchApi() {
  user = {
    email: "eve.holt@reqres.in",
    password: "pistol",
  };

  res = await fetch("https://reqres.in/api/register");
  console.log(res);
  data = await res.json();
  console.log(data);
}

fetchApi();
