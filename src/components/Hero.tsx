import Link from "next/link"
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

const Hero = () => {
    return (
        <section className="flex w-full min-h-[80dvh] items-center justify-center flex-col gap-6 py-3">
            <div className="flex w-full items-center justify-center px-3">
                <h1 className="text-5xl font-bold md:text-6xl">Hola<span className="text-orange-600">,</span> soy <span className="text-orange-600">Roberto</span>.</h1>
            </div>
            <div className="flex px-3 max-w-3xl">
                <p className="text-xl font-medium md:text-2xl">+1 año de experiencia. <span className="text-orange-600 font-semibold">Desarrollador Fullstack y Freelance de desarrollo web</span> en Pachuca, México. Especializado en el desarrollo de aplicaciones web únicas.</p>
            </div>
            <div className="flex gap-6 flex-wrap px-5 text-lg md:text-xl">
                <Link
                    className="cursor-pointer border border-black flex gap-3 items-center justify-center px-2 py-1 rounded hover:bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 transition-all hover:border-blue-500"
                    href={"https://www.linkedin.com/in/roberto-616-cruz/"}
                >
                    <FaLinkedin /> LinkedIn
                </Link>
                <Link
                    className="cursor-pointer border border-black flex gap-3 items-center justify-center px-2 py-1 rounded hover:bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 transition-all hover:border-gray-500"
                    href={"https://github.com/R0N7w7"}
                >
                    <FaGithub /> GitHub
                </Link>

                <Link
                    className="cursor-pointer border border-black flex gap-3 items-center justify-center px-2 py-1 rounded hover:bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300 transition-all hover:border-pink-400"
                    href={"https://www.instagram.com/ron.cruz.616/"}
                >
                    <FaInstagram /> Instagram
                </Link>
                <Link
                    className="cursor-pointer border border-black flex gap-3 items-center justify-center px-2 py-1 rounded hover:bg-gradient-to-r from-red-200 via-red-300 to-red-400 transition-all hover:border-red-500"
                    href={"mailto:cr439694@gmail.com"}
                >
                    <FaEnvelope /> Gmail
                </Link>
            </div>
            <div className="mt-3">
                <Link
                    className="bg-black shadow-sm text-white rounded px-3 py-2 text-lg font-bold hover:bg-gray-900 transition-all hover:scale-105"
                    href={"#about"}
                >Conoce más</Link>
            </div>
        </section>
    )
}

export { Hero }
