import { useRouter } from "next/router";

const PostDetails = ({post}) => {
  const router = useRouter()
  console.log({router});
  if(router.isFallback){
  return  <h1>loading...</h1>
  }
  return (
    <>
    <h1>Post Detail</h1>
    <h2>{post.id}. {post.title}</h2>
    <p>{post.body}</p>
    </>
  )
}

export default PostDetails
 export async function getStaticPaths () {
  //   const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  //   const data = await response.json();
    
  //  const paths = data.map(post => {
  //   return {
  //           params: {postId: `${post?.id}`}
  //   }
  //  })

    return {
        paths : [
            {
                params: {postId: '1'}
            },
            {
                params: {postId: '2'}
            },
            {
                params: {postId: '3'}
            }
        ], 
        // paths,
        // fallback: false
        fallback: true
    }
    
 }
export async function getStaticProps(context) {
    const{ params} = context

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()
    console.log(`Generating page for /post/${params.postId}`);
  if(!data.id){
    return {
      notFound : true
    }
  }

    return {
        props: {
            post: data
        }
    }

}