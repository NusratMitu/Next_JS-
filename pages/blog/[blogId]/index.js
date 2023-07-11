import { useRouter } from 'next/router'

const BlogDetails = () => {
   const router = useRouter()
   const blogId = router.query.blogId
  return (
    <div>blog {blogId}</div>
  )
}

export default BlogDetails