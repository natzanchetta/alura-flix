import { createContext, useEffect, useState } from "react";

export const VideosContext = createContext([]);

export const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/videos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setVideos(data))
      .catch(error => console.error('Erro ao buscar os vídeos:', error));
  }, []);

  return (
    <VideosContext.Provider value={{ videos }}>
      {children}
    </VideosContext.Provider>
  );
};
