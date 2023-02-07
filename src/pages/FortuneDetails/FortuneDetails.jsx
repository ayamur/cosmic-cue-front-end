import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from './FortuneDetails.module.css'

import * as fortuneService from '../../services/fortuneService'

const FortuneDetails = (props) => {
  const { id } = useParams()
  const [fortune, setFortune] = useState(null)

  useEffect(() => {
    const fetchFortune = async () => {
      const data = await fortuneService.show(id)
      
      setFortune(data)
      
      console.log('props', props)
      console.log('fortune id:', id)
      console.log('data2:', data)
    }
    fetchFortune()
  }, [id])
  
  console.log(fortune, 'Fortune state')

  //this is the fortune id
  console.log(id)

  return (
    <main>
      Details
    </main>
  )
}

export default FortuneDetails