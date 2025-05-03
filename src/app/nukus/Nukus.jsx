'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Nukus() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [forecastDays, setForecastDays] = useState(7)

    useEffect(() => {
        setLoading(true)
        axios
            .get('https://api.weatherapi.com/v1/forecast.json', {
                params: {
                    key: '71936876cf93403bb8964012250105',
                    q: 'Nukus, Uzbekistan',
                    days: forecastDays,
                    lang: 'ru',
                },
            })
            .then((res) => {
                setData(res.data)
                setLoading(false)
            })
            .catch((err) => {
                console.error(err)
                setLoading(false)
            })
    }, [forecastDays])

    if (loading) return <div className='loading'><div className="loading-spinner"></div></div>
    if (!data) return <p>Ошибка загрузки данных</p>

    const forecast = data.forecast.forecastday
    const current = data.current
    const astro = forecast[0].astro
    const pressureMmHg = Math.round(current.pressure_mb * 0.75006)

    const getHour = (h) =>
        forecast[0].hour.find((item) => item.time.includes(`${String(h).padStart(2, '0')}:00`))

    const morning = getHour(6)
    const day = getHour(12)
    const evening = getHour(18)

    const formatDate = (dateStr) => {
        try {
            const date = new Date(dateStr)
            const weekday = date.toLocaleDateString('ru-RU', { weekday: 'long' })
            const dayMonth = date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })
            return {
                weekday: weekday.charAt(0).toUpperCase() + weekday.slice(1),
                dayMonth,
            }
        } catch (e) {
            return { weekday: 'Неизвестно', dayMonth: '—' }
        }
    }

    const today = new Date(forecast[0].date);
    const formattedDate = today.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long"
    });

    return (
        <div className='layout'>
            <div className="layout-header">
                <h2>{data.location.name}</h2>
                <p className='layout-header__p'>Сегодня, {formattedDate}</p>
                <div className="layout-header__header">
                    <div>
                        <img src={forecast[0].day.condition.icon} alt="" />
                        <p className='layout-header__header__p-1'>
                            {forecast[0].day.maxtemp_c > 0 ? '+' : ''}{Math.round(forecast[0].day.maxtemp_c)}°
                        </p>
                        <p className='layout-header__header__p-2'>
                            {forecast[0].day.mintemp_c > 0 ? '+' : ''}{Math.round(forecast[0].day.mintemp_c)}°
                        </p>
                    </div>
                    <p className='layout-header__header__p'>{forecast[0].day.condition.text}</p>
                </div>
                <br />
                <hr />
                <br />
                <div className="layout-header__container">
                    <div>
                        <p>Влажность: {forecast[0].day.avghumidity}%</p>
                        <p>Луна: {astro.moon_phase}</p>
                    </div>
                    <div>
                        <p>Ветер: {current.wind_dir}, {Math.round(current.wind_kph / 3.6)} м/с</p>
                        <p>Восход: {astro.sunrise}</p>
                    </div>
                    <div>
                        <p>Давление: {pressureMmHg} мм рт. ст.</p>
                        <p>Закат: {astro.sunset}</p>
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div className='layout-header__footer'>
                    <div>
                        <p>Утром</p>
                        <img src={morning.condition.icon} alt="" />
                        <p>{Math.round(morning.temp_c)}°</p>
                    </div>
                    <div>
                        <p>Днем</p>
                        <img src={day.condition.icon} alt="" />
                        <p>{Math.round(day.temp_c)}°</p>
                    </div>
                    <div>
                        <p>Вечером</p>
                        <img src={evening.condition.icon} alt="" />
                        <p>{Math.round(evening.temp_c)}°</p>
                    </div>
                </div>
            </div>

            <div className='layout-list'>
                <h3>Прогноз на неделю</h3>
                <div className='layout-list__header'>
                    <button onClick={() => setForecastDays(7)} className={forecastDays === 7 ? 'active' : ''} >
                        7 дней
                    </button>
                    <button onClick={() => setForecastDays(14)} className={forecastDays === 14 ? 'active' : ''} >
                        14 дней
                    </button>
                </div>
                <div className="layout-list__container">
                    {forecast.slice(1).map((day) => {
                        const { weekday, dayMonth } = formatDate(day.date)
                        return (
                            <div className='layout-list__container__div' key={day.date}>
                                <div className='layout-list__container__div__div layout-list__container__div__div-1'>
                                    <p className='layout-list__container__div__div-1__p-1'>{weekday}</p>
                                    <p className='layout-list__container__div__div-1__p-2'>{dayMonth}</p>
                                </div>
                                <div className='layout-list__container__div__section'>
                                    <img src={day.day.condition.icon} alt="" />
                                    <div>
                                        <p className='layout-list__container__div__section__p-1'>{Math.round(day.day.maxtemp_c)}°</p>
                                        <p className='layout-list__container__div__section__p-2'>{Math.round(day.day.mintemp_c)}°</p>
                                    </div>
                                </div>
                                <div className='layout-list__container__div__div'>
                                    <p>{day.day.condition.text}</p>
                                    <p className='layout-list__container__div__div-3__p-2'>Осадки {day.day.daily_chance_of_rain ?? 0}%</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};