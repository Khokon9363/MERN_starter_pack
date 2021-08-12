import { useEffect } from "react"
import { Link } from 'react-router-dom'
import Helper from '../../../../Helpers/Helper'

export default function AddSliderComponent(){
    useEffect(() => {
        Helper.setTitle('Add Slider')
    }, [])
    return(
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="card">
                        <div className="card-header">
                            <div className="float-start">Add slider</div>
                            <div className="float-end">
                                <Link className="btn btn-success btn-sm" to="/dashboard/sliders">Sliders</Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="image" className="form-label">Image</label>
                                    <div className="col-sm-9">
                                        <input type="file" accept="image/png, image/jpeg, image/jpg" className="form-control" />
                                        {/* <small className="text-danger">{(errors.image && errors.image.msg) ? errors.image.msg : ''}</small> */}
                                    </div>
                                    {/* { avatarShow &&
                                        <div className="col-sm-3">
                                            <img src={avatarShow} style={{height: '100px', width: '100px'}} />
                                        </div>
                                    } */}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea className="form-control" />
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" defaultChecked={true} id="status" />
                                    <label className="custom-control-label" htmlFor="status">Published</label>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-block btn-success">Save slider</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}