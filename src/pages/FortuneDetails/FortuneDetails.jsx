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
      console.log('data:', data)
      setFortune(data)
    }
    fetchFortune()
  }, [id])

  return (
    <main>
      <h4>Fortune category: {fortune?.category.toUpperCase()}</h4>
      <h4>Fortune message: {fortune?.message}</h4>
      <h4>Lucky number: {fortune?.luckyNumber}</h4>
    </main>
  )
}

export default FortuneDetails