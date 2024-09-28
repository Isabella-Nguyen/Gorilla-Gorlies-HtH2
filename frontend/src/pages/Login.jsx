import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login, error, isLoading } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await login(email, password);
	};

	return (
		<div className="max-w-[600px] mx-auto my-36 p-10 flex flex-col gap-4">
			<div className="text-2xl font-bold my-4">Log In</div>

			<form>
				<div className="grid w-full items-center gap-4">
					<div className="flex flex-col space-y-1.5">
						<Input
							id="email"
							type="email"
							placeholder="email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="flex flex-col space-y-1.5">
						<Input
							id="password"
							type="password"
							placeholder="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
				</div>
			</form>

			<div className="mx-auto my-4">
				<Button variant="disabled" className="px-0 text-xs">
					Don't have an account?
				</Button>
				<Link to="/signup">
					<Button variant="link" className="px-2 text-xs">
						SignUp here{" "}
					</Button>
				</Link>
			</div>

			{error && (
				<Alert variant="destructive">
					<AlertCircle className="h-4 w-4" />
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			)}
			{isLoading ? (
				<Button className="w-full" variant="disabled">
					Loading ..
				</Button>
			) : (
				<Button className="w-full" onClick={handleSubmit}>
					Let's Go!
				</Button>
			)}
		</div>

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
	);
};

export default Login;
