export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center md:items-start justify-start pt-16 md:pt-24 lg:pt-32 p-8 md:p-16 lg:p-24">
            <div className="flex flex-col md:flex-row md:gap-12 w-full">
                <section className="max-w-3xl md:w-1/2">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-3 text-primary text-left">Edward Dennis</h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-normal mb-6 text-muted-foreground opacity-60 text-left">Software Engineer</h2>
                    <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-8 text-left">
                        I build exceptional human-centred digital experiences.
                    </p>
                </section>

                <section className="md:w-1/2 mt-8 md:mt-0">
                    <p className="text-muted-foreground text-base md:text-lg text-left mb-4">
                        I'm a software engineer passionate about building high-performance, pixel-perfect web applications that blend elegant design with robust engineering.
                    </p>
                    <p className="text-muted-foreground text-base md:text-lg text-left mb-4">
                        My favourite work lies at the intersection of technology and entrepreneurship, where innovation meets meaningful impact.
                    </p>
                    <p className="text-muted-foreground text-base md:text-lg text-left mb-4">
                        Currently, I work in EY's Digital Engineering team, where I help clients solve complex challenges and deliver impactful results through thoughtful engineering.
                    </p>
                </section>
            </div>
        </main>
    );
}