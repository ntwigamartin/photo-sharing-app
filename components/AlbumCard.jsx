import Link from "next/link";

const AlbumCard = ( {user, album}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-6">
    <div className="card-body">
      <h2 className="card-title">Title: {album.title}</h2>
      <div className="card-actions justify-end">
        <Link href={`/users/${user.id}/${album.id}`}>
          <button className="btn btn-sm">See Photos</button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default AlbumCard;