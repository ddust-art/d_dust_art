import { Navbar } from "@/components/navigation/Navbar";
import { AppRouter } from "@/app/Router";
import { useScrollToAnchor } from "@/hooks/useScrollToAnchor";
import Footer from "@/sections/Footer";
import "@/app/index.css";
import "@/styles/global.css";

export default function App() {
  useScrollToAnchor(); //applied globally

  return (
    <>
      <Navbar />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </>
  );
}
