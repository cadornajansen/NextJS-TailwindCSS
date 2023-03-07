import Link from "next/link";

export default function HeaderContent() {
  return (
    <div className="flex w-full  justify-between items-center">
      <div>
        <h1 className="text-white text-3xl font-bold">WindCom</h1>
      </div>
      <div>
        <nav className="flex justify-center items-center gap-8">
          <Link className="_link" href="/">
            Home
          </Link>
          <Link className="_link" href="/">
            About
          </Link>
          <Link className="_link" href="/">
            Contact
          </Link>
          <Link className="_transition _link bg-blue-600 px-3 py-1 rounded font-bold hover:bg-blue-700" href="/">
            Shop
          </Link>
        </nav>
      </div>
    </div>
  );
}
