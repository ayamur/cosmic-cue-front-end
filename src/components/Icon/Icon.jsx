import Love from '../../assets/icons/Love.png'
import Food from '../../assets/icons/Food.png'
import Travel from '../../assets/icons/Travel.png'

const Icon = ({ category }) => {
  const icons = {
    Love: Love,
    Food: Food,
    Travel: Travel,
  }

  return <img className='icon' src={icons[category]} alt={`A ${category} icon.`} />
}

export default Icon