import { NavLink } from "react-router-dom";
import { navigation, type NavItem } from "@/data/navigation";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null;

  const renderItem = (item: NavItem) => {
    //Anchor link
    if (item.anchor) {
      return (
        <a
          key={item.label}
          href={`/#${item.anchor}`}
          onClick={onClose}
          className="block py-2"
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
          className="block py-2"
        >
          {item.label}
        </NavLink>
      );
    }

    //Parent only (children)
    return (
      <div key={item.label} className="py-2">
        <div className="font-semibold">{item.label}</div>
        <div className="ml-4 mt-2 space-y-2">
          {item.children?.map(renderItem)}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-white z-50 p-6 overflow-y-auto">
      {/* Backdrop click */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-2xl"
        aria-label="Close menu"
      >
        x
      </button>

      <nav className="mt-12 space-y-6 text-lg">
        {/* we’ll inject navigation links later */}
        {navigation.map(renderItem)}
      </nav>
    </div>
  );
}
