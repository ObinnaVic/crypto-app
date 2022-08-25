import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useGlobalContext } from "./context";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { chartDays } from "./buttonData";
import Selected from "./SelectedBtn";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ chart }) => {
  const { darkMood } = useGlobalContext();
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(1);

  const getData = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${chart.id}/market_chart?vs_currency=usd&days=${days}`
    );
    const info = await response.json();
    setCoinData(info.prices);
  };

  useEffect(() => {
    getData();
  }, [days]);

  return (
    <main
      className={darkMood ? "row bg-light text-dark" : "row bg-dark text-light"}
    >
      {!coinData ? (
        ""
      ) : (
        <section className="mt-5">
          <Line
            data={{
              labels: coinData.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12} : ${date.getMinutes()} PM`
                    : `${date.getHours()} : ${date.getMinutes()} AM`;

                return days === 1 ? time : date.toLocaleDateString();
              }),
              datasets: [
                {
                  data: coinData.map((coin) => coin[1]),
                  label: `Price (Past ${days} Days) in usd`,
                  borderColor: "#EEBC1D",
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />
          <div className="m-3 d-flex justify-content-center">
            {chartDays.map((day) => {
              return (
                <Selected
                  key={day.value}
                  onClick={() => setDays(day.value)}
                  active={day.value === days}
                >
                  {day.label}
                </Selected>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
};

export default Chart;
