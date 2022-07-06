import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import {getGifs} from '../utils/getGifs';

export const GifGrid = ({ category, onDeleteCategory }) => {
  //custom hook
  const { images, isLoading} = useFetchGifs (category);
    
  return (
    <>
      <div className='category-title'>
        <h3>{category}</h3>
        <button name={category} onClick={ (e) => onDeleteCategory(e) }>Eliminar</button>
      </div>
      {
        isLoading && (<h2>Cargando....</h2>)  //Operador And logico, forma corta del IF
      }
      <div className='card-grid'>
          {images.map( (image) => (
            <GifItem 
              key={image.id} 
              {...image}
            />
          ))}
      </div>
    </>
  );
};
