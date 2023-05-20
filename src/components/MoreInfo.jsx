import DataCard from "./DataCard";
import { TbSunset, TbSunrise, TbCloudRain, TbSnowman } from 'react-icons/tb';
import { BsFillCloudFill } from 'react-icons/bs';

function MoreInfo({ data }) {
  if (data.hasOwnProperty("name")) {
    const amanecer = new Date(data.sys.sunrise * 1000)
    const atardecer = new Date(data.sys.sunset * 1000)

    return (
      <section className=" w-full md:w-1/3 lg:w-1/3 bg-white/20 shadow-lg shadow-black/20 backdrop-blur-md rounded-lg px-3">
        <div className="flex justify-center items-center pt-3 px-3">
          <div className="text-2xl tracking-wide font-bold text-white h-[100px] flex items-center justify-center">
            <p>Más información</p>
          </div>
        </div>

        <div className="flex overflow-auto flex-row gap-x-3 scrollbar pb-3">
          <DataCard
            title={"Hora Amanecer"}
            value={amanecer.getHours() + 'hs'}
            icon={<TbSunrise />}
          />
          <DataCard
            title={"Hora Atardecer"}
            value={atardecer.getHours() + 'hs'}
            icon={<TbSunset />}
          />
          <DataCard
            title={"Nubes"}
            value={data.clouds.all + '%'}
            icon={<BsFillCloudFill />}
          />
          {data.rain && <DataCard
            title={"Lluvia (últ. hora)"}
            value={data.rain['1h'] + 'mm'}
            icon={<TbCloudRain />}
          />}
          {data.snow && <DataCard
            title={"Nieve (últ. hora)"}
            value={data.snow['1h'] + 'mm'}
            icon={<TbSnowman />}
          />}
        </div>
      </section>
    );
  } else {
    return null;
  }
}

export default MoreInfo;
