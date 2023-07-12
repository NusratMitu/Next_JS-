import Link from "next/link"

const Blog = ({blogId = 100}) => {
  console.log({blogId})
  
  return (
    <div>
      <Link href={'/'}>Home</Link>
      <h1> <Link href={`/blog/${blogId}`} replace> Blog {blogId}</Link></h1>
      <h1> <Link href={`/blog/1`}> Blog 1</Link></h1>
      <h1> <Link href={`/blog/${blogId}`}> Blog {blogId}</Link></h1>
    </div>
  )
}

export default Blog