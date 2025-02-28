import { WiDayCloudy } from "react-icons/wi";
import PageHeader from "../components/PageHeader";
import { MdError, MdOutlineVisibility } from "react-icons/md";
import { TbDropletExclamation } from "react-icons/tb";
import { IoRainyOutline } from "react-icons/io5";
import { FiWind } from "react-icons/fi";
import { PiMoonFill } from "react-icons/pi";
import NextDayCard from "../components/NextDayCard";
import BreakLine from "../components/BreakLine";

const next7DaysData = [
  {
    range: "30°C - 16°C",
    date: "Fri 15, Nov",
    percentage: "0%",
    type: "Mostly Clear",
  },
  {
    range: "29°C - 17°C",
    date: "Sat 16, Nov",
    percentage: "0%",
    type: "Thunderstorms",
  },
  { range: "28°C - 19°C", date: "Sun 17, Nov", percentage: "1%", type: "Rain" },
  { range: "27°C - 19°C", date: "Mon 18, Nov", percentage: "1%", type: "Rain" },
  { range: "28°C - 16°C", date: "Tue 19, Nov", percentage: "1%", type: "Rain" },
  {
    range: "27°C - 19°C",
    date: "Wed 20, Nov",
    percentage: "0%",
    type: "Partly Cloudy",
  },
  {
    range: "28°C - 19°C",
    date: "Thu 21, Nov",
    percentage: "0%",
    type: "Partly Cloudy",
  },
];

const Weather = () => {
  return (
    <div>
      <PageHeader title={"Weather"} to={"/homepage"} />

      {/* today's weather */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2 font-medium">
          <WiDayCloudy size={25} />
          <p>Today</p>
        </div>
        <p>Marlapet, Thu 14, Nov</p>
        <p className="font-semibold text-2xl">24°C</p>
      </div>

      {/* Weather Card */}
      <div className="px-5 py-4">
        <div className="bg-blue-300 rounded-lg flex flex-col overflow-hidden">
          <div className="flex flex-col gap-1 px-5 py-5 text-white">
            <div className="flex gap-1 items-center">
              <MdError />
              <p>Today</p>
            </div>
            <p className="text-sm">Partly Cloudy</p>
          </div>
        </div>
      </div>

      {/* weather details */}
      <div className="p-5">
        <div className="grid grid-cols-2 border rounded-lg overflow-hidden">
          <WeatherDetailCard
            title={"Humidity"}
            number={"67%"}
            icon={<TbDropletExclamation size={20} />}
          />
          <WeatherDetailCard
            title={"Visibility"}
            number={"26.2 km"}
            icon={<MdOutlineVisibility size={20} />}
          />
          <WeatherDetailCard
            title={"Rain"}
            number={"0%"}
            icon={<IoRainyOutline size={20} />}
          />
          <WeatherDetailCard
            title={"Wind"}
            number={"5 km/h"}
            icon={<FiWind size={20} />}
          />
        </div>
      </div>

      {/* break */}
      <BreakLine />

      {/* Hourly */}
      <div className="p-5">
        <h4 className="mb-3">Hourly</h4>
        <div className="flex justify-between gap-3">
          <HourlyDetail time={"07:30 pm"} temperature={"24°C"} />
          <HourlyDetail time={"08:30 pm"} temperature={"23°C"} />
          <HourlyDetail time={"09:30 pm"} temperature={"22°C"} />
          <HourlyDetail time={"10:30 pm"} temperature={"21°C"} />
        </div>
      </div>

      {/* break */}
      <BreakLine />

      {/* Next 7 Days */}
      <div className="px-5 py-4">
        <h4 className="mb-3">Next 7 Days</h4>
        <div className="flex flex-col gap-4">
          {next7DaysData.map((day) => (
            <NextDayCard
              key={day.date}
              range={day.range}
              date={day.date}
              percentage={day.percentage}
              type={day.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;

function WeatherDetailCard({ title, number, icon }) {
  return (
    <div className="border p-4 flex justify-center">
      <div className="flex items-center gap-4">
        <div>{icon}</div>
        <div className="text-center">
          <p className="font-medium mb-2">{number}</p>
          <p className="text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
}

function HourlyDetail({ time, temperature }) {
  return (
    <div className="border rounded-lg px-2 py-4 flex flex-col items-center gap-3">
      <p className="text-[12px]">{time}</p>
      <PiMoonFill size={20} color="lightblue" />
      <p className="text-sm">{temperature}</p>
    </div>
  );
}
