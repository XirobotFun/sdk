import axios from "axios";
import { config } from "../../config/config.js";
import { analyzeMarket } from "../ai/model.js";

export async function getMarketData() {
  try {
    const res = await axios.get(
      `${config.coingeckoApi}/coins/markets`,
      {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 5,
          page: 1
        }
      }
    );

    const coins = res.data;

    return coins.map((coin) => {
      const ai = analyzeMarket(coin);

      return {
        name: coin.name,
        symbol: coin.symbol,
        price: coin.current_price,
        change24h: coin.price_change_percentage_24h,
        aiInsight: ai
      };
    });
  } catch (err) {
    console.error("Market API error:", err.message);
    return [];
  }
}
