import React from "react";
import axios from "axios";

const URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

function Main() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(URL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  console.log(post);

  return (
    <div className="main">
      <h1 className="myTitle">Current Prices ($USD)</h1>

      <div className="users">
        {post.map((coin) => (
          <div className="user">
            <img src={coin.image} /> {coin.name}: ${coin.current_price}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
