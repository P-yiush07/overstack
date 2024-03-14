import { useUser } from "@clerk/clerk-react";
import ProfileCard from "./ProfileCard";
import PostText from "./PostText";
import DialogDemo from "./DialogDemo";
import Qcard from "./Qcard";

interface QCardProps {
    title: string;
    description: string;
  }

export default function Home() {

    const questions: QCardProps[] = [
        {
            title: 'Question 1',
            description: 'Description 1',
        },
        {
            title: 'Question 2',
            description: 'Description 2',
        },
        {
            title: 'Question 3',
            description: 'Description 3',
        },
        {
            title: 'Question 4',
            description: 'Description 4',
        },
        {
            title: 'Question 5',
            description: 'Description 5',
        },
        {
            title: 'Question 6',
            description: 'Description 6',
        },
        {
            title: 'Question 7',
            description: 'Description 7',
        },
        {
            title: 'Question 8',
            description: 'Description 8',
        },
        {
            title: 'Question 9',
            description: 'Description 9',
        },
        {
            title: 'Question 10',
            description: 'Description 10',
        },
    ];
    
    

    const { isSignedIn } = useUser();

    console.log(isSignedIn);
    

  return (
    <>
     <div className="h-[100%] w-[100%] flex">
       <div className="w-[20%] h-[90vh] bg-white flex items-center">
        <ProfileCard />
       </div>
       <div className="w-[60%] h-[90vh] space-y-4 flex flex-col bg-red-600 overflow-y-auto" style={{ scrollbarWidth: "thin" }}>
        <PostText />
        {questions.map((q, index) => (
                <Qcard key={index} title={q.title} description={q.description} />
            ))}
       </div>
       <div className="w-[20%] h-[90vh] bg-purple-600 fixed right-0 bottom-0">
        <DialogDemo />
       </div>
    </div>
    </>
  )
}
