import { useEffect, useState } from "react"
import { Link, useHistory } from 'react-router-dom'
import Helper from '../../Helpers/Helper'
import HeaderComponent from '../frontend/partials/HeaderComponent'
import { login } from '../../api/Auth'

export default function LoginComponent(){
    const [user, setUser] = useState(Helper.getUserAndToken())
    const [phoneOrEmail, setPhoneOrEmail] = useState('xavegeta@mailinator.com')
    const [password, setPassword] = useState('12345678')
    const [errors, setErrors] = useState({})

    const loginForm = async (e) => {
        e.preventDefault()
        setErrors({})
        const result = await login({phoneOrEmail, password})
        if(result.data.errors) setErrors(result.data.errors)
        else if(result.status === 200) {
            clearForm()
            Helper.Toaster(result.data.message ?? 'User logged in successfully !!!')
            setUser(Helper.setUserAndToken(result.data.user))
        }
    }

    const clearForm = () => {
        setErrors({})
        setPhoneOrEmail('')
        setPassword('')
        document.querySelector('.login-form').reset()
    }

    const history = useHistory()

    useEffect(() => {
        if(user && user.token){
            history.push('/dashboard')
        }
        Helper.setTitle('Login')
    }, [user])
    return (
        <>
            <HeaderComponent />
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-center align-items-center" style={{height: '80vh', backgroundColor: '#81e0fc'}}>
                        <form className="col-sm-5 login-form" onSubmit={loginForm}>
                            <div className="mb-3">
                                <label htmlFor="phoneOrEmail" className="form-label">Phone or Email address</label>
                                <input type="text" defaultValue={phoneOrEmail} onClick={(e) => setPhoneOrEmail(e.target.value)} className="form-control" id="phoneOrEmail" />
                                <small className="text-danger">{(errors.phoneOrEmail && errors.phoneOrEmail.msg) ? errors.phoneOrEmail.msg : ''}</small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" defaultValue={password} onClick={(e) => setPassword(e.target.value)} className="form-control" id="password" />
                                <small className="text-danger">{(errors.password && errors.password.msg) ? errors.password.msg : ''}</small>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                            <div>
                                Don't have an account ? <Link to="/auth/register">Register</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}