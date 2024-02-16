import React from 'react'
import AlbumCard from './AlbumCard';

const AlbumsList = ({ user, albums}) => {
  return (
    <div className=''>
        <div className='flex w-full justify-center text-3xl font-bold'>
            <h1>{user.name}({user.username}) Albums</h1>
        </div>
        <div className='flex w-full overflow-y-auto overflow-x-hidden flex-wrap pl-9'>
            {albums.map(album => (
                <AlbumCard 
                    key={album.id}
                    user={user}
                    album={album}
                />
            ))}
        </div>
        
    </div>
  )
}

export default AlbumsList;