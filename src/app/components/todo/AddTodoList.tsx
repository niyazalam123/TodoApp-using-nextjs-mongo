"use client"
import Link from 'next/link'
import React from 'react'

const AddTodoList = () => {
  return (
    <>
      <style jsx>{`
        ._todo1 {
            max-width: 500px;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            background: #44d;
            height: 70px;
            margin-top: 2px;
          }
          ._todo4 {
            display: flex;
            justify-content: space-between;
            padding: 5px 8px;
            align-items: center;
            height: 100%;
          }
          ._todo2 {
            color: #fff;
            font-size: 27px;
            font-weight: 500;
          }
          ._todo3 {
            background: #fff;
            padding: 9px 10px;
            border-radius: 4px;
          }
        `}
      </style>
      <header className='_todo1'>
        <div className='_todo4'>
          <Link href="/todolist">
            <h2 className='_todo2'>Todo List</h2>
          </Link>
          <Link href="/addtodolist">
            <div className='_todo3'>
              Add Todo list
            </div>
          </Link>
        </div>
      </header>
    </>
  )
}

export default AddTodoList