import Image from "next/image"
import Link from "next/link"

type Props = {
    title: string,
    description: string,
    imageUrl: string,
    url: string
}

const Project = ({ title, description, imageUrl, url }: Props) => {
    return (
        <article className="bg-white flex flex-col w-full rounded-md p-4 shadow-lg gap-2 max-w-md">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-lg text-gray-700 font-medium line-clamp-3 overflow-hidden text-ellipsis">{description}</p>
            <div className="w-full flex items-center justify-center md:px-5 ">
                <Image
                    src={imageUrl}
                    alt={`Imagen ilustrativa de ${title}`}
                    width={2400}
                    height={1350}
                    className="aspect-video w-full rounded-md shadow-sm mt-2 mx-auto"
                />
            </div>

            <Link href={url} className="bg-black shadow-sm text-white rounded px-3 py-2 text-base font-bold hover:bg-gray-900 transition-all max-w-max mx-auto mt-2">Ver Proyecto</Link>
        </article>
    )
}

export { Project }
