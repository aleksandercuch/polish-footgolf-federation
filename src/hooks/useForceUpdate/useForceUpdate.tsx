import { useState } from "react";

export const useForceUpdate = () => {
    const [, setToggle] = useState(false);
    return () => setToggle(toggle => !toggle);
}