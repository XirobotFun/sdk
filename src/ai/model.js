export function analyzeMarket(data) {
  // simple AI logic (mock)
  const trend =
    data.price_change_percentage_24h > 0 ? "BULLISH" : "BEARISH";

  return {
    trend,
    confidence: Math.abs(data.price_change_percentage_24h),
    insight:
      trend === "BULLISH"
        ? "Market shows upward momentum 📈"
        : "Market under pressure 📉"
  };
}
