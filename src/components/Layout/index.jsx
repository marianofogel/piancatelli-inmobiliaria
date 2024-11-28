
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";
import { NavbarComponent } from "../Navbar/Navbar";

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
