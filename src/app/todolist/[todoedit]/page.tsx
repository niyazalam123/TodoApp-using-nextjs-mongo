"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const page = ({ params }: any) => {
    var router = useRouter();
    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");
    let id = params.todoedit;

    useEffect(() => {
        getOneTodolist()
    }, [])

    async function getOneTodolist() {
        let data = await fetch("http://localhost:3000/api/todolist/" + id);
        let result = await data.json()
        let finalResult = result.data;
        if (result.success) {
            setTitle(finalResult.title);
            setDescription(finalResult.description)
        }
    }

    async function todoModified(e: any) {
        e.preventDefault();
        if (!title || !description) {
            alert("please filled the required data")
            return;
        }
        else {
            let modifiedata = await fetch("http://localhost:3000/api/todolist/" + id, {
                method: "PUT",
                body: JSON.stringify({ title, description })
            })
            router.back()
        }
    }
    return (
        <>
            <div className='_two1'>
                <h2 className='_two10'>Edit Your Todo</h2>
                <form action="" className='_two2' onSubmit={todoModified}>
                    <div className='_two3'>
                        <label htmlFor="one1">Title</label>
                        <input type="text" value={title} placeholder='Title' id="one1" onChange={(e: any) => setTitle(e.target.value)} />
                    </div>
                    <div className='_two3'>
                        <label htmlFor="one2">Description</label>
                        <input type="text" value={description} placeholder='Description' id="one2" onChange={(e: any) => setDescription(e.target.value)} />
                    </div>
                    <button type="submit" className='_two4'>Edit Todo</button>
                </form>
                <Link href="/todolist">
                    <span className='_back1'>Go Back</span>
                </Link>
            </div>
        </>
    )
}

export default page