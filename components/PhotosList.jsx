import Link from "next/link";
import PhotoCard from './PhotoCard';

const PhotosList = ({ album, photos, userId }) => {
  return (
    <div>
        <div className='flex w-full justify-evenly text-3xl font-bold'>
            <h1>{album.title} photos</h1>
            <Link href={`/users/${userId}`}>
                <button className="btn btn-sm">Albums</button>
            </Link>
        </div>
        <div className='flex w-full overflow-y-auto overflow-x-hidden flex-wrap pl-9 ml-9'>
            {photos.map(photo => (
                <PhotoCard 
                    key={photo.id}
                    photo={photo}
                    album={album}
                    userId={userId}
                />
            ))}
        </div>
    </div>
  )
}

export default PhotosList;