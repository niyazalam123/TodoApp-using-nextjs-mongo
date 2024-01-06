import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import StyledJsxRegistry from './registry';
import AddTodoList from './components/todo/AddTodoList';
import "./todolist.css";


const roboto = Roboto(
  {
    weight: ["400", '700'],
    subsets: ['latin']
  }
)

export const metadata: Metadata = {
  title: 'TodoApp With Next js and mongodb',
  description: 'TodoApp with next js and mongodb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <>
        <StyledJsxRegistry>
          <AddTodoList />
          <div className='container'>
            {children}
          </div>
          </StyledJsxRegistry>
        </>
      </body>
    </html>
  )
}
