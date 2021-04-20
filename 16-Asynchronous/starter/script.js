'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const renderCountry = function (data, className = '') {
//     const html = `
//     <article class="country ${className}">
//       <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//       </div>
//     </article>
//     `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   };


// const getCountryAndNeighbour = function (country) {
//     // AJAX call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}?fullText=true`);
//     request.send();
  
//     request.addEventListener('load', function () {
//       const [data] = JSON.parse(this.responseText);
//       console.log(data);
  
//       // Render country 1
//       renderCountry(data);
  
//       // Get neighbour country (2)
//       const [neighbour] = data.borders;
//       console.log(neighbour);
  
//       if (!neighbour) return;
  
//       // AJAX call country 2
//       const request2 = new XMLHttpRequest();
//       request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}?fullText=true`);
//       request2.send();
  
//       request2.addEventListener('load', function () {
//         const data2 = JSON.parse(this.responseText);
//         console.log(data2);
  
//         renderCountry(data2, 'neighbour');
//       });
//     });
//   };
  
//   // getCountryAndNeighbour('portugal');
//   getCountryAndNeighbour('india');

///////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////// ALL NEIGHBOUR ////////////////////////////////////////



///////////////////////////////////////

// const renderCountry = function (data, className = '') {
//     const html = `
//     <article class="country ${className}">
//       <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//       </div>
//     </article>
//     `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   };


// const getCountryAndNeighbour = function (country) {
//     // AJAX call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}?fullText=true`);
//     request.send();
  
//     request.addEventListener('load', function () {
//       const [data] = JSON.parse(this.responseText);
//       console.log(data);
  
//       // Render country 1
//       renderCountry(data);
  
//       // Get neighbour country (2)
//       const neighbour = data.borders;
//     //   console.log(neighbour);

  
//       if (!neighbour) return;
  
//       // AJAX call country 2
//       neighbour.forEach((element) => {
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${element}?fullText=true`);
//         request2.send();
    
//         request2.addEventListener('load', function () {
//           const data2 = JSON.parse(this.responseText);
//           console.log(data2);
    
//           renderCountry(data2, 'neighbour');
//         });
//     })

//     });
//   };
  
//   getCountryAndNeighbour('india');
  


/////////////////////////////////////////////////////////////
/////////////////////////  FETCH    ////////////////////////


// const renderCountry = function (data, className = '') {
//     const html = `
//     <article class="country ${className}">
//       <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//       </div>
//     </article>
//     `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   };

// const getCountryData = function(country){
//     fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`).then(function(response){
//         return response.json();
//     }).then(function(data){
//         const alldata = data[0];
//         renderCountry(alldata);
//     })
// }
// getCountryData('usa');




/////////////////////////////////////FETCH ALL NEIGHBOURS /////////////////////////////////




const renderCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  };

const getCountryData = function(country){
    fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`).then(function(response){
        return response.json();
    }).then(function(data){
        const alldata = data[0];
        renderCountry(alldata);
       const neighbours = alldata.borders[0];
       console.log(neighbours);
        if(!neighbours){
            return
        }else{
            return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbours}?fullText=true`);
        }
   }).then(function(response2){
        return response2.json();
   }).then(function(data2){
    renderCountry(data2)
    console.log(data2);
   })
}
getCountryData('nepal');

// fetch('https://restcountries.eu/rest/v2/alpha/usa').then(function(response){
//     return response.json();
// }).then(function(data){
//     console.log(data);
//     renderCountry(data)
// })
  
