async function loadJoke() {
  document.getElementById("loader").style.display = "block";
  document.getElementById("setup").innerHTML = "";
  document.getElementById("delivery").innerHTML = "";
  document.getElementById("joke").innerHTML = "";
  let flagsArr = [];
  const checkBoxes = document.getElementsByName("flag");
  for (var i = 0; i < checkBoxes.length; i++) {
    if (checkBoxes[i].checked) {
      flagsArr.push(checkBoxes[i].value);
    }
  }
  const flags = `?blacklistFlags=${flagsArr.join()}`;

  try {
    const response = await fetch(`https://v2.jokeapi.dev/joke/Any${flags}`);
    const data = await response.json();

    if (!data.joke) {
      document.getElementById("loader").style.display = "none";
      document.getElementById("setup").innerHTML = data.setup;
      document.getElementById("delivery").innerHTML = data.delivery;
    } else {
      document.getElementById("loader").style.display = "none";
      document.getElementById("joke").innerHTML = data.joke;
    }

    console.log(`Load success! ${flags}`);
  } catch (error) {
    document.getElementById("loader").style.display = "none";
    console.log(error);
  }
}
