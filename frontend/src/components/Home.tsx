import ProfileCard from "./ProfileCard";
import PostText from "./PostText";
import DialogDemo from "./DialogDemo";
import Qcard from "./Qcard";
import { useEffect, useState } from "react";
import axios from 'axios';

interface Post {
    _id: string;
    title: string;
    description: string;
}

export default function Home() {    
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/get/');
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

  return (
    <>
     <div className="h-[100%] w-[100%] flex">
       <div className="w-[20%] h-[90vh] bg-white flex items-center">
        <ProfileCard />
       </div>
       <div className="w-[60%] h-[90vh] space-y-4 flex flex-col bg-red-600 overflow-y-auto" style={{ scrollbarWidth: "thin" }}>
        <PostText />
        {posts.map((post) => (
                    <Qcard key={post._id} title={post.title} description={post.description} />
                ))}
       </div>
       <div className="w-[20%] h-[90vh] bg-purple-600 fixed right-0 bottom-0">
        <DialogDemo />
       </div>
    </div>
    </>
  )
}
