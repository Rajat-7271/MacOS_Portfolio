import gsap from "gsap";
import {Draggable} from "gsap/Draggable";

import {Dock, Navbar, Welcome} from "#components";
import {Finder, Resume, Safari, Terminal, Text, Image, Contact} from "#windows";
import useWindowStore from "#store/window.js";

gsap.registerPlugin(Draggable);

const App = () => {
    const {windows} = useWindowStore();

    return (
        <main>
            <Navbar/>
            <Welcome/>
            <Dock/>

            {windows.terminal.isOpen && <Terminal/>}
            {windows.safari.isOpen && <Safari/>}
            {windows.resume.isOpen && <Resume/>}
            {windows.finder.isOpen && <Finder/>}
            {windows.txtfile.isOpen && <Text/>}
            {windows.imgfile.isOpen && <Image/>}
            {windows.contact.isOpen && <Contact/>}

        </main>
    );
};

export default App;