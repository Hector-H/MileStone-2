import { useEffect, useState } from 'react'
import supabase from '../supabaseClient'
import ProfileCard from './ProfileCard'


export default function ProfilePage({ profile }) {
    const [fetchError, setFetchError] = useState(null)
    const [profiles, setProfiles] = useState(null)
    // const [orderBy, setOrderBy] = useState('created_at')

    const handleDelete = (id) => {
        setProfiles(prevProfiles => {
            return prevProfiles.filter(pf => pf.id !== id)
        })
    }

    // Fetch Profiles from API
    useEffect(() => {
        const fetchProfiles = async () => {
            const { data, error } = await supabase
                .from('profiles')
                .select()
                // .order(orderBy, {ascending:false})

            if (error) {
                setFetchError('could not fetch Profiles')
                setProfiles(null)
                console.log(error)
            }
            if (data) {
                setProfiles(data)
                setFetchError(null)
            }
        }
        fetchProfiles()


    }, [])

    return (
        <div>
            {fetchError && (<p>{fetchError}</p>)}
            {profiles && (
                <div className='Profiles'>
                    
                    {profiles.map(profile => (
                        <>
                            <ProfileCard key={profile.id} profile={profile} onDelete={handleDelete}/>
                        </>
                    ))}
                </div>
            )}
        </div>
    )
}