import Link from "next/link";

const PostList = ({posts}) => {
    return (
      <>
      <h1>list of posts</h1>
      {
          posts.map((post) =>
          <div key={post.id}>
            <h2>  
                <Link href={`/posts/${post.id}`}>
                {post.id} :{post.title}
                </Link>
            </h2>
           
              <hr />
          </div>
          )
      }
      
      </>
    )
  }
  
  export default PostList;
  
  export async function getStaticProps () {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      const data = await response.json();
      return {
          props: {
              posts: data
          }
      }
  }