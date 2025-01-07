import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHeart,
  faShoppingBag,
  faUser,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const links = [
  { name: "Shop", href: "#" },
  { name: "Skills", href: "#" },
  { name: "Stories", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact Us", href: "#" },
];

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 px-8">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center flex-1">
          <a href="#">
            <Image
              src="/logo.png"
              alt="Store Logo"
              width={36}
              height={36}
              className="object-contain"
            />
          </a>
        </div>

        <h1 className="font-inter text-4xl font-extrabold leading-[43.57px] tracking-[1px] text-center">
          LOGO
        </h1>

        <div className="flex items-center justify-end flex-1 space-x-3">
          <FontAwesomeIcon icon={faSearch} className="text-gray-800 w-4 h-4" />
          <FontAwesomeIcon icon={faHeart} className="text-gray-800 w-4 h-4" />
          <FontAwesomeIcon
            icon={faShoppingBag}
            className="text-gray-800 w-4 h-4"
          />
          <FontAwesomeIcon icon={faUser} className="text-gray-800 w-4 h-4" />
          <div className="relative">
            <button className="text-gray-800 text-xs flex items-center gap-2">
              ENG{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-gray-800 w-4 h-4"
              />
            </button>
          </div>
        </div>
      </div>

      <nav className="flex justify-center space-x-8 pb-6">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-gray-800 hover:text-blue-500 font-simplon-norm text-[16px] font-bold decoration-0"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
