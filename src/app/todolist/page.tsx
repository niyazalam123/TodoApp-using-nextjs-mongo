import React from 'react';
import { FaEdit } from "react-icons/fa";
import Link from 'next/link';
import DeleteBtn from '../components/todo/DeleteBtn';

async function getTodoData() {
  let todoData = await fetch("http://localhost:3000/api/todolist", { cache: 'no-store' });
  let allTodo = await todoData.json();
  return allTodo;
}

const Page = async () => {
  let resultTodo = await getTodoData();
  let todosData = resultTodo.todos;
  let oldArray = todosData.reverse();
  return (
    <>
      <div className='_todolst1'>
        {
          oldArray.map((item: any) => (
            <div className='_todolst20' key={item._id}>
              <div className='_todolst2'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className='_todolst3'>
                <DeleteBtn id={item._id} />
                <span className='_todolst5'>
                  <Link href={`/todolist/${item._id}`}>
                    <span className='_todolst6'>
                      <FaEdit />
                    </span>
                  </Link>
                </span>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Page;