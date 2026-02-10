import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { techStack } from "#constants/index.js";
import { Check, Flag } from "lucide-react";
import WindowControls from "#components/WindowControls.jsx";

const Terminal = () => {
    return (
        <>
            {/* Window Header */}
            <div id="window-header">
                <WindowControls target="terminal" />
                <h2>Tech Stack</h2>
            </div>

            {/* Terminal Body */}
            <div className="techstack">
                <p>
                    <span className="font-bold">@Rajat % </span>
                    show tech stack
                </p>

                <div className="label">
                    <p className="w-32">Category</p>
                    <p>Technologies</p>
                </div>

                <ul className="content">
                    {techStack.map(({ category, items }) => (
                        <li key={category} className="flex items-start gap-3">
                            <Check className="check mt-1" size={20} />
                            <h3>{category}</h3>

                            <ul className="flex flex-wrap gap-1">
                                {items.map((item, i) => (
                                    <li key={i}>
                                        {item}
                                        {i < items.length - 1 ? "," : ""}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <div className="footnote">
                    <p className="flex items-center gap-2">
                        <Check size={18} />
                        6 of 6 stacks loaded successfully (100%)
                    </p>

                    <p className="flex items-center gap-2 text-black">
                        <Flag size={14} fill="black" />
                        Render time: 6ms
                    </p>
                </div>
            </div>
        </>
    );
};

// Wrap with HOC
const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
