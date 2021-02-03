import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import Header from './Header'

function Login()
{
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
            history.push("/add")
        }
    }, [])

    async function signin()
    {
        console.warn("data", email, password)
        let item = {email, password}
        let result = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem('user-info', JSON.stringify(result));
        history.push('/add')
    }

    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3"> 
            <h1>User Login</h1>
            <input type="text" value = { email } onChange = { (e) => setEmail(e.target.value) } className="form-control" placeholder="Enter Email"/>
            <br />
            <input type="password" value = {password} onChange = { (e) => setPassword(e.target.value) } className="form-control" placeholder="Enter Password"/>
            <br />
            <button onClick = {signin} className="btn btn-primary">Signin</button>
        </div>
        </div>
    )
}

export default Login;