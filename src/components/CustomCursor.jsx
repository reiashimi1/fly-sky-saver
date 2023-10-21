import React, {useEffect, useState} from "react";
import HomepageCursor from "@assets/images/homepage_cursor.png";
import CursorArrow from "@assets/images/cursor-arrow.png";

const CustomCursor = () => {
    const [position, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({
                x: e.pageX - 70,
                y: e.pageY - 70,
            });
        };
        window.addEventListener("mousemove", mouseMove, false);
        window.addEventListener("mouseenter", mouseMove, false);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseenter", mouseMove);
        };
    }, []);

    return (
        <div className="relative cursor-hidden"
             style={{left: position.x, top: position.y, pointerEvents: "none", zIndex: 999999}}>
            <div className="absolute flex justify-center items-center">
                <div className="relative">
                    <img src={HomepageCursor} className="spin-slow w-32 h-32" alt=''/>
                    <img
                        src={CursorArrow}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        alt=''/>
                </div>
            </div>
        </div>
    );
};
export default CustomCursor;
