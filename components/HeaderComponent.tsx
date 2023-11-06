import Link from "next/link";
import Image from "next/image";
const header = () => {
    return (
        <header>
          <div className="text-center bg-slate-400 p-8 my-6 rounded-md">
          
            <Link href="/">
            <Image
          src="/logo.png"
          width={40}
          height={40}
          className="mx-auto"
          alt={"logo"}
        />
            <h1 className="text-2xl text-white font-bold mt-4">Nhà NEX</h1>
            </Link>
            <p className="text-slate-50">🤟 Chào bạn ghé thăm nhà NEX. 💻</p>
            <br/>
          </div>
        </header>
      )
};

export default header;