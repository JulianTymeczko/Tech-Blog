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

document.getElementById("modal-button")?.addEventListener("click", () => {
  fetch("/api/blogs/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: document.getElementById("modal-input").value,
      paragraph: document.getElementById("exampleFormControlTextarea1").value,
    }),
  }).then((res) => {
    console.log(res);
  });
});
