import Image from "next/image"



const AboutMe = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-8 bg-gray-100 py-10 mx" id="about">
            <div className="flex items-center justify-center w-full">
                <h2 className="text-3xl font-bold">¿Quién soy?</h2>
            </div>
            <div className="flex flex-col gap-6 md:flex-row max-w-5xl">
                <div className="w-full flex items-center justify-center">
                    <Image
                        alt="Fotografía de Roberto Cruz"
                        src={'/me.png'} width={2000} height={2000}
                        className="w-full mx-auto max-w-44 aspect-square object-cover rotate-3 border border-2 border-black p-1 rounded-md"
                    />
                </div>
                <div className="px-4 flex flex-col gap-2 text-lg md:text-xl font-medium ">
                    <p>
                        Me llamo Roberto, pero mis amigos me llaman Ron. Empecé en la programación desde los 16 años. Actualmente estoy <span className="text-orange-600 font-semibold">emprendiendo, trabajando y colaborando en equipos de desarrollo locales</span>.
                    </p>
                    <p>
                        Llevo más de <span className="text-orange-600 font-semibold">6 años en el mundo de la programación</span>, y desde hace casi uno me he centrado en el desarrollo web de forma autodidacta. La curiosidad por integrar nuevas funcionalidades y características me ha llevado a profundizar en mis conocimientos, y me encanta el reto de desarrollar aplicaciones web desde cero.
                    </p>
                    <p>
                        Me inspira la grandeza y mi objetivo es destacar por encima de la mediocridad. Quiero transmitir a mis clientes <span className="text-orange-600 font-semibold">seguridad, confianza y compromiso</span>.
                    </p>
                </div>
            </div>
        </section >
    )
}

export { AboutMe }
