import { getMarketData } from "./services/market.js";
import { analyzePortfolio } from "./services/portfolio.js";
import { formatUSD } from "./utils/helpers.js";

async function main() {
  console.log("🚀 Xirobot Starting...\n");

  const market = await getMarketData();
  const portfolio = await analyzePortfolio();

  console.log("📊 Market Insights:");
  market.forEach((coin) => {
    console.log(
      `${coin.name} (${coin.symbol.toUpperCase()}): $${coin.price} | ${coin.change24h}%`
    );
    console.log(`AI: ${coin.aiInsight.trend} - ${coin.aiInsight.insight}\n`);
  });

  console.log("💼 Portfolio:");
  console.log(`Total Value: ${formatUSD(portfolio.totalValue)}`);
  console.log(portfolio.assets);
}

main();
