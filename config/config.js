import dotenv from "dotenv";
dotenv.config();

export const config = {
  apiKey: process.env.API_KEY,
  rpcUrl: process.env.RPC_URL,
  coingeckoApi: process.env.COINGECKO_API
};
