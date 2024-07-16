
import { createContext, useEffect, useState } from "react";

export const VideosContext = createContext([]);

const extractVideoId = (url) => {
  const urlObj = new URL(url);
  return urlObj.searchParams.get('v');
};

export const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:3000/videos');
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados do db.json');
        }
        console.log(response)
        const data = await response.json();
        const videoIds = data.map(video => extractVideoId(video.link));
        console.log("id ids",videoIds);
        const videoData = await Promise.all(data.map(async (video) => {
          const id = extractVideoId(video.link);
          const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCHqUogeVzSMDR34f0qs9TZc66bAF0XvQE&part=snippet&id=${id}`);
          if (!response.ok) {
            throw new Error('Erro ao buscar os vídeos do YouTube');
          }
          const videoData = await response.json();
          return {
            ...video,
            id: videoData.items[0].id,
            link: `https://www.youtube.com/watch?v=${videoData.items[0].id}`
          };
        }));

        console.log(videoData);
        setVideos(videoData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideos();
  }, []);

  const deletarVideo = (id) => {
    setVideos(prevVideos => prevVideos.filter(video => video.id !== id));
  };

  return (
    <VideosContext.Provider value={{ videos, setVideos, deletarVideo }}>
      {children}
    </VideosContext.Provider>
  );
};