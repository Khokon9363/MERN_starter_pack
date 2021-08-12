import { useEffect } from "react"
import { Link } from "react-router-dom"
import Helper from '../../../../Helpers/Helper'

export default function SlidersComponent(){
    useEffect(() => {
        Helper.setTitle('Sliders')
    }, [])
    return(
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="card">
                        <div className="card-header">
                            <div className="float-start">Sliders</div>
                            <div className="float-end">
                                <Link className="btn btn-success btn-sm" to="/dashboard/add-slider">Add slider</Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table text-center table-responsive">
                                <thead>
                                    <tr>
                                        <th>SL</th>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Test name</td>
                                        <td>
                                            <img src="" alt="Image"/>
                                        </td>
                                        <td>Test title</td>
                                        <td>Test description</td>
                                        <td>
                                            <button className="btn btn-sm btn-success mr-1">
                                                <i className="fa fa-arrow-up"></i>
                                            </button>
                                            <button className="btn btn-sm btn-info mr-1">
                                                <i className="fa fa-arrow-down"></i>
                                            </button>
                                            <button className="btn btn-sm btn-danger ml-1">
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Test name</td>
                                        <td>
                                            <img src="" alt="Image"/>
                                        </td>
                                        <td>Test title</td>
                                        <td>Test description</td>
                                        <td>
                                            <button className="btn btn-sm btn-success mr-1">
                                                <i className="fa fa-arrow-up"></i>
                                            </button>
                                            <button className="btn btn-sm btn-info mr-1">
                                                <i className="fa fa-arrow-down"></i>
                                            </button>
                                            <button className="btn btn-sm btn-danger ml-1">
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Test name</td>
                                        <td>
                                            <img src="" alt="Image"/>
                                        </td>
                                        <td>Test title</td>
                                        <td>Test description</td>
                                        <td>
                                            <button className="btn btn-sm btn-success mr-1">
                                                <i className="fa fa-arrow-up"></i>
                                            </button>
                                            <button className="btn btn-sm btn-info mr-1">
                                                <i className="fa fa-arrow-down"></i>
                                            </button>
                                            <button className="btn btn-sm btn-danger ml-1">
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}