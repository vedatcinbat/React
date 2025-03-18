import React, {useState, ChangeEvent, FormEvent} from 'react'

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    // Handle form submission
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        console.log(`Submitted: ${email} ${password}`)
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="email">Email:</label>
            <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
            />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
            />
        </div>
        <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm