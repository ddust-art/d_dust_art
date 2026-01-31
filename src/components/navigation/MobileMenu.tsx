import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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

  if (!open) return null;

  const toggle = (label: string) => {
    setExpanded(expanded === label ? null : label);
  };

  const renderItem = (item: NavItem) => {
    //Parent with children
    if (item.children) {
      const isOpen = expanded === item.label;

      return (
        <div key={item.label} className="border-b">
          <button
            onClick={() => {
              toggle(item.label);
            }}
            className="flex w-full items-center justify-between py-4 text-left"
            aria-expanded={isOpen}
          >
            <span>{item.label}</span>
            <span className="text-sm">{isOpen ? "-" : "+"}</span>
          </button>

          {isOpen && (
            <div className="pl-4 pb-3 space-y-3 text-sm">
              {item.children.map(renderItem)}
            </div>
          )}
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
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-black/40" onClick={onClose} />

      {/* Panel */}
      <aside className="fixed inset-y-0 right-0 z-50 w-80 bg-white p-6 transform transition-transform duration-300 translate-x-0">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl"
          aria-label="Close menu"
        >
          x
        </button>

        <nav className="mt-10 text-base">
          {/* we’ll inject navigation links later */}
          {navigation.map(renderItem)}
        </nav>
      </aside>
    </>
  );
}
