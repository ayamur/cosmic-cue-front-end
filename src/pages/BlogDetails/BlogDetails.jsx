import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './BlogDetails.module.css'

// Services
import * as blogService from '../../services/blogService'

const BlogDetails = (props) => {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    const fetchBlog = async () => {
      const data = await blogService.show(id)
      setBlog(data)
    }
    fetchBlog()
  }, [id])

  // Verify state with a console.log or React Dev Tools:
  console.log('Blog State:', blog)

  return (
    <main className={styles.container}>
      Details
    </main>
  )
}

export default BlogDetails