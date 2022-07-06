import { useState } from "react";
//agrupar importaciones
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);

  const onAddCategory = (newCategory) => {
    //evita que se repita la entrada de manera sencilla
    //solo lo valida si es exactamente igual, no distingue entre mayus y minus
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  const onDeleteCategory = ({target}) =>{
    const name = target.getAttribute("name")
    console.log(name);
    setCategories(categories.filter(cat => cat !== name));
  }

  const onCleanCategoryList = () =>{
    setCategories([]);
  }

  return (
    <>
      <div className="header">
        <h1 className="title">Buscador de Gifs promedio</h1>
        <AddCategory onNewCategory={onAddCategory} />
      </div>
      <button onClick={onCleanCategoryList}>Limpiar</button>
      <div className="content">
      {categories.map((category) => (
        <GifGrid key={category} category={category} onDeleteCategory={onDeleteCategory} />
      ))}
      </div>
      
    </>
  );
};
