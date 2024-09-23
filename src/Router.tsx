import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {HomePage} from 'src/pages/home/HomePage'
import {TodoPage} from 'src/pages/todo/TodoPage'
import type {Router as RouterType} from '@remix-run/router'

const router: RouterType = createBrowserRouter([
  {
    Component: HomePage,
    path: '/',
  },
  {
    Component: TodoPage,
    path: '/todo'
  }
])

export const Router = () => {
  return <RouterProvider router={router} />
}
