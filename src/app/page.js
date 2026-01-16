import AboutUs from "@/components/AboutUs";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import PopularDishes from "@/components/PopularDishes";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import divider from "daisyui/components/divider";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <PopularDishes/>
    <Stats/>
    <AboutUs/>
    <Testimonial/>
    <Faq/>
    <Newsletter/>
    </>
  );
}
