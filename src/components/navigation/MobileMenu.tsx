import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { navigation, type NavItem } from "@/data/navigation";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  //Close on Esc
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [open, onClose]);

  const toggle = (label: string) => {
    setExpanded((prev) => (prev === label ? null : label));
  };

  //to highlight anchor links (only when pathname === "/" AND hash matches)

  const baseLink = "block py-4 font-semibold text-right active:text-[#f26537]";

  const childText = "text-sm ";
  const activeClass = "text-[#0018ff] font-black"; //dark blue thick
  const inactiveClass = "text-black font-semibold";

  const renderItem = (item: NavItem, isChild = false) => {
    //Parent with children
    if (item.children) {
      const isOpen = expanded === item.label;

      return (
        <div key={item.label} className="font-semibold">
          <button
            onClick={() => {
              toggle(item.label);
            }}
            className={`flex w-full items-center justify-end gap-2 py-4 text-right active:text-[#f26537]`}
            aria-expanded={isOpen}
          >
            <span>{item.label}</span>
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <ChevronDown size={18} />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden pr-4"
              >
                <div className="pb-3 space-y-3">
                  {item.children.map((child) => renderItem(child, true))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    //Anchor link
    if (item.anchor) {
      return (
        <a
          key={item.label}
          href={`/#${item.anchor}`}
          onClick={onClose}
          className={`${baseLink} ${isChild ? childText : ""}`}
        >
          {item.label}
        </a>
      );
    }

    //Route link
    if (item.to) {
      return (
        <NavLink
          key={item.label}
          to={item.to}
          onClick={onClose}
          className={({ isActive }) =>
            `${baseLink} ${isChild ? childText : ""} ${isActive ? activeClass : inactiveClass} `
          }
        >
          {item.label}
        </NavLink>
      );
    }

    return null;
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.aside
            className="fixed inset-y-0 right-0 z-50 w-80 bg-white p-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4"
              aria-label="Close menu"
            >
              <X size={22} color="red" />
            </button>

            <nav className="mt-12">
              {navigation.map((item) => renderItem(item))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
