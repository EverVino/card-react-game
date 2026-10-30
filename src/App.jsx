import { useState, useEffect } from 'react'
import { GifsGrid } from './components/GifsGrid';
import { Info } from './components/Info';
const GIPHY_APIKEY = "qgW0CRjPr80dQ32gRN3U8Uy74Q29F6M3"
const QUERIES = ["cats", "dogs", "smile"]
const GIF_NUMBER = 9;
function App() {
  const [gifs, setGifs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedGifs, setClickedGifs] = useState(new Map());

  useEffect(() => {
    async function fetchGifs () {
      try {
        const query = QUERIES[Math.floor(Math.random()*QUERIES.length)]
        const url = new URL("https://api.giphy.com/v1/gifs/search")
        url.searchParams.set("api_key", GIPHY_APIKEY);
        url.searchParams.set("q", query);
        url.searchParams.set("limit", GIF_NUMBER);
        url.searchParams.set("rating", "g");

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch gifs");
        }
        const result = await response.json();
        setGifs(result.data);
        
      } catch(error){
        setError(error.message);
      } finally {
        setLoading(false)
      }
    }
    fetchGifs();
  },[])

  function handleClick(imgId) {
    console.log(imgId)
    const currentClick = clickedGifs.get(imgId) || 0;
    console.log(currentClick);
    console.log(clickedGifs);
    console.log("-------------")
    if(currentClick>0) {
      alert("You lose, You clicked a image more than once.")
      setClickedGifs(new Map());
      setScore(0);
      return;
    } 

    const newScore = score + 1;
    setScore(newScore);
    if (newScore > bestScore) {
      setBestScore(newScore);
    }

    if (newScore == GIF_NUMBER){
      alert("You won! You clicked all images just once!")
      setClickedGifs(new Map());
      setScore(0);
      return
    }
    
    const newClickedGifs = new Map(clickedGifs)
    newClickedGifs.set(imgId, currentClick + 1);
    setClickedGifs(newClickedGifs);
    const newGifs = [...gifs].sort(()=> Math.random() - 0.5);
    setGifs(newGifs)
  }
  if (loading) return <p>Loading GIFs...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <Info score={score} bestScore={bestScore}/>
      <GifsGrid data={gifs} callback={handleClick}/>
    </>
  )
}

export default App
