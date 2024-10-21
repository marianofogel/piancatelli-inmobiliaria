import { useEffect } from "react";
import { useLocation } from "react-router-dom";  // Asegúrate de tener `react-router-dom`

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Al cambiar la ruta, vuelve el scroll al inicio de la página
        window.scrollTo(0, 0);
    }, [pathname]);  // Este hook se ejecuta cada vez que cambia la ruta (pathname)

    return null;
};

export default ScrollToTop;