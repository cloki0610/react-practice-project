const Backdrop = ({
    onClick,
}: {
    onClick: React.MouseEventHandler<HTMLDivElement>;
}) => {
    return (
        <div
            className="fixed inset-0 z-10 bg-gray-900 bg-opacity-50 transition-opacity duration-300 ease-in-out"
            onClick={onClick}
        />
    );
};

export default Backdrop;
