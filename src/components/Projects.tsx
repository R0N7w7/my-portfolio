import { Project } from "./Project"

type Projects = {
    title: string,
    description: string,
    imageUrl: string,
    url: string
}

const projects: Array<Projects> = [
    {
        title: 'Oftalmología & Cirugía Ocular - Web',
        description: 'Desarrollamos un sitio web desde cero, optimizado para los más altos estándares de SEO, mejorando significativamente el posicionamiento orgánico en los motores de búsqueda más populares. La plataforma ofrece una experiencia de usuario excepcional y está diseñada para destacar en su campo.',
        imageUrl: '/oftalmologia.jpg',
        url: "https://oftalmologopachuca.com.mx/"
    },
    {
        title: 'Cirujano de Rodilla | Dr. Marco Jardinez',
        description: 'Creamos una landing page ultrarrápida y eficiente, desarrollada con Next.js y Tailwind CSS. Esta página está diseñada para cargar en tiempo récord, proporcionando una experiencia de usuario fluida y optimizada, ideal para captar la atención de pacientes potenciales.',
        imageUrl: '/rodilla.jpg',
        url: "https://cirujanoderodilla.com.mx/"
    },
    {
        title: 'Uni-Inventario - ERP de Inventarios',
        description: 'Una avanzada plataforma web de control y gestión de inventarios, desarrollada con las tecnologías más modernas: React para el frontend y Node.js en el backend. Utiliza una base de datos MySQL robusta y está optimizada con Express.js para un rendimiento superior. El diseño de la interfaz de usuario es moderno y altamente intuitivo, gracias a la integración de bibliotecas de diseño como Ant Design (antd) y Tailwind CSS. Uni-Inventario garantiza una gestión eficiente y una experiencia de usuario excepcional y fluida.',
        imageUrl: '/uninventario.jpg',
        url: "https://github.com/R0N7w7/inventario-client-jsx"
    },
    {
        title: 'C-Means Calculator',
        description: 'Una herramienta interactiva de cálculo para algoritmos C-Means difuso y no difuso, construida con React.js. Incorpora bibliotecas visuales como Chart.js para ilustrar patrones y comportamientos, ofreciendo una experiencia de usuario altamente intuitiva y dinámica.',
        imageUrl: '/cmeans.jpg',
        url: "https://c-means-typescript.vercel.app/"
    },
    {
        title: 'Gest-All (En progreso...)',
        description: 'Gest-All es un ERP integral diseñado para administrar y gestionar empleados, asistencias y nóminas. Desarrollado desde cero utilizando Node.js y Express.js para el backend, y React.js para el frontend, acompañado de una base de datos MySQL y un diseño moderno con CSS y HTML. Esta plataforma promete revolucionar la eficiencia en la gestión de recursos humanos con su enfoque integral y tecnología de vanguardia.',
        imageUrl: '/gestall.jpg',
        url: "https://github.com/R0N7w7/GEST-ALL-backend-"
    }
]


const Projects = () => {
    return (
        <section className="w-full bg-gray-100 flex items-center justify-center py-10 flex-col gap-8" id="projects">
            <h2 className="text-3xl font-bold px-2 text-center">Proyectos <span className="text-orange-600">realizados</span></h2>
            <div className="flex flex-wrap items-center justify-center gap-8 w-full mx-auto px-2 ">
                {projects.map((project, index) => (
                    <Project
                        key={index} description={project.description}
                        title={project.title} imageUrl={project.imageUrl}
                        url={project.url}
                    />
                ))}
            </div>
        </section>
    )
}

export { Projects }
