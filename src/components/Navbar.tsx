import Link from "next/link"
import { PiBracketsAngleBold } from "react-icons/pi"
import { MobileMenu } from "./MobileMenu"

const Navbar = () => {
    return (
        <nav className="flex w-full justify-between px-4 py-2 bg-gray-950 md:py-4">
            <div className="flex w-full items-center gap-4 cursor-pointer">
                <PiBracketsAngleBold size={35} className="fill-white" /> <p className="text-2xl font-semibold text-white">Roberto <span className="text-orange-600">Cruz</span></p>
            </div>
            <MobileMenu />
            <ul className="text-white gap-8 hidden md:flex w-full items-center justify-end lg:text-lg">
                <li className="hover:underline underline-offset-4 transition-all cursor-pointer"><Link href="#about">Sobre mí</Link></li>
                <li className="hover:underline underline-offset-4 transition-all cursor-pointer"><Link href="#experience">Experiencia</Link></li>
                <li className="hover:underline underline-offset-4 transition-all cursor-pointer"><Link href="#projects">Proyectos</Link></li>
                <li className="hover:underline underline-offset-4 transition-all cursor-pointer"><Link href="#skills">Habilidades</Link></li>
                <li className="hover:underline underline-offset-4 transition-all cursor-pointer"><Link href="#contact">Contacto</Link></li>
            </ul>
        </nav>
    )
}

export { Navbar }
