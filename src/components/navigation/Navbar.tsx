import { navigation } from "@/data/navigation";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { Menu } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b">
      <div className="p-4 flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold">D-DUST</div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6 text-sm">
          {navigation.map((item) => {
            const hasChildren = Boolean(item.children?.length);

            return (
              <div key={item.label} className="relative group">
                {/* Parent Item */}
                {hasChildren ? (
                  <span className="cursor-default opacity-80 group-hover:opacity-100 transition">
                    {item.label}
                  </span>
                ) : (
                  <a
                    href={item.anchor ? `/#${item.anchor}` : item.to}
                    className="opacity-80 hover:opacity-100 transition"
                  >
                    {item.label}
                  </a>
                )}

                {/* Dropdown */}
                {hasChildren && (
                  <div className="absolute top-full left-0 mt-2 hidden group-hover:block">
                    <div className="min-w-[180px] bg-white/90 backdrop-blur border border-black/10 rounded-sm shadow-sm">
                      {item.children!.map((child) => (
                        <a
                          key={child.label}
                          href={child.anchor ? `/#${child.anchor}` : child.to}
                          className="block px-4 py-2 text-sm opacity-80 hover:opacity-100 hover:bg-black/5 transition"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
        {/* Mobile menu trigger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      </div>
    </header>
  );
}
