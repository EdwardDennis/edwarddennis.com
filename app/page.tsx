import {Badge} from "@/components/ui/badge";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center md:items-start justify-start pt-16 md:pt-24 lg:pt-32 pl-8 md:pl-16 lg:pl-24 pr-8 md:pr-0 lg:pr-0 pb-8 md:pb-16 lg:pb-24">
            <div className="flex flex-col md:flex-row md:gap-12 w-full">
                <section className="max-w-3xl md:w-1/2 md:sticky md:top-24">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-3 text-primary text-left">Edward Dennis</h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-normal mb-6 text-muted-foreground opacity-60 text-left">Software Engineer</h2>
                    <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-8 text-left">
                        I build exceptional human-centred digital experiences.
                    </p>
                    <div className="mt-4 flex items-center justify-start md:fixed md:bottom-0 md:left-0 md:mt-0 md:pl-16 md:pb-8 lg:pl-24 md:z-10">
                        <a className="block hover:text-slate-200" href="https://github.com/EdwardDennis" target="_blank"
                           rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                            <span className="sr-only">GitHub</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                 className="h-6 w-6" aria-hidden="true">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                        </a>
                        <a className="block hover:text-slate-200 ml-4" href="https://www.linkedin.com/in/edwarddennisuk/"
                           target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)"
                           title="LinkedIn">
                            <span className="sr-only">LinkedIn</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="h-6 w-6" aria-hidden="true">
                                <path
                                    d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                            </svg>
                        </a>
                    </div>
                </section>

                <div className="md:w-1/2 w-full mt-8 md:mt-0 md:h-[calc(100vh-8rem)] lg:h-[calc(100vh-10rem)] md:overflow-y-auto">
                    <div className="md:pr-8 lg:pr-16">
                        <section className="mb-12">
                            <p className="text-muted-foreground text-base md:text-lg text-left mb-4">
                                I&apos;m a software engineer passionate about building high-performance, pixel-perfect
                                web applications that blend elegant design with robust engineering.
                            </p>
                            <p className="text-muted-foreground text-base md:text-lg text-left mb-4">
                                My favourite work lies at the intersection of technology and entrepreneurship, where
                                innovation meets meaningful impact.
                            </p>
                            <p className="text-muted-foreground text-base md:text-lg text-left mb-4">
                                Currently, I work in EY&apos;s Digital Engineering team, where I help clients solve
                                complex challenges and deliver impactful results through thoughtful engineering.
                            </p>
                        </section>
                        <section className="w-full">
                            <div
                                className="mb-10 p-4 rounded-md transition-all duration-200 hover:bg-accent/5 hover:shadow-sm">
                                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                                    <div className="md:w-1/5">
                                        <p className="text-muted-foreground font-medium">2021 - Present</p>
                                    </div>

                                    <div className="md:w-4/5">
                                        <h3 className="text-lg font-medium mb-1">Software Engineer</h3>
                                        <h4 className="text-base text-muted-foreground mb-3">EY</h4>
                                        <p className="text-muted-foreground mb-4">
                                            Led development of client-facing web applications, focusing on performance
                                            optimization and accessibility.
                                            Collaborated with cross-functional teams to deliver solutions that meet
                                            business requirements.
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="outline">React</Badge>
                                            <Badge variant="outline">TypeScript</Badge>
                                            <Badge variant="outline">Next.js</Badge>
                                            <Badge variant="outline">Tailwind CSS</Badge>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="mb-10 p-4 rounded-md transition-all duration-200 hover:bg-accent/5 hover:shadow-sm">
                                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                                    <div className="md:w-1/5">
                                        <p className="text-muted-foreground font-medium">2018 - 2021</p>
                                    </div>

                                    <div className="md:w-4/5">
                                        <h3 className="text-lg font-medium mb-1">Frontend Developer</h3>
                                        <h4 className="text-base text-muted-foreground mb-3">Tech Innovations Inc.</h4>
                                        <p className="text-muted-foreground mb-4">
                                            Developed responsive web applications with a focus on user experience.
                                            Implemented design systems to ensure consistency across platforms.
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="outline">JavaScript</Badge>
                                            <Badge variant="outline">Vue.js</Badge>
                                            <Badge variant="outline">SCSS</Badge>
                                            <Badge variant="outline">Webpack</Badge>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}