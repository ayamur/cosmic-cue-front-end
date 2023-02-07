const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/signs`

const index = async () => {
  const res = await fetch(BASE_URL)
  return res.json()
}

export {
  index,
}