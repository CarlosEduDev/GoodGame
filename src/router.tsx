import { createBrowserRouter} from 'react-router-dom'
import { Categories } from './pages/Categories'
import { Default } from './layout/Default'
import { Home } from './components/Home'
import { About } from './pages/about'



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Default/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/categories',
                element: <Categories/>
            },
            {
                path: '/about',
                element: <About/>
            }
        ]
    },
])