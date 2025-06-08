import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Technologies", href: "#technologies" },
  { name: "Get In Touch", href: "#contact" },
];

export default function NavigationBar() {
  return (
    <nav className="w-full bg-[#181818]/90 backdrop-blur sticky top-0 z-50">
      <div className="max-w-0xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="max-w-0xl mx-auto">
          <ul className="flex gap-8 text-lg font-mono text-gray-200">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </nav>
  );
}
