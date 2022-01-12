import React from 'react';

const Filtro = () => {
  return (
    <>
      <div className="filtro__box">
        <select name="select" className="select__filtro">
          <option selected>Ordernar por:</option>
          <option value="?filtro=menorpreco">Menor Preço</option>
          <option value="?filtro=maiorpreco">Maior Preço</option>
          <option value="?filtro=az">A-Z</option>
          <option value="?filtro=za">Z-A</option>
        </select>
      </div>
    </>
  );
};
export default Filtro;
