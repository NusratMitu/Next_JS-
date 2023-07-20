
const User = ({user}) => {
  return (
    <>
    <h4>{user?.name}</h4>
<p>{user?.email}</p>
    </>
  )
}

export default User