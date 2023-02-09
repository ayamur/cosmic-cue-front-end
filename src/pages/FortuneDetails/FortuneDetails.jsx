import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import styles from './FortuneDetails.module.css'

import * as fortuneService from '../../services/fortuneService'

const FortuneDetails = (props) => {
  const { id } = useParams()
  const [fortune, setFortune] = useState(null)

  useEffect(() => {
    const fetchFortune = async () => {
      const data = await fortuneService.show(id)
      console.log('data:', data)
      setFortune(data)
    }
    fetchFortune()
  }, [id])

  return (
    <main>
      <div>
      <h4>Fortune details:</h4>
      <h4>{fortune?.message?.toUpperCase()}</h4>
      <>
        <div className='fortuneDetailsButtons'>
        <Link to={`/fortunes/${id}/edit`} state={fortune}> Click Here to Edit</Link>  
        <button onClick={() => props.handleDeleteFortune(id)}>Delete</button>
        </div>
      </>
      </div>
    </main>
  )
}

export default FortuneDetails