import { Outlet } from "react-router-dom";

import { Navbar } from "../HomePage";

export const Layout = () => {
    return (
        <div className="relative z-0 bg-primary">
            <header className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
            </header>
            <main className="bg-hero-pattern">
                <Outlet />
            </main>
        </div>
    );
};
