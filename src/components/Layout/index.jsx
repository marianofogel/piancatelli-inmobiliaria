import { NavbarComponent } from "../Navbar";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div style={{ flex: 1 }}>
        <NavbarComponent />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
