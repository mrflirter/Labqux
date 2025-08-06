const COINGECKO_API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1&sparkline=false';
const NEWS_API = 'https://newsdata.io/api/1/news?apikey=pub_9c9a5157b14c43ab85080abdb950e720&q=crypto&language=en';
const WHALE_API = 'https://api.whale-alert.io/v1/transactions?api_key=demo&min_value=500000&currency=btc';

async function loadCryptoPrices() {
  const res = await fetch(COINGECKO_API);
  const data = await res.json();
  const container = document.getElementById("crypto-container");
  container.innerHTML = data.map(coin => `
    <div><strong>${coin.name}</strong>: $${coin.current_price}</div>
  `).join("");
}

async function loadNewsTicker() {
  const res = await fetch(NEWS_API);
  const data = await res.json();
  const marquee = document.getElementById("news-marquee");
  marquee.textContent = data.results.map(article => article.title).join(" ⏺ ");
}

async function loadWhaleTransactions() {
  const res = await fetch(WHALE_API);
  const data = await res.json();
  const whaleBox = document.getElementById("whale-container");
  whaleBox.innerHTML = data.transactions.map(tx => `
    <div>${tx.amount} BTC moved from ${tx.from.owner_type} to ${tx.to.owner_type}</div>
  `).join("");
}

window.navigate = function (id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

window.onload = () => {
  loadCryptoPrices();
  loadNewsTicker();
  loadWhaleTransactions();
};
