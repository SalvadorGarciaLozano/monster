import { login } from "../login/login";
import { CategoriasPage, ContactoPage, HomePage, ProyectosPage, ServiciosPage, SesionPage, Productos } from "../pages/index";

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    component: JSXComponent;
    name: string;
    children?: Route[]
}

export const routes: Route[] = [
    {
        path: '/home',
        component: HomePage,
        name: 'Home'
    },
    {
        path: 'contacto',
        component: ContactoPage,
        name: 'wyvern voladores'
    },
    
    {
        path: 'proyectos',
        component: ProyectosPage,
        name: 'wyvern acuaticos'
    },
    {
        path: '/servicios',
        component: ServiciosPage,
        name: 'dragones ancianos'
    },
    {
        path: 'sesion',
        component: SesionPage,
        name: 'wyvern brutos'
    },
    {
        path: '/login',
        component: login,
        name: 'login'
    },
];