import User from "@/components/user";

const UserList = ({users}) => {
    // console.log({users});
  return (
    <>
        
        <h1>list of users </h1>
        {
            users.map((user) =>
            <div key={user.id}>
<User user={user}/>
            </div>
            )
        }
    </>
  )
}

export default UserList;

export async function getStaticProps() {
const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
const data = await response.json();
console.log(data); 
 return {
    props : {
        users: data
    }
 }
// return data
}