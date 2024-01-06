"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");
    let router = useRouter();

    async function addTododList(e: any) {
        e.preventDefault();
        if (!title || !description) {
            alert("fill required field")
        }
        else {
            let toData = await fetch("http://localhost:3000/api/todolist", {
                method: "POST",
                body: JSON.stringify({ title, description })
            })
            router.back();
        }
    }
    return (
        <>
            <div className='_two1'>
                <h2 className='_two10'>Add New Todo</h2>
                <form action="" className='_two2' onSubmit={addTododList}>
                    <div className='_two3'>
                        <label htmlFor="one1">Title</label>
                        <input type="text" value={title} placeholder='Title' id="one1" onChange={(e: any) => setTitle(e.target.value)} />
                    </div>
                    <div className='_two3'>
                        <label htmlFor="one2">Description</label>
                        <input type="text" value={description} placeholder='Description' id="one2" onChange={(e: any) => setDescription(e.target.value)} />
                    </div>
                    <button type="submit" className='_two4'>Add Todo</button>
                </form>
                <Link href="/todolist">
                    <span className='_back1'>Go Back</span>
                </Link>

            </div>
        </>
    )
}

export default page