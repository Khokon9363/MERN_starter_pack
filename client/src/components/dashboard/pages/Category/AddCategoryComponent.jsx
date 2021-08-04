import { useEffect } from "react"
import Helper from '../../../../Helpers/Helper'

export default function AddCategoryComponent(){
    useEffect(() => {
        Helper.setTitle('Add Category')
    }, [])
    return(
        <div className="container-fluid">
            <h1 className="h3 mb-4 text-gray-800">Add Category Component</h1>
        </div>
    )
}