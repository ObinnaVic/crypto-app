import React from "react";
import AliceCarousel from "react-alice-carousel";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

const Trending = () => {
  const { decimals, trending } = useGlobalContext();

  const coins = [];

  for (let i = 0; i < trending.length; i++) {
    const element = trending[i].item;
    coins.push(element);
  }

  const items = coins.map((coin) => {
    return (
      <div
        className="shadow-lg"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 50,
        }}
      >
        <img height="100" src={coin.large} alt={coin.name} className="mb-2" />
        <div className="fw-bold">{coin.name}</div>
        <div>{coin.symbol}</div>
        <div>{decimals(coin.price_btc.toString().slice(0, 8))} btc</div>
        <Link to={`/coin/${coin.id}`}>
          <button className="btn border-primary my-2 text-primary">
            More Info
          </button>
        </Link>
      </div>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <main>
      <div className="mb-5">
        <h1 className="m-0">Trending Coins</h1>
        <span className="text-secondary" style={{ fontSize: 13 }}>
          #Past 24hours
        </span>
      </div>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={900}
        animationDuration={900}
        disableButtonsControls
        disableDotsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </main>
  );
};

export default Trending;
