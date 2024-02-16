import React from 'react'
import PhotoCard from './PhotoCard';

const PhotosList = ({ album, photos, user }) => {
  return (
    <div>
        <div className='flex w-full justify-center text-3xl font-bold'>
            <h1>{album.title} photos</h1>
        </div>
        <div className='flex w-full overflow-y-auto overflow-x-hidden flex-wrap pl-9 ml-9'>
            {photos.map(photo => (
                <PhotoCard 
                    key={photo.id}
                    photo={photo}
                    album={album}
                    user={user}
                />
            ))}
        </div>
    </div>
  )
}

export default PhotosList;