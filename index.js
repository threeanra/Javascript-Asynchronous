const token = ~~[Math.random() * 123456789];
const pictures = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

function login(username) {
  console.log("processing token user now...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin") {
        resolve({ token }); //dijadikan objek
      } else {
        reject("invalid username");
      }
    }, 200);
  });
}

function getUser(token) {
  console.log("processing apiKey now...");
  return new Promise((resolve, reject) => {
    if (token) {
      setTimeout(() => {
        resolve({ apiKey: "xkey123" }); //dijadikan objek
      }, 500);
    } else {
      reject("invalid token");
    }
  });
}

function getPictures(apiKey) {
  console.log("processing pictures...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (apiKey) {
        resolve({ pic: pictures }); //dijadikan objek, (agar bisa dipanggil hanya key nya saja (pic))
      } else {
        reject("invalid apiKey");
      }
    });
  });
}

// const user = login("admin");

//how to call promise with .then (?) || call nested promise

// user
//   .then((response) => {
//     const token = response;
//     getUser(token)
//       .then((response) => {
//         console.log(response);
//         console.log({ response });
//         const { apiKey } = response; //perbedaan ketiganya saat di console.log
//         console.log(apiKey);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//solusi terbaik dengan cara async await (jika ada promise pending)
async function userDisplay() {
  const { token } = await login("admin");
  const { apiKey } = await getUser(token);
  const { pic } = await getPictures(apiKey);

  console.log(
    `Token anda ${token}, apikey anda ${apiKey}, dan gambar yang anda minta ${pic}`
  );
}

userDisplay();

//note :
//setTimeout() adalah asynchronous makanya harus menggunakan call back atau async await
//call back memiliki 2 parameter
/* function contoh(poram1, callback) {
  callback();
}*/
