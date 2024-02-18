import Link from "next/link";
import Image from "next/image";

const PhotoCard = ({ album, photo, userId }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl m-3">
      <figure>
        <Image 
            src={photo.url} 
            alt={photo.title}
            height={400}
            width={400} 
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Title: {photo.title}</h2>
        <div className="card-actions justify-end">
          <Link href={`/users/${userId}/${album.id}/${photo.id}`}>
            <button className="btn btn-sm">Edit Title</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
