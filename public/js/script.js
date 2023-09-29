document.getElementById("log-in")?.addEventListener("click", (event) => {
  event.preventDefault();

  fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: document.getElementById("floatingInput").value,
      password: document.getElementById("floatingPassword").value,
    }),
  }).then((res) => {
    console.log(res);
  });
});

document.getElementById("sign-up")?.addEventListener("click", (event) => {
  event.preventDefault();

  fetch("/api/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: document.getElementById("floatingInputSign").value,
      password: document.getElementById("floatingPasswordSign").value,
    }),
  }).then((res) => {
    console.log(res);
  });
});

// document.getElementById("log-out")?.addEventListener("click", (event) => {
//   event.preventDefault();

//   fetch("/api/users/Log-out", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       username: document.getElementById("floatingInputSign").value,
//       password: document.getElementById("floatingPasswordSign").value,
//     }),
//   }).then((res) => {
//     console.log(res);
//   });
// });
