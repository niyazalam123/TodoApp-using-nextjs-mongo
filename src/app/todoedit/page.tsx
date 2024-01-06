import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <div className='_two1'>
                <h2 className='_two10'>Edit Your Todo</h2>
                <form action="" className='_two2'>
                    <div className='_two3'>
                        <label htmlFor="one1">Title</label>
                        <input type="text" placeholder='Title' id="one1" />
                    </div>
                    <div className='_two3'>
                        <label htmlFor="one2">Description</label>
                        <input type="text" placeholder='Description' id="one2" />
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