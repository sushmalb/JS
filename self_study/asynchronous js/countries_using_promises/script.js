const renderCountry = function (data, className = "") {
  const countriesContainer = document.querySelector(".countries");
  const languages = data.languages[Object.keys(data.languages)[0]];

  const currencies = data.currencies[Object.keys(data.currencies)[0]].name;

  const html = `
  <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)}m people</p>
          <p class="country__row"><span>🗣️</span>${languages}</p>
          <p class="country__row"><span>💰</span>${currencies}</p>
        </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then(([data]) => renderCountry(data));
};

getCountryData("portugal");
