"use client";
import Home from "@/components/Home";
import CaseStudies from "@/components/CaseStudies";
import Technologies from "@/components/Technologies";
import Footer from "@/components/Footer";

export default function MainPage() {
  return (
    <>
      <main className="min-h-screen">
        <Home />
        <CaseStudies />
        <Technologies />
      </main>
      <Footer />
    </>
  );
}
