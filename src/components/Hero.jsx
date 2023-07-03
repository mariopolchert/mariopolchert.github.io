const Hero = () => {
    return (
        <section id="home" className="bg-green-300 h-screen w-screen ">
            <div className="container h-full w-full flex flex-col items-center justify-center bg-darkText">
                <div className="content flex flex-col pt-[10vh] portrait:pt-[10vh]  md:pl-12 md:pt-[10vh]">
                    <h2 className="text-center portrait:text-center md:text-left text-[4vh] portrait:text-[4vh] md:text-[6vh]  text-paleGreen hover:text-accent duration-1000 cursor-pointer font-bold tracking-normal">
                        Welcome to my website, my name is...
                    </h2>
                    <h1 className="text-center portrait:text-center md:text-left text-[5vh] portrait:text-[5vh] md:text-[6vh]  font-bold text-lightText cursor-pointer hover:text-accent duration-1000 tracking-normal">
                        Mario Polchert
                    </h1>
                    <h2 className="text-center portrait:text-center md:text-left text-[4vh] portrait:text-[4vh] md:text-[6vh]  font-bold text-paleGreen hover:text-accent duration-1000 cursor-pointer tracking-normal">
                        I&apos;m a Web Developer
                    </h2>
                    <button
                        type="button"
                        className="btn-group group flex portrait:mx-auto mt-[10vh] portrait:mt-[10vh]  md:mt-[5vh] md:w-fit lg:ml-0 text-lightText hover:text-accent hover:border-red-600 bg-darkText border-accent border-2 font-semibold rounded-md text-lg px-5 py-2.5  duration-500"
                    >
                        <a href="#work" className="flex space-x-4 items-center">
                            <span className="flex mx-auto items-center">
                                SEE MY WORK...
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-8 h-8 py-auto group-hover:text-red-600 group-hover:duration-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
>
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
</svg>;
