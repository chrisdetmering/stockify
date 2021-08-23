import { useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import './Register.css';

export const Register = ({ login }) => {
    const history = useHistory();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [formError, setFormError] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);

    const isFormFilled = (): boolean => {
        if (firstName === '') {
            setFormError("First name can't be blank")
            return false;
        }

        if (lastName === '') {
            setFormError("Last name can't be blank")
            return false
        }

        if (!isValidEmail) {
            setFormError(emailError)
            return false
        }

        if (username === '') {
            setFormError("Username can't be blank")
            return false
        }

        if (!isValidPassword) {
            setFormError(passwordError)
            return false
        }

        return true
    }


    const handleSignUp = (): void => {
        if (isFormFilled()) {
            const body = JSON.stringify({ email, password })
            fetch('/api/auth/register', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body
            }).then(response => response.json())
                .then(data => {
                    if (data.errorMessage) {
                        setFormError(data.errorMessage)
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

    const handleEmailChange = (e: any): void => {
        const value = e.target.value
        handleEmailValidation(value)
        setEmail(value)
    }

    const handleFirstNameChange = (e: any): void => {
        const value = e.target.value;
        setFirstName(value);
    }

    const handleLastNameChange = (e: any): void => {
        const value = e.target.value;
        setLastName(value);
    }

    const handleUsernameChange = (e: any): void => {
        const value = e.target.value;
        setUsername(value);
    }

    const inludeAtAndPeriod = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    const handleEmailValidation = (email: string): void => {
        let valid = false;
        if (email === '') {
            setEmailError('email can\'t be blank')
        } else if (!inludeAtAndPeriod(email)) {
            setEmailError('email must include @ before .')
        } else {
            valid = true;
            setEmailError('')
        }
        setIsValidEmail(valid)
    }

    const handlePasswordChange = (e: any): void => {
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
        <div>
            <h1>SignUp </h1>
            <label> First Name </label>
            <br />
            <input type="text" onChange={handleFirstNameChange} value={firstName} />
            <br />

            <label> Last Name </label>
            <br />
            <input type="text" onChange={handleLastNameChange} value={lastName} />
            <br />

            <label> Email </label>
            <br />
            <input type="email" onChange={handleEmailChange} value={email} />
            <br />

            <label> Username </label>
            <br />
            <input type="text" onChange={handleUsernameChange} value={username} />
            <br />

            <label>Password </label>
            <br />
            <input type="password" onChange={handlePasswordChange} value={password} />
            <br />
            {<span>{formError}</span>}
            <br />
            <button onClick={handleSignUp}> Sign Up </button>
            <br />
            <Link to="/" > Already have an account ? </Link>
        </div>
    </>)

}