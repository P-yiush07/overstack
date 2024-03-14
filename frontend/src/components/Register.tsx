import { Link } from "react-router-dom";
import { Button } from "./ui/button";


export default function Register() {
    return (
        <div className="h-screen flex">
            <div className="w-1/2 bg-custom-900 text-white p-20">
                <h1 className="font-bold text-4xl">Aquarius</h1>
            </div>
            <div className="bg-custom-800 w-1/2 flex flex-col text-white relative">
                <div className="flex-grow flex flex-col justify-center items-center space-y-4 text-black">
                    <Link to="/signin">
                        <Button className="px-4 py-2 w-36" variant="outline">Login</Button>
                    </Link>
                    <Link to="/signup">
                        <Button className="px-4 py-2 w-36">SignUp</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
