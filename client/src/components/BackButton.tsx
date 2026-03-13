import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  href?: string; // default: "/"
  label?: string; // default: "Back to home"
}

export default function BackButton({
  href = "/",
  label = "Back to home",
}: BackButtonProps) {
  return (
    <a
      href={href}
      className="
        mt-10
        inline-flex
        items-center
        gap-2
        border
        border-white
        px-8
        py-3
        uppercase
        tracking-wide
        text-sm
        text-white
        hover:text-black
        hover:bg-dust-orange
        hover:border-dust-orange
        transition
        duration-300
      "
    >
      <ArrowLeft className="w-4 h-4" />
      <span>{label}</span>
    </a>
  );
}
