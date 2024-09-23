
const Experience = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center bg-gray-950 py-10 gap-4" id="experience">
            <div className="mx-auto">
                <h2 className="text-3xl font-bold text-white px-2 text-center">Experiencia <span className="text-orange-600">profesional</span></h2>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mt-4 mb-4">
                <article className="px-3 bg-gray-800 text-white py-4 mx-2 rounded-md max-w-xl">
                    <h3 className="text-2xl font-medium">Desarrollador Web Fullstack</h3>
                    <p className="text-lg font-normal mt-2">Self Employed, Autonómo</p>
                    <p className="text-base font-light">Mayo 2023 - Actualidad</p>
                    <p className="text-lg font-light mt-4">Responsable del rediseño, desarrollo, implementación y despliegue de aplicaciones web con enfoque en el desarrollo backend y frontend empleando tecnologías modernas basadas en el ecosistema de Javascript. Implementación de estrategias SEO para mejorar el posicionamiento en buscadores. Liderazgo de equipos pequeños de trabajo, con enfoque en la separación de responsabilidades y el desarrollo ágil.</p>
                </article>
            </div>
        </section>
    )
}

export { Experience }
