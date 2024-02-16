'use client';

import PhotosList from '@components/PhotosList';
import { useEffect, useState} from 'react';

const Album = ({params}) => {
    const [album, setAlbum] = useState([]);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchAlbum = async () => {
          const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumId}`);
          const data = await response.json();
          setAlbum(data);
        }
    
        const fetchPhotos = async () => {
          const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumId}/photos`);
          const data = await response.json();
          setPhotos(data);
        }
        fetchAlbum();
        fetchPhotos();
      }, [params.albumId]);

  return (
    <div>
        <PhotosList 
            album={album}
            photos={photos}
            user={params.userId}
        />
    </div>
  )
}

export default Album;