import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import OuterAct from "@/pages/Projects/OuterAct";
import MovingStills from "@/pages/Projects/MovingStills";
import ImageGallery from "@/pages/ImageGallery";
import NFTS from "@/pages/NFT/NFTS";
import Projects from "@/pages/Projects/Projects";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/outer-act" element={<OuterAct />} />
      <Route path="/moving-stills" element={<MovingStills />} />
      <Route path="/nft" element={<NFTS />} />
      <Route path="/image-gallery" element={<ImageGallery />} />
    </Routes>
  );
}
