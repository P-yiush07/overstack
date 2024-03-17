import { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from 'axios';

export default function DialogDemo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    const userData = { title, description };
    axios.post('http://127.0.0.1:8000/api/addpost/', userData)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
};

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-[10vw] h-[3vw] rounded-[35px]">Write Post</Button>
      </DialogTrigger>
      <DialogContent className="w-[70%]">
        <DialogHeader>
          <DialogTitle>Ask Question</DialogTitle>
          <DialogDescription>
           Write your Question
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input
              id="name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Input
              id="username"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
