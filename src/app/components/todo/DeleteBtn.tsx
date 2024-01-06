"use client"
import React from 'react'
import { RiDeleteBinFill } from "react-icons/ri";
import { useRouter } from 'next/navigation';

const DeleteBtn = ({id}:any) => {
    let router = useRouter();
    async function deletTodo(){
        let deletBtn = await fetch("/api/todolist/"+id,{
            method:"delete"
        })
        if (deletBtn.ok){
            router.refresh();
        }
    }
    return (
        <>
            <span className='_todolst4' onClick={deletTodo}>
                <RiDeleteBinFill />
            </span>
        </>
    )
}

export default DeleteBtn