import { navigation, type NavItem } from "@/data/navigation";
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { Menu } from "lucide-react";
import logo from "@/assets/vector/DDUST Digital Street_LOGO_White.svg";
import { motion } from "framer-motion";

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Scroll State
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll(); // run once on mount
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

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

  //Links style states
  const baseLink = "font-medium transition-colors duration-200";
  const inactiveClass = "text-white/60 hover:text-white";
  const activeClass = "text-[#0018ff] hover:text-white";

  //Detect Desktop vc Mobile
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  const logoExpanded = isDesktop ? 80 : 48;
  const logoCollapsed = isDesktop ? 48 : 40;

  const renderItem = (item: NavItem) => {
    // Dropdown Parent
    if (item.children) {
      const isOpen = openDropdown === item.label;

      return (
        <div key={item.label} className="relative">
          <button
            onClick={() => setOpenDropdown(isOpen ? null : item.label)}
            aria-expanded={isOpen}
            className={`${baseLink} ${inactiveClass} flex items-center gap-1`}
          >
            {item.label}
            <ChevronDown
              size={16}
              className={`transition-transform ${isOpen ? "rotate-180" : ""}
              `}
            />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-3 w-48" role="menu">
              <ul className="space-y-2 text-right">
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
        <a href={`/#${item.anchor}`} className={`${baseLink} ${inactiveClass}`}>
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
            `${baseLink} ${isActive ? activeClass : inactiveClass}`
          }
        >
          {item.label}
        </NavLink>
      );
    }

    return null;
  };

  //Dropdown Children
  const renderChild = (item: NavItem) => {
    // Anchor child
    if (item.anchor) {
      return (
        <a
          href={`/#${item.anchor}`}
          className="block text-sm text-white/60 transition-colors hover:text-white"
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
            `block text-sm transition-colors ${
              isActive
                ? "text-[#0018ff] hover:text-white"
                : "text-white/60 hover:text-white"
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
    <>
      <motion.header
        initial={{ y: -120, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          //backgroundColor: scrolled ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`fixed top-0 z-50 w-full pointer-events-none ${scrolled ? "backdrop-blur-md" : ""}`}
      >
        <motion.div
          ref={navRef}
          animate={{
            paddingTop: scrolled ? 12 : 20,
            paddingBottom: scrolled ? 12 : 28,
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="pointer-events-auto flex items-start justify-between px-6 md:px-10"
        >
          {/* Logo */}
          <NavLink to="/" className={"relative z-20 mr-8"}>
            <motion.img
              src={logo}
              alt="D-DUST Logo"
              className="w-auto origin-left"
              animate={{ height: scrolled ? logoCollapsed : logoExpanded }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 ">
            {navigation.map(renderItem)}
          </nav>
          {/* Mobile trigger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-xl"
            aria-label="Open menu"
          >
            <Menu size={24} color="white" />
          </button>
        </motion.div>
      </motion.header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
