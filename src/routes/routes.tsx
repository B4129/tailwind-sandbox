import {DefaultLayout} from "../components/layouts/DefaultLayout";
import {Sandbox} from "../pages/Sandbox";
import {Main} from "../pages/Main";
// import {NoLayout} from "../components/layouts/NoLayout";

export const rootPath = [
    {
        path: '/', element: <DefaultLayout/>, children: [
            {
                path: '',
                element: <Main/>,
            },
        ],
    },
    {
        path: '/*',
        element: <DefaultLayout/>,
        children: [
            {
                path: 'sandbox',
                element: <Sandbox/>,
            },
        ],
    },
]