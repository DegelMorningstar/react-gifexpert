import { useEffect, useState } from "react";
import { getGifs } from "../utils/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () =>{
      const newImages = await getGifs(category);
      setImages(newImages);
        setIsLoading(false);
    }
  
    //en este use effect solo se realiza la primera vez que se dibuja el comp
    useEffect( () => {
      getImages();
    }, []
    )

  return {
    images,
    isLoading
  }
}
