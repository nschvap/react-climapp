import DataCard from "./DataCard";
import { BiWind } from "react-icons/bi";
import { TbTemperatureCelsius } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import {
  FaTachometerAlt,
  FaThermometerFull,
  FaThermometerEmpty,
} from "react-icons/fa";
import { MdSensors } from "react-icons/md";

function Weather({ data }) {
  if (data.hasOwnProperty("name")) {
    return (
      <section className=" w-full md:w-1/3 lg:w-1/3 bg-white/20 shadow-lg shadow-black/20 backdrop-blur-md rounded-lg px-3 py-3 ">
        <div className="flex justify-center items-center px-3">
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="weather icon"
            title={`${data.weather[0].description}`}
          />
          <div className="text-2xl tracking-wide font-bold text-white">
            <span className="flex gap-x-2 justify-around items-center">
              <p>{data.name}</p>
              <img
                src={`https://raw.githubusercontent.com/hampusborgos/country-flags/main/png100px/${data.sys.country.toLowerCase()}.png`}
                alt="bandera"
                width={45}
                title={`Bandera de ${data.sys.country}`}
              />
            </span>
            <span className="flex gap-x-2 justify-center items-center mt-2">
              <p className="text-sm text-zinc-900 italic font-regular">
                Lat: {data.coord.lat}
              </p>
              <p className="text-sm text-zinc-900 italic font-regular">
                Lon: {data.coord.lon}
              </p>
            </span>
          </div>
        </div>

        <div className="flex overflow-auto flex-row gap-x-3 scrollbar pb-3">
          <DataCard
            title={"Temperatura"}
            // Tranformar Kelvin en grados celsius
            value={(parseFloat(data.main.temp) - 273.15).toFixed(2) + " ºC"}
            icon={<TbTemperatureCelsius />}
          />
          <DataCard
            title={"Sensación Térmica"}
            value={
              (parseFloat(data.main.feels_like) - 273.15).toFixed(2) + " ºC"
            }
            icon={<MdSensors />}
          />
          <DataCard
            title={"Viento"}
            value={data.wind.speed + "m/s"}
            icon={<BiWind />}
          />
          <DataCard
            title={"Humedad"}
            value={data.main.humidity + "%"}
            icon={<WiHumidity />}
          />
          <DataCard
            title={"Presión Atmosférica"}
            value={data.main.pressure + " hPa"}
            icon={<FaTachometerAlt />}
          />
          <DataCard
            title={"Temperatura max."}
            value={(parseFloat(data.main.temp_max) - 273.15).toFixed(2) + " ºC"}
            icon={<FaThermometerFull />}
          />
          <DataCard
            title={"Temperatura min."}
            value={(parseFloat(data.main.temp_max) - 273.15).toFixed(2) + " ºC"}
            icon={<FaThermometerEmpty />}
          />
        </div>
      </section>
    );
  } else {
    return (
      <p className="text-2xl font-bold text-white text-center mx-auto italic">
        Aún no hay información...
      </p>
    );
  }
}

export default Weather;
