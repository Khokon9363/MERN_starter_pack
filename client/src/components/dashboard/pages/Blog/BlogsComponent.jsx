import { useEffect } from "react"
import Helper from '../../../../Helpers/Helper'

export default function BlogsComponent(){
    useEffect(() => {
        Helper.setTitle('Blogs')
    }, [])
    return(
        <div className="container-fluid">
            <h1 className="h3 mb-4 text-gray-800">Blogs Component</h1>
        </div>
    )
}