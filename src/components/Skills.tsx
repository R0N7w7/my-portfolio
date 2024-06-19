import { DiScrum } from "react-icons/di"
import { SiDocker, SiExpress, SiGit, SiMicrosoftazure, SiMysql, SiNextdotjs, SiNodedotjs, SiReact, SiSass, SiTailwindcss, SiTypescript } from "react-icons/si"

const Skills = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center bg-gray-950 py-10 gap-4" id="skills">
            <div className="mx-auto">
                <h2 className="text-3xl font-bold text-white px-2 text-center">Habilidades <span className="text-orange-600">técnicas</span></h2>
            </div>
            <div className="flex flex-wrap mx-auto mt-4 mb-4 w-full px-2 justify-center gap-8">
                <article className="px-3 bg-gray-800 text-white py-4 rounded-md w-full max-w-sm">
                    <h3 className="text-2xl font-medium">Desarrollo Frontend</h3>
                    <div className="flex flex-col w-full items-center justify-center mt-4 gap-4">
                        <div className="flex items-center gap-4 w-full text-start">
                            <SiReact size={35} /> <p className="text-lg font-medium">React.js</p>
                        </div>
                        <div className="flex items-center gap-4 w-full text-start">
                            <SiNextdotjs size={35} /> <p className="text-lg font-medium">Next.js</p>
                        </div>
                        <div className="flex items-center gap-4 w-full text-start">
                            <SiTailwindcss size={35} /> <p className="text-lg font-medium">Tailwind CSS</p>
                        </div>
                        <div className="flex items-center gap-4 w-full text-start">
                            <SiSass size={35} /> <p className="text-lg font-medium">Sass</p>
                        </div>
                    </div>
                </article>

                <article className="px-3 bg-gray-800 text-white py-4 rounded-md max-w-sm w-full">
                    <h3 className="text-2xl font-medium">Desarrollo Backend</h3>
                    <div className="flex flex-col w-full items-center justify-center mt-4 gap-4">
                        <div className="flex items-center gap-4 w-full text-start">
                            <SiNodedotjs size={35} /> <p className="text-lg font-medium">Node.js</p>
                        </div>
                        <div className="flex items-center gap-4 w-full text-start">
                            <SiExpress size={35} /> <p className="text-lg font-medium">Express.js</p>
                        </div>
                        <div className="flex items-center gap-4 w-full text-start">
                            <SiMysql size={35} /> <p className="text-lg font-medium">MySQL</p>
                        </div>
                        <div className="flex items-center gap-4 w-full text-start">
                            <SiTypescript size={35} /> <p className="text-lg font-medium">TypeScript</p>
                        </div>
                    </div>
                </article>

                <article className="px-3 bg-gray-800 text-white py-4 rounded-md max-w-sm w-full">
                    <h3 className="text-2xl font-medium">Herramientas</h3>
                    <div className="flex flex-col w-full items-center justify-center mt-4 gap-4">
                        <div className="flex items-center gap-4 w-full text-start">
                            <SiGit size={35} /> <p className="text-lg font-medium">Git</p>
                        </div>
                        <div className="flex items-center gap-4 w-full text-start">
                            <SiDocker size={35} /> <p className="text-lg font-medium">Docker</p>
                        </div>
                        <div className="flex items-center gap-4 w-full text-start">
                            <DiScrum size={35} /> <p className="text-lg font-medium">Metodologías Ágiles</p>
                        </div>
                        <div className="flex items-center gap-4 w-full text-start">
                            <SiMicrosoftazure size={35} /> <p className="text-lg font-medium">Arquitecturas de Software</p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export { Skills }
