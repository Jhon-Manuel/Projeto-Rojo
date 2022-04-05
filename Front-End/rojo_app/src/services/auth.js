import { Navigate, Outlet } from "react-router-dom";

export const UsuarioAutenticado = () => localStorage.getItem('') !== null;

export const parseJwt = () => {
    let base64 = localStorage.getItem('usuario-login').split('.')[1];

    return JSON.parse( window.atob(base64) );
}

export const ProtectedRoutes = () => {
    const isAuth = UsuarioAutenticado();
    return isAuth ? <Navigate to="/"/> : <Navigate to="/"/>;
      
}