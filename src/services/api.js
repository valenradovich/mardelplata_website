const getWeatherData = async () => {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Mar%20del%20Plata&units=metric&appid=8108cbfbaad1ae6986bd201977375e02"
    );
    const data = await response.json();

    const days = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
    ];

    const weatherData = {
      /*mainWeather: data.weather[0].description,*/
      mainWeather: 'clear sky',
      currentDayName: days[new Date().getDay()],
      currentTime: new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }),
      temperature: data.main.temp.toFixed(0),
      sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }),
      sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }),
      humidity: data.main.humidity,
      precipitation: data.weather[0].main === 'Rain' ? 100 : 0
    };
  
    return weatherData;
  };


  
  export default getWeatherData;
