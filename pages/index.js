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
   Blog
    </Link>
    <Link href="/docs">
   Docs
    </Link>
    <button onClick={handleClick}>
     Read blogs
    </button>
    </div>
  )
}

export default Home
