import UserCard from './UserCard';

const UsersList = ({ usersdata, albumsdata }) => {

  const handleAlbumsCount = (userId) => {
    let count = 0;
    albumsdata.forEach(album => {
      if (album.userId === userId) {
        count++;
      }
    });
    return count;
  };
  return (
    <div className='flex w-full overflow-y-auto overflow-x-hidden flex-wrap pl-9'>
      {usersdata.map(user => (
        <UserCard
          key={user.id}
          user={user}
          userAlbumsCount={() => handleAlbumsCount(user.id)}
        />
      ))}
    </div>
  )
}
export default UsersList;