import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (

    <Card className="max-w-[600px] mx-auto my-36">
      <CardHeader>
        <CardTitle>Hi! Welcome back to PictureU</CardTitle>
        
        <Link to="/signup">
        <Button variant="disabled" className="px-0">Don't have an account?</Button>
        <Button variant="link" className="px-2">SignUp here </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input 
              id="email" 
              type="email" 
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}  />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input 
              id="password" 
              type="password" 
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}  />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        {(isLoading) ? 
          <Button variant="disabled">Log in</Button>
          : <Button onClick={handleSubmit}>Log in</Button>

        }
        {error && <div className="error">{error}</div>}
      </CardFooter>
    </Card>
    
    // <form className="login" onSubmit={handleSubmit}>
    //   <h3 className="font-semibold">Log In</h3>
      
    //   <label>Email address:</label>
    //   <input 
    //     type="email" 
    //     onChange={(e) => setEmail(e.target.value)} 
    //     value={email} 
    //   />
    //   <label>Password:</label>
    //   <input 
    //     type="password" 
    //     onChange={(e) => setPassword(e.target.value)} 
    //     value={password} 
    //   />

    //   <button disabled={isLoading}>Log in</button>
    //   {error && <div className="error">{error}</div>}
    // </form>
  )
}

export default Login