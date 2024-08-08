function calculate() {
  fetch("api.json")
    .then((res) => res.json())
    .then((data) =>{document.body.innerHTML = data[0].text});
}

calculate();
