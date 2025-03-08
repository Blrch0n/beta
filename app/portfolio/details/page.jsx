import AboutUsFooter from "@/app/components/(About Us)/AboutUsFooter";
import Section1 from "@/app/components/(About Us)/Section1";
import Section4 from "@/app/components/(About Us)/Section4";
import BackToTop from "@/app/components/(Main_structure)/BackToTop";
import Header from "@/app/components/(Main_structure)/Header";
import Detail_section1 from "@/app/components/(details)/Detail_section1";
import React from "react";

const Page = () => {
  return (
    <div className="w-full h-fit flex flex-col">
      <Header />
      <Section1 />
      <Detail_section1 />
      <Section4 />
      <AboutUsFooter />
      <BackToTop />
    </div>
  );
};

export default Page;
