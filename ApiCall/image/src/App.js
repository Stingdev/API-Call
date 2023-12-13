import "./App.css";
import axios from 'axios';
import SearchHeader from "./SearchHeader";
import { useState } from "react";
import ImageList from "./components/ImageList";

function App() {

  const searchImages = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization:'Client-ID QMopcf20LqdmBtaDXmgUTyNe82V0iDkevmqHg1AXiLU'
      },
      params:{
        query:term
      }
    })
    return response.data.results;
  };
  
const [images, setImages] = useState([])

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);

  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceholder={images}/>
    </div>
  );
}

export default App;
