import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="pt-[120px] flex flex-col justify-center items-center">
        <h1 className="text-[36px] font-bold select-none text-center">
          Sorry - PAGE NOT FOUND
        </h1>
        <Link to="/" className="text-[24px] text-center mt-11">
          Back to Home
        </Link>
      </div>
    </section>
  );
};
