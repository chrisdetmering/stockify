import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'

export const Login = ({ login }) => {
    const history = useHistory();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(false)
    const [isValidPassword, setIsValidPassword] = useState(false)

    const handleLogin = (): void => {
        if (isValidEmail && isValidPassword) {
            const body = JSON.stringify({ email, password })
            fetch('/api/auth/login', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body
            }).then(response => response.json())
                .then(data => {
                    if (data.errorMessage) {
                        setEmailError(data.errorMessage)
                    } else {
                        login(() => {
                            localStorage.setItem('session_token', data.session_token);
                            history.push('/home')
                        })
                    }

                })
                .catch(error => {
                    console.error(error);
                })
        }
    }



    const handleEmailChange = (e: { target: { value: any; }; }) => {
        const value = e.target.value
        handleEmailValidation(value)
        setEmail(value)
    }

    const inludeAtAndPeriod = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    const handleEmailValidation = (email: string): void => {
        let valid = false;
        if (email === '') {
            setEmailError('email can\'t be blank')
        } else if (!inludeAtAndPeriod(email)) {
            setEmailError('email must include @ before')
        } else {
            valid = true;
            setEmailError('')
        }
        setIsValidEmail(valid)
    }

    const handlePasswordChange = (e: { target: { value: any; }; }) => {
        const value = e.target.value
        validatePassword(value)
        setPassword(value)
    }

    const validatePassword = (pw: string): void => {
        let valid = false
        if (pw === '') {
            setPasswordError('password can\'t be blank')
        } else if (pw === email) {
            setPasswordError('password can\'t be same as email')
        } else if (pw.length < 6) {
            setPasswordError('password can\'t be less than 8 characters')
        } else if (!/[0-9]/.test(pw)) {
            setPasswordError('password must include at least one number')
        } else if (!/[A-Z]/.test(pw)) {
            setPasswordError('password must include at least one capital letter')
        } else {
            valid = true
            setPasswordError('')
        }
        setIsValidPassword(valid)
    }

    return (<>
        <h1>Login</h1>
        <label>Email</label>
        <br />
        <input type="email" onChange={handleEmailChange} value={email} />
        <br />
        {<span className="emailErrors">{emailError}</span>}
        <br />
        <label>Password</label>
        <br />
        <input type="password" onChange={handlePasswordChange} value={password} />
        <br />
        {<span>{passwordError}</span>}
        <br />
        <button
            onClick={handleLogin}
            disabled={!(isValidPassword && isValidEmail)}>
            Login
        </button>
        <br />
        <Link to="/register">Don't have an account?</Link>
    </>)
}
