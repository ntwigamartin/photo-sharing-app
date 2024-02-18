import Link from "next/link";

const UserCard = ({ user, userAlbumsCount }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-6">
      <div className="card-body">
        <h2 className="card-title">{user.name}({user.username})</h2>
        <p>From {user.address.city} city with {userAlbumsCount()} albums </p>
        <div className="card-actions justify-end">
          <Link href={`/users/${user.id}`}>
            <button className="btn btn-sm">See Albums</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
