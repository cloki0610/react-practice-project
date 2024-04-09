import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
    const { progress } = useProgress();
    return (
        <Html>
            <span className="canvas-load"></span>
            <p className="text-[#f1f1f1] text-[14px] font-medium mt-3">
                {progress.toFixed(2)}%
            </p>
        </Html>
    );
};

export default Loader;
