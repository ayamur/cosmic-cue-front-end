import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import * as fortuneService from './services/fortuneService'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  useEffect(() => {
    const fetchAllFortunes = async () => {
      const data = await fortuneService.index()
      setFortunes(data)
    }
    if (user) fetchAllFortunes()
  }, [user])

  const [fortunes, setFortunes] = useState([])

  return (
    <>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.length ?
        <>
          {profiles.map(profile =>
            <p key={profile._id}>{profile.name}</p>
          )}
        </>
        :
        <p>No profiles yet</p>
      }
    </>
  )
}

export default Profiles