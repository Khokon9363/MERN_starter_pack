import { useEffect } from "react"
import Helper from '../../../../Helpers/Helper'

export default function CategoriesComponent(){
    useEffect(() => {
        Helper.setTitle('Categories')
    }, [])
    return(
        <div className="container-fluid">
            <h1 className="h3 mb-4 text-gray-800">Categories Component</h1>
        </div>
    )
}