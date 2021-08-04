import { useEffect } from "react"
import Helper from '../../../../Helpers/Helper'

export default function SlidersComponent(){
    useEffect(() => {
        Helper.setTitle('Sliders')
    }, [])
    return(
        <div className="container-fluid">
            <h1 className="h3 mb-4 text-gray-800">Sliders Component</h1>
        </div>
    )
}