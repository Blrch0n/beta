import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default function Home() {
  return (
    <section className="w-full h-[5000px]">
      <Header />
      <Main />
      <Footer />
    </section>
  );
}
