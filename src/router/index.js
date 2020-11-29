import discover from "../pages/discover"
import friendts from "../pages/frients/friendts"
import Mine from "../pages/mime"




const  routes = [
    {
        "path":'/',
        exact:true,
        "component":discover,
    },
    {
        "path":'/friend',
        "component":friendts,
    },
    {
        "path":'/mine',
        "component":Mine,
    },


 ]


export default routes