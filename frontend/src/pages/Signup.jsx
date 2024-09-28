import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [matchError, setMatchError] = useState(null); // For password mismatch error
	const { signup, error, isLoading } = useSignup();

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Check if passwords match
		if (password !== confirmPassword) {
			setMatchError("Passwords do not match!");
			return;
		}

		setMatchError(null); // Clear previous error if passwords match
		await signup(email, password);
	};

	return (
		<div className="max-w-[600px] mx-auto my-36 p-10 flex flex-col gap-4">
			<div className="text-2xl font-bold my-4">Sign Up</div>

			<form onSubmit={handleSubmit}>
				<div className="grid w-full items-center gap-4">
					<div className="flex flex-col space-y-1.5">
						<Input
							id="email"
							type="email"
							placeholder="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="flex flex-col space-y-1.5">
						<Input
							id="password"
							type="password"
							placeholder="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="flex flex-col space-y-1.5">
						<Input
							id="confirmPassword"
							type="password"
							placeholder="confirm password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</div>
				</div>
			</form>

			<div className="mx-auto my-4">
				<Button variant="disabled" className="px-0 text-xs">
					Have an account already?
				</Button>
				<Link to="/login">
					<Button variant="link" className="px-2 text-xs">
						Login here{" "}
					</Button>
				</Link>
			</div>

			{/* Error for password mismatch */}
			{matchError && (
				<Alert variant="destructive">
					<AlertCircle className="h-4 w-4" />
					<AlertDescription>{matchError}</AlertDescription>
				</Alert>
			)}

			{/* Error from the signup hook */}
			{error && (
				<Alert variant="destructive">
					<AlertCircle className="h-4 w-4" />
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			)}

			{/* Loading state or Sign Up button */}
			{isLoading ? (
				<Button className="w-full" variant="disabled">
					Loading...
				</Button>
			) : (
				<Button className="w-full" type="submit">
					Sign Up
				</Button>
			)}
		</div>
	);
};

export default Signup;
