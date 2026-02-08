import AboutSection from "@/Component/Home/About";
import Banner from "@/Component/Home/Baner";
import ServicesOverview from "@/Component/Home/ServicesOverview";
import Testimonials from "@/Component/Home/Testimonials";

import Image from "next/image";

export default function Home() {
  return ( <>
<Banner></Banner>
<AboutSection></AboutSection>
<ServicesOverview></ServicesOverview>
<Testimonials></Testimonials>

  </>
  );
}
