import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newInput = inputValue.trim();
    if (newInput.length <= 1) return;
    //setCategories((categories) => [inputValue, ...categories]); metodo 1
    //metodo2 llama a la funcion en gifexpertapp
    onNewCategory(newInput);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} className='search'>
      <input
        type="text"
        placeholder="¿Que estas buscando?"
        value={inputValue}
        onChange={onInputChange}
      />
      <button>Buscar</button>
    </form>
  );
};
