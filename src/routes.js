import Index from './Pages/Home/Index.svelte'
import Login from './Pages/Home/Login.svelte'
import UsuarioIndex from './Pages/Usuario/Index.svelte'
import Error404 from './Pages/Home/Error404.svelte'

const routes = {
    "/": Index,
    "/Home/Login": Login,
    "/Usuario/Index": UsuarioIndex,
    "*": Error404
}

export default routes;