import * as tokenService from "./tokenService"

// http://localhost:3001/api/fortunes
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/fortunes`

const create = async (fortuneData) => {
  // POST http://localhost:3001/api/fortunes
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fortuneData)
    })
    return res.json()
  } catch (error) {
    console.log(error);
  }
}
