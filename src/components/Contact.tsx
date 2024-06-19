"use client"
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';


const Contact = () => {

    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const nombre = formData.get('nombre');
        const email = formData.get('email');
        const message = formData.get('mesagge');

        const msg = {
            to: 'cr439694@gmail.com',
            from: 'tu_email_verificado@ejemplo.com',
            subject: `Mensaje de ${nombre}`,
            text: `Correo: ${email}\nMensaje: ${message}`,
        };
        router.push(`mailto:cr439694@gmail.com?subject=Mensaje de ${nombre}&body=${message}`);
        
    };

    return (
        <section className="w-full bg-gray-100 flex items-center justify-center py-10 flex-col" id="contact">
            <h2 className="text-3xl font-bold px-2 text-center">Contacto</h2>
            <form className="w-full mx-auto px-4 flex flex-col gap-6 mt-4 max-w-xl" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nombre" className="text-xl font-medium">Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        placeholder="Nombre"
                        className="px-3 py-2 rounded-md shadow-sm outline-neutral-800 text-xl border border-gray-500"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xl font-medium">Correo electrónico:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@example.com"
                        className="px-3 py-2 rounded-md shadow-sm outline-neutral-950 text-xl border border-gray-500"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="mesagge" className="text-xl font-medium">Mensaje:</label>
                    <textarea
                        rows={5}
                        name="mesagge"
                        id="mesagge"
                        placeholder="Escribe tu mensaje"
                        className="px-3 py-2 rounded-md shadow-sm outline-neutral-800 text-xl border border-gray-500"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-black shadow-sm text-white rounded px-3 py-2 text-base font-bold hover:bg-gray-900 transition-all max-w-max mx-auto mt-2"
                >
                    Enviar mensaje
                </button>
            </form>
        </section>
    )
}

export { Contact };

