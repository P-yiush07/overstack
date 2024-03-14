import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center flex-col gap-10">
        <h1 className="text-4xl font-bold mt-20 bold">Please Sign Up ...</h1>
        <SignUp />
    </div>
  )
}