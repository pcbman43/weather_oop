class Weather{
	constructor(city) {
		this.city = city
		this.key = '930dec14350f0c635b5826e9a673ba1e'
	}

	async getWeather(){
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
		const responseData = await response.json()
		return responseData
	}
}