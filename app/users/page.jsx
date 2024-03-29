'use client';

import { useEffect, useState } from 'react';
import UsersList from '@components/UsersList';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    }

    const fetchAlbums = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      const data = await response.json();
      setAlbums(data);
    }
    fetchUsers();
    fetchAlbums();
  }, []);

  return (
    <div>
        <div className='flex justify-center w-full text-3xl font-extrabold'>
          <h1>All USERS</h1>
        </div>
        <UsersList 
          usersdata={users}
          albumsdata={albums}
        />
    </div>
  )
}

export default Users;