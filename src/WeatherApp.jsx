import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'


export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Jharkhand",
        feelsLike: 23.7,
        humidity: 85,
        temp: 23.11,
        tempMax: 23.11,
        tempMin: 23.11,
        weather: "few clouds",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div>
            <h2>Weather App by Somen Jeet</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}