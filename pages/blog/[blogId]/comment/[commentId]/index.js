import { useRouter } from 'next/router'

const CommentDetails = () => {
    const router = useRouter()
    const {blogId, commentId} = router.query
  return (
    <div>Comment Details of blog id {blogId} og comment {commentId}</div>
  )
}

export default CommentDetails