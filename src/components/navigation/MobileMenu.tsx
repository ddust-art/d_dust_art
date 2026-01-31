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

  //if (!open) return null;

  const toggle = (label: string) => {
    setExpanded((prev) => (prev === label ? null : label));
  };

  const renderItem = (item: NavItem) => {
    //Parent with children
    if (item.children) {
      const isOpen = expanded === item.label;

      return (
        <div key={item.label} className="border-b border-black/10">
          <button
            onClick={() => {
              toggle(item.label);
            }}
            className="flex w-full items-center justify-between py-4 text-left"
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
                className="overflow-hidden pl-4"
              >
                <div className="pl-4 pb-3 space-y-3 text-sm">
                  {item.children.map(renderItem)}
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
          className="block py-4 border-b"
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
          className="block py-4 border-b"
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
              <X size={22} />
            </button>

            <nav className="mt-12 text-base">
              {/* we’ll inject navigation links later */}
              {navigation.map(renderItem)}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
