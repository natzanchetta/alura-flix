import { createContext, useEffect, useState } from 'react';

export const CategoriasContext = createContext();

export const CategoriasProvider = ({ children }) => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        setCategorias([
        { nome: 'FRONT END', cor: '#6BD1FF' },
        { nome: 'BACK END', cor: '#00C86F' },
        { nome: 'MOBILE', cor: '#FFBA05' }
        ]);
    }, []);

    return (
      <CategoriasContext.Provider value={{ categorias }}>
        {children}
      </CategoriasContext.Provider>
    );
  };
