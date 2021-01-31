import { useEffect, useState } from 'react'
import { format, getHours } from 'date-fns'

import * as S from './styles'

type WeatherForecastTypes = {
  currentDate: Date
  city: string
  time: string
}

const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY

const WeatherForecast = ({ currentDate, city, time }: WeatherForecastTypes) => {
  const [weatherForecast, setStatus] = useState(null)

  useEffect(() => {
    getWeatherStatus(city, currentDate)
  }, [city, currentDate, time])

  const getWeatherStatus = async (city: string, dt: Date) => {
    const data = await fetch(
      `http://api.weatherapi.com/v1/history.json?key=${API_KEY}&q=${decodeURI(
        city.replaceAll(' ', '')
      )}&dt=${format(dt, 'yyyy-MM-dd')}`,
      {
        method: 'GET'
      }
    )
    const { forecast: { forecastday } = {} } = await data.json()

    if (forecastday) {
      const getForecastForTimeHour = forecastday[0].hour.filter((hour: any) => {
        const hourTime = getHours(new Date(hour.time))
        if (hourTime === Number(time.split(':')[0])) {
          return true
        }
        return false
      })

      setStatus(
        getForecastForTimeHour
          ? getForecastForTimeHour[0].condition.text
          : forecastday[0].hour[0].condition.text
      )
    }
  }

  return (
    weatherForecast && (
      <S.WeatherText title={weatherForecast}>{weatherForecast}</S.WeatherText>
    )
  )
}

export default WeatherForecast
