import { useState } from "react";
import { kelvinToCelsius, kelvinToFahrenheit } from "../utils/temp";

const Weather = ({ weatherInfo }) => {

  const [isCelsius, setIsCelsius] = useState(true)

  const handleChangetemp = () => {
    setIsCelsius(!isCelsius)
  }

  return (
    <section className="text-white flex flex-col items-center justify-center">
      <h1 className="pt-5 mb-[8rem]">Weather app</h1>
      <article className="grid grid-cols-[2fr_1.5fr] ">
        <img src="/images/Rectangle.png" alt="" className="absolute z-[-1] w-[19.8rem] h-[16rem] ml-[-10px] bg-cover"/>
        <h2 className="text-[70px] font-light leading-[120px] px-3">{isCelsius ? kelvinToCelsius(weatherInfo?.main.temp): kelvinToFahrenheit(weatherInfo?.main.temp)}</h2>
        <div className="w-[9rem] self-center ml-[-16px]">
          <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" />
        </div>
        <span className="col-start-1 text-gray-400 px-3 text-[11px] font-ligth leading-4 tracking-wider uppercase">viento: <p className="text-slate-200 inline font-bold">{weatherInfo?.wind.speed} m/2</p> </span>
        <span className="col-start-1 text-gray-400 px-3 text-[11px] font-ligth leading-4 tracking-wider uppercase">nubes: <p className="text-slate-200 inline font-bold">{weatherInfo?.clouds.all} %</p></span>
        <span className="col-start-1 text-gray-400 px-3 text-[11px] leading-4 tracking-wider uppercase">presion: <p className="text-slate-200 inline font-bold">{weatherInfo?.main.pressure} hPa</p></span>

        <h3 className="col-start-1 text-[19px] px-3 pt-2 capitalize font-bold">{weatherInfo?.name}, {weatherInfo?.sys.country}</h3>
        <span className=" text-center self-center text-[11px] leading-4 pt-2 tracking-wider uppercase font-bold">{weatherInfo?.weather[0].description}</span>
      </article>
      <button onClick={handleChangetemp} className="mt-16 bg-[#7D69F1] w-[147px] h-[32px] rounded-[9px] tracking-wider shadow-[0_4px_4px_rgba(0,0,0,0.25)]">Cambiar F°</button>
    </section>
  )
}
export default Weather