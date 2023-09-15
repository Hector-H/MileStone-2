import { Link } from 'react-router-dom'
import supabase from "../supabaseClient"

const ProfileCard = ({ profile, onDelete }) => {

    const handleDelete = async () => {
        const { data, error } = await supabase
        .from('products')
        .delete()
        .eq('id', profile.id)
        .select()

        if(error) { 
            console.log(error)
        }
        if(data) {
            console.log(data)
            onDelete(profile.id)
        }
    }

    return (
        <div>
                        <Link to={`/profiles/${profile.id}`}>{profile.username}</Link>
                        <h3>{profile.firstName}</h3>
                        <h3>{profile.lastName}</h3>
                        <h3>${profile.email}</h3>
                        <h3>{profile.address}</h3>
                        <h3>{profile.city}</h3>
                        <h3>{profile.state}</h3>
                        <h3>{profile.phoneNumber}</h3>
                        <h3>{profile.zipCode}</h3>
                        
                        {/* <button> */}
                        <div>
                            <Link to={'/profiles/edit/' + profile.id}>
                                <i className="material-icons">edit</i>
                            </Link>
                            <i className="material-icons" onClick={handleDelete}>delete</i>
                            {/* {profile.checkOutButton}</button> */}</div>
                        
        </div>
    )
}

export default ProfileCard