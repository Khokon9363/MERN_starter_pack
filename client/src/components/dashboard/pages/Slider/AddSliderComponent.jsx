import { useEffect } from "react"
import Helper from '../../../../Helpers/Helper'

export default function AddSliderComponent(){
    useEffect(() => {
        Helper.setTitle('Add Slider')
    }, [])
    return(
        <div className="container-fluid">
            <h1 className="h3 mb-4 text-gray-800">Add Slider Component</h1>
        </div>
    )
}