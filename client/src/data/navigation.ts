export type NavItem = {
  label: string;
  to?: string;
  anchor?: string;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", anchor: "about" },
  {
    label: "Projects",
    to: "/projects",
    // children: [
    //   { label: "Outer-Act", to: "/outer-act" },
    //   { label: "Moving Stills", to: "/moving-stills" },
    // ],
  },
  {
    label: "Actions & Exhibitions",
    children: [
      { label: "Image Gallery", to: "/image-gallery" },
      { label: "Schedule", anchor: "schedule" },
    ],
  },
  { label: "NFTs", to: "/nft" },
  { label: "Contact", anchor: "footer" },
];
