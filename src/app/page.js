import Alltags from "@/components/Alltags";
import Footer from "@/components/Common/footer";
import Navbar from "@/components/Common/Navbar";
import Htmllayout from "@/components/Htmllayout";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      {/* <Htmllayout/> */}
      <Alltags />
      <Footer />
    </div>
  );
};

export default page;
