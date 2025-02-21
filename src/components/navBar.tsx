import Image from "next/image";

export default function navBar () {
    return (
        <nav className="flex" >
            <Image 
                src="/livro.dev logo 1.png" alt="Logo" width={206}  height={62}>
            </Image>

            <ul className="flex">
                <li>
                    <button>Inicio</button>
                </li>
                <li>
                    <button>Encontre </button>
                </li>
                <li>
                    <button>Inicio</button>
                </li>
            </ul>
        </nav>
    );
}