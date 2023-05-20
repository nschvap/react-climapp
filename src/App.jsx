// https://api.openweathermap.org/data/2.5/weather?q=ciudad&appid=a0b3f80fa0c7a9ba36648383401ef4a0

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Weather from "./components/Weather";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MoreInfo from "./components/MoreInfo";

function App() {
  const [placeName, setPlaceName] = useState("");
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!placeName.trim())
      return toast("Ingresa el nombre de algún sitio.", {
        type: "error",
        autoClose: 1500,
        closeOnClick: true,
        theme: "dark",
      });

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        placeName
      )}&appid=a0b3f80fa0c7a9ba36648383401ef4a0`
    )
      .then((x) => x.json())
      .then((data) => {
        if (data.hasOwnProperty("name")) {
          setData(data);
        } else {
          return toast("No se ha encontrado información.", {
            type: "error",
            autoClose: 1500,
            closeOnClick: true,
            theme: "dark",
          });
        }
      });
  };

  const reset = () => {
    setData({});
  }

  return (
    <div className="w-full min-h-screen">
      <main className="w-full px-5 lg:px-20 pt-5">
        <nav className="flex h-[45px] rounded-md w-full justify-between lg:px-5 items-center">
          <h1 className="font-bold text-3xl text-orange-400 italic cursor-pointer hover:drop-shadow-md shadow-orange-500" onClick={reset}>climapp</h1>
          <small className="italic font-semibold text-white/30">
            <a href="https://nschvap.vercel.app">Por Nico Schvap ;)</a>
          </small>
        </nav>

        <section className="animate__animated animate__fadeInUp flex shadow-lg shadow-black/20 max-w-xl mx-auto mt-8 py-7 rounded-lg justify-center items-center bg-white/10 backdrop-blur-md">
          <form action="#" onSubmit={handleSubmit}>
            <label htmlFor="place" className=" text-lg italic text-white">
              Ingresa el nombre de un lugar
            </label>
            <div className="flex justify-center mt-3 items-center">
              <input
                type="text"
                value={placeName}
                name="place"
                className="w-72 h-8 px-3 py-1 outline-none rounded-tl-lg rounded-bl-lg"
                placeholder="London"
                onChange={(e) => setPlaceName(e.target.value)}
              />
              <button
                type="submit"
                className="px-3 py-1 h-8 outline-none rounded-tr-lg rounded-br-lg bg-orange-400"
              >
                <FiSearch className="text-white text-xl" />
              </button>
            </div>
          </form>
        </section>

        <div className={`${data.hasOwnProperty("name") ? `animate__animated animate__fadeInUp` : ''} flex flex-col lg:flex-row gap-5 lg:justify-center mt-7`}>
          <Weather data={data} />
          <MoreInfo data={data} />
        </div>
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
