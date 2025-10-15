import React from "react";
import type { Metadata } from "next";
import HeaderBar from "@/components/layout/HeaderBar";
import HeroSection from "@/components/sections/HeroSection";
import AuthorsBooks from "@/components/sections/AuthorsBooks";
import AboutTheAuthor from "@/components/sections/AboutTheAuthor";
import TrustedByTheBest from "@/components/sections/TrustedByTheBest";
import GetBookCopyToday from "@/components/sections/GetBookCopyToday";
import WhatWillYouLearn from "@/components/sections/WhatWillYouLearn";
import EnhanceKnowledgeVision from "@/components/sections/EnhanceKnowledgeVision";
import WordsFromOurReaders from "@/components/sections/WordsFromOurReaders";
import ArticlesResources from "@/components/sections/ArticlesResources";
import GetBestUpdates from "@/components/sections/GetBestUpdates";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Author Bookstore — Books, Articles, Resources",
  description:
    "Discover books by the best writer, read articles and resources, and subscribe for updates.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white font-family-inter">
      <HeaderBar />
      <main>
        <HeroSection />
        <AuthorsBooks />
        <AboutTheAuthor />
        <TrustedByTheBest />
        <GetBookCopyToday />
        <WhatWillYouLearn />
        <EnhanceKnowledgeVision />
        <WordsFromOurReaders />
        <ArticlesResources />
        <GetBestUpdates />
      </main>
      <Footer />
    </div>
  );
}
