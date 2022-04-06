import { UsuarioAutenticado } from "./auth";
import { Navigate, Outlet} from "react-router-dom";

function PrivateRoute (){
        return UsuarioAutenticado ? <Outlet/> : <Navigate to="/"/>;
}

export default PrivateRoute;