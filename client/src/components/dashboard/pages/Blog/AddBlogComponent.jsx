import { useEffect } from "react"
import Helper from '../../../../Helpers/Helper'

export default function AddBlogComponent(){
    useEffect(() => {
        Helper.setTitle('Add Blog')
    }, [])
    return(
        <div className="container-fluid">
            <h1 className="h3 mb-4 text-gray-800">Add Blog Component</h1>
        </div>
    )
}