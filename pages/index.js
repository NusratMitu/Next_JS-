import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  console.log({router});
  const handleClick = () => {
  console.log('clicked');
  // router.push(`/blog`)
  router.replace(`/blog`)


  }
  return (
    <div>
      <h1>Home</h1>
    <Link href="/blog">
      <h4>Blog</h4>
   
    </Link>
    <Link href="/docs">
    <h4>Docs</h4>
   
    </Link>
    <Link href="/users">
    <h4>Users</h4>
   
    </Link>
    <Link href="/posts">
    <h4>Posts</h4>
   
    </Link>
    <button onClick={handleClick}>
     Read blogs
    </button>
    </div>
  )
}

export default Home
