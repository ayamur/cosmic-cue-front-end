import Love from '../../assets/icons/Love.png'
import Food from '../../assets/icons/Food.png'

const Icon = ({ category }) => {
  const icons = {
    Love: Love,
    Food: Food
  }

  return <img className="icon" src={icons[category]} alt={`A ${category} icon.`} />
}

export default Icon