import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom'



const Profiles = (user) => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <>
      <main >
        {/* <div className='profileSectionOne'> */}
          <div className="profiles">
            <section className="profilesTwo">
              <img src="https://i.imgur.com/oIKs9Wp.png" alt="" />
            </section>
            <section className="profilesOne">
              <h1>Welcome to Cosmic Cue</h1>
              <h2>An app that helps you create good fortune 🌙 </h2>
              <h4> Visit your profile or explore the links above</h4>
              <h4> Profiles List:</h4>
              {profiles.length ?
                <>
                  {profiles.map(profile =>
                    <div key={profile._id} className="profileLinks">
                      <Link to={`/profiles/${profile._id}`} profile={profile} key={profile._id} user={user}>
                        {profile.name}</Link>
                    </div>
                  )}
                </>
                :
                <>
                  <p>No profiles yet</p>
                </>
              }
            </section>
          </div>
        {/* </div> */}
      </main>
    </>
  )
}

export default Profiles