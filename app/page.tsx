import react from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PopularCategories from "@/components/PopularCategories";
import PopularProducts from "@/components/PopularProducts";
import PopularProductsV2 from "@/components/PopularProductsV2";
import BackgroundImage from "@/components/BackgroundImage";
import PopularBrands from "@/components/PopularBrands";
import IconFeatures from "@/components/IconFeatures";
import Payment from "@/components/Payment";
import JoinThePack from "@/components/JoinThePack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <PopularCategories />
      <PopularProducts />
      <BackgroundImage />
      <PopularBrands />
      <PopularProductsV2 />
      <IconFeatures />
      <Payment />
      <JoinThePack />
      <Footer />
    </main>
  );
}
