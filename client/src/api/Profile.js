import axios from 'axios'

const URL = process.env.REACT_APP_SERVER_URL

export const me = (token) => axios.post(`${URL}/auth/me`, null, {
                                        headers: { 
                                            Authorization: `Bearer ${token}`
                                        }
                                    })
                                   .then(res => {return res} )
                                   .catch(err => {return err.response} )