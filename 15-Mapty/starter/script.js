'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if (navigator.geolocation){
	navigator.geolocation.getCurrentPosition(function(position){
		// const lattitude = position.coords.latitude
		// const longitude = position.coords.longitude
		//------we can write like this structuring -------
		const {latitude} = position.coords;
		const {longitude} = position.coords;
		console.log(`${latitude} kkkk ${longitude}`)
		console.log(`https://www.google.co.in/maps/@${latitude},${longitude}`);
        const coords = [latitude,longitude];

        var map = L.map('map').setView(coords, 18);

        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
			map.on('click',function(mapEvent){
				console.log(mapEvent);
				// const lat = mapEvent.latlng.lat;
				// const lng = mapEvent.latlng.lng;
				const {lat,lng} = mapEvent.latlng;
			L.marker([lat,lng]).addTo(map).bindPopup(
				L.popup({
					maxWidth:250,
					minWidth:100,
					autoClose:false,
					closeOnClick:false,
					className:'running-popup'
				})
			)
            .setPopupContent('Workout')
            .openPopup();
				
			})
},function(){
	alert('Could not get your position'); 
});
}
