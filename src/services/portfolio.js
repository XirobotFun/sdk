export async function analyzePortfolio() {
  // mock portfolio (replace with wallet integration)
  const portfolio = [
    { asset: "BTC", amount: 0.5, price: 60000 },
    { asset: "ETH", amount: 2, price: 3000 }
  ];

  const totalValue = portfolio.reduce(
    (sum, p) => sum + p.amount * p.price,
    0
  );

  return {
    assets: portfolio,
    totalValue,
    message: "Portfolio analyzed successfully 🚀"
  };
}
