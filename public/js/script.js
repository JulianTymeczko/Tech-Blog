document.addEventListener("click", (event) => {
  if (event.target.id === "log-in" || event.target.id === "sign-up") {
    data.loggedIn = !data.loggedIn;

    fetch("/updateLoggedIn", {
      method: "POST",
      body: JSON.stringify({ loggedIn: data.loggedIn }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
});
