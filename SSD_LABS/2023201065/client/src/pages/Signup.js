import { useState } from "react"
import {useSignup} from '../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpass, confirmPassword] = useState('')
    const {signup, error, isLoading} = useSignup() 
    const handleSubmit = async(e) => {
        e.preventDefault()

        await signup(email, password, confirmpass)
    }
    return (
        <form className="signup" onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Password:</label>
            <input type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <label>Confirm Password:</label>
            <input type="password"
                onChange={(e) => confirmPassword(e.target.value)}
                value={confirmpass}
            />
             <button disabled={isLoading}>Sign Up</button>
             {error && <div className="error">{error}</div>}

        </form>
    )
}

export default Signup