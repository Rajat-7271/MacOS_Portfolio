import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window.js";

const Navbar = () => {
    const { openWindow } = useWindowStore();

    const handleNavClick = (type) => {
        if (!type) return;
        openWindow(type);
    };

    return (
        <nav className="flex items-center justify-between px-4 py-2">
            {/* Left side */}
            <div className="flex items-center gap-4">
                <img src="/images/logo.svg" alt="logo" className="h-6 w-6" />
                <p className="font-bold">Rajat&apos;s Portfolio</p>

                <ul className="flex items-center gap-4">
                    {navLinks.map(({ id, name, type }) => (
                        <li key={id}>
                            <button
                                type="button"
                                className="cursor-pointer hover:opacity-80"
                                onClick={() => handleNavClick(type)}
                            >
                                {name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
                <ul className="flex items-center gap-3">
                    {navIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img
                                src={img}
                                className="icon-hover h-4 w-4"
                                alt={`icon-${id}`}
                            />
                        </li>
                    ))}
                </ul>

                <time className="text-sm">
                    {dayjs().format("ddd MMM D h:mm A")}
                </time>
            </div>
        </nav>
    );
};

export default Navbar;
