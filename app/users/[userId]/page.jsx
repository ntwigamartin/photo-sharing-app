'use client';

import { useEffect, useState} from 'react';
import AlbumsList from '@components/AlbumsList';

const User = ({params}) => {

    const [user, setUser] = useState([]);
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
          const data = await response.json();
          setUser(data);
        }
    
        const fetchAlbums = async () => {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/albums`);
          const data = await response.json();
          setAlbums(data);
        }
        fetchUser();
        fetchAlbums();
      }, [params.userId]);

  return (
    <div>
        <AlbumsList
            user={user}
            albums={albums} 
        />
    </div>
  )
}

export default User;