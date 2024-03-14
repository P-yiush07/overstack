import { Button } from "./ui/button";


export default function PostText() {

    const handleClick = () => {
     console.log("Button Clicked");
    }

    return (
        <div className="flex items-center justify-center flex-col bg-yellow-500 w-full h-40 p-[3vw]">
            <Button onClick={handleClick} className="w-[10vw] h-[3vw] rounded-[35px]">Write Post</Button>
        </div>
    )
}