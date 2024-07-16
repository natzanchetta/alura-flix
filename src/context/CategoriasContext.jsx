import React, { createContext, useEffect, useState } from 'react';

export const CategoriasContext = createContext();

export const CategoriasProvider = ({ children }) => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3000/categorias')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => setCategorias(data))
        .catch(error => console.error('Erro ao buscar as categorias:', error));
    }, []);

    return (
      <CategoriasContext.Provider value={{ categorias }}>
        {children}
      </CategoriasContext.Provider>
    );
  };
