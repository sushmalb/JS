const getCountry = function (country) {
  const countriesContainer = document.querySelector(".countries");

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.com/v3.1/name/${country}");
  xhr.send();

  xhr.addEventListener("load", function () {
    [data] = JSON.parse(this.responseText);
    console.log(data);

    const languages = data.languages[Object.keys(data.languages)[1]];
    const currencies = data.currencies[Object.keys(data.currencies)[0]].name;
    const html = `
  <article class="country">
  <img class="country__img" src="${data.flags.svg}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${+data.population / 1000000}</p>
    <p class="country__row"><span>🗣️</span>${languages}</p>
    <p class="country__row"><span>💰</span>${currencies}</p>
  </div>
</article>
`;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

getCountry("india");
