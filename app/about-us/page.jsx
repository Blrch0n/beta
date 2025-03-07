import Section1 from "../components/(About Us)/Section1";
import Section2 from "../components/(About Us)/Section2";
import Header from "../components/(Main_structure)/Header";

function generateStaticParams() {}

export default function Page() {
  return (
    <section className="w-full h-fit bg-white flex flex-col items-center">
      <Header />
      <Section1 />
      <Section2 />
    </section>
  );
}
