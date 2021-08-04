import { useEffect, useState } from "react"
import Helper from '../../../Helpers/Helper'
import { me } from '../../../api/Profile'

export default function ProfileComponent(){
    const [user, setUser] = useState({})

    useEffect(async () => {
        Helper.setTitle('Profile')
        const result = await me(Helper.getUserAndToken().token)
        setUser(result.data.user)
    }, [])
    return(
        <div className="container-fluid">
            <h1>Name :- { user.name }</h1>
            <h1>Email :- { user.email }</h1>
            <h1>Phone :- { user.phone }</h1>
            <h1 className="h3 mb-4 text-gray-800">Profile Component</h1>
        </div>
    )
}