import { navigation, type NavItem } from "@/data/navigation";
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { Menu } from "lucide-react";

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setOpenDropdown(null);
  }, [location.pathname]);

  const activeClass = "text-[#0018ff] font-black";
  const inactiveClass = "text-black";

  const renderItem = (item: NavItem) => {
    // Parent with children
    if (item.children) {
      const isOpen = openDropdown === item.label;

      return (
        <div key={item.label} className="relative">
          <button
            onClick={() => setOpenDropdown(isOpen ? null : item.label)}
            aria-expanded={isOpen}
            className="flex items-center gap-1 font-medium hover:text-[#f26537]"
          >
            {item.label}
            <ChevronDown
              size={16}
              className={`transition-transform ${isOpen ? "rotate-180" : ""}
              `}
            />
          </button>

          {isOpen && (
            <div
              className="absolute right-0 mt-3 w-48 rounded-md border bg-white shadow-lg"
              role="menu"
            >
              <ul className="py-2">
                {item.children.map((child) => (
                  <li key={child.label}>{renderChild(child)}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    }

    // Anchor link
    if (item.anchor) {
      return (
        <a
          key={item.label}
          href={`/#${item.anchor}`}
          className={`font-medium hover:text-[#f26537] ${inactiveClass}`}
        >
          {item.label}
        </a>
      );
    }

    // Route link
    if (item.to) {
      return (
        <NavLink
          key={item.label}
          to={item.to}
          className={({ isActive }) =>
            `font-medium hover:text-[#f26537] ${
              isActive ? activeClass : inactiveClass
            }`
          }
        >
          {item.label}
        </NavLink>
      );
    }

    return null;
  };

  const renderChild = (item: NavItem) => {
    // Anchor child
    if (item.anchor) {
      return (
        <a
          href={`/#${item.anchor}`}
          className="block px-4 py-2 text-sm hover:bg-black/5 hover:text-[#f26537]"
        >
          {item.label}
        </a>
      );
    }

    // Route child
    if (item.to) {
      return (
        <NavLink
          to={item.to}
          className={({ isActive }) =>
            `block px-4 py-2 text-sm hover:bg-black/5 ${
              isActive ? "text-[#0018ff] font-black" : "text-black"
            }`
          }
        >
          {item.label}
        </NavLink>
      );
    }

    return null;
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b">
      <div
        ref={navRef}
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"
      >
        {/* Logo */}
        <NavLink to="/" className={"font-bold text-lg"}>
          D-DUST
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map(renderItem)}
        </nav>
        {/* Mobile trigger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-xl"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      </div>
    </header>
  );
}
