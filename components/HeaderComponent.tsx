import Link from "next/link";
import Image from "next/image";
const header = () => {
    return (

        <header className="bg-white rounded p-4 sticky top-0 drop-shadow-xl z-10">
            <Image
                src="/logo.png"
                width={80}
                height={80}
                className="mx-auto"
                alt={"logo"}
            />
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <h1 className="text-2xl font-bold grid place-content-center mb-2 md:mb-0">
                    <Link href="/" className="text-green-600 no-underline hover:text-red-600">Home</Link>
                </h1>
                
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4">
                <Link className="text-green-600 hover:text-red-600 no-underline" href="/create">
                        UpLoad
                    </Link>
                <Link className="text-green-600 hover:text-red-600 no-underline" href="/editor">
                        Editor
                    </Link>
                    <Link className="text-green-600 hover:text-red-600 no-underline" href="/about">
                        About
                    </Link>
                    <Link className="text-green-600 hover:text-red-600 no-underline" href="mailto:contact@nexpando.com">
                        Contact
                    </Link>
                </div>
            </div>
        </header>
    )
};

export default header;