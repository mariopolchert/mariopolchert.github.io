const About = () => {
    return (
        <section id="about" className=" h-screen w-screen bg-darkText ">
            <div className="flex h-full w-full flex-col items-center justify-center ">
                <div className="content grid max-w-[1024px] grid-cols-1 text-lightText landscape:mt-0 landscape:lg:pt-[15vh]">
                    <div className="mt-[10vh] space-y-4 portrait:mt-[5vh]">
                        <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                            <span className="custom-underline cursor-pointer duration-1000 hover:text-accent">
                                ABOUT
                            </span>
                        </h2>
                        <p className="text-lg md:text-2xl landscape-xs:text-2xl portrait:text-2xl">
                            Hi...I&apos;m
                            <span className=" cursor-pointer duration-1000 hover:animate-none hover:text-accent md:animate-pulse">
                                &nbsp;Mario
                            </span>
                            , it&apos;s good to have you here. Have a look
                            around.
                        </p>
                        <p className="text-lg md:text-xl landscape-xs:text-xl">
                            I&apos;m a passionate web developer dedicated to
                            delivering high-quality work. I have a solid
                            foundation in web technologies, and continuously
                            learning to provide optimal solutions. Collaboration
                            and communication are essential to success, and as a
                            quick learner and team player, I bring those skills
                            to every project. Offering website design,
                            development, and maintenance services. Let&apos;s
                            create something exceptional together!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
