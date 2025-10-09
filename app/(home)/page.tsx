import React from "react";
import Link from "next/link";
import IconLogo from "@/components/icons/IconLogo";
import IconFacebook from "@/components/icons/social/IconFacebook";
import IconTwitter from "@/components/icons/social/IconTwitter";
import IconLinkedin from "@/components/icons/social/IconLinkedin";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-white font-family-inter">
      <section className="px-4 bg-secondary">
        {/* Header Section */}
        <header className="container mx-auto max-w-[1300px] flex justify-between items-center py-[22px]">
          <div className="space-x-9 flex items-center">
            <Link href="/">
              <IconLogo />
            </Link>

            <div
              className={cn(
                "space-x-2.5 flex items-center",
                "[&>a]:w-11 [&>a]:h-11 [&>a]:bg-white [&>a]:text-tertiary [&>a]:flex [&>a]:items-center [&>a]:justify-center [&>a]:aspect-square"
              )}
            >
              <Link href="/">
                <IconFacebook />
              </Link>
              <Link href="/">
                <IconTwitter />
              </Link>
              <Link href="/">
                <IconLinkedin />
              </Link>
            </div>
          </div>
          <div className="space-x-[106px] flex items-center">
            <nav
              className={cn(
                "flex items-center space-x-[60px] ",
                "text-size-17 font-normal  leading-25-5 tracking-0-17 text-quaternary [&>a]:hover:text-primary [&>a]:transition-colors [&>a]:duration-300"
              )}
            >
              <Link href="/">Home</Link>
              <Link href="/">About</Link>
              <Link href="/">Pages</Link>
              <Link href="/">Contact Us</Link>
            </nav>
            <button className="bg-primary px-13 py-4.5 w-fit cursor-pointer">
              <span className="text-size-19 leading-28-5 tracking-0-57 font-family-cardo text-secondary">
                Order Today
              </span>
            </button>
          </div>
        </header>
        {/* Hero Section */}
        <div className="constiner mx-auto max-w-[1300px] px-[21px] py-[100px] flex flex-col md:flex-row gap-[75px] justify-between">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3.5">
              <span className="w-[35px] h-0.5 bg-primary" />
              <span className="text-size-21 leading-36 tracking-1-2 font-family-cardo text-white">
                Welcome to Pages!!!
              </span>
            </div>
            <h1
              className={cn(
                "text-size-64 leading-78 tracking-1-3 font-family-cardo text-white",
                "mt-[15px]"
              )}
            >
              Your Books From
              <br />
              The Best Writer.
            </h1>
            <p
              className={cn(
                "text-size-18 leading-28-5 tracking-0 font-family-inter text-quinary",
                "mt-6"
              )}
            >
              We believe that reading books are essential to a healthy culture.
            </p>
            <p className="text-size-18 leading-28-5 tracking-0 font-family-inter text-quinary">
              They’re where authors can connect with readers.
            </p>
            <div className="flex items-center gap-[51px] mt-[42px]">
              <button className="bg-primary px-13 py-4.5 w-fit cursor-pointer">
                <span className="text-size-19 leading-28-5 tracking-0-57 font-family-cardo text-secondary">
                  Order Today
                </span>
              </button>
              <button className="border-b border-white pb-0.5 pr-[11px] cursor-pointer">
                <span className="text-size-19 leading-28-5 tracking-0-57 font-family-cardo text-white">
                  Read Free Demo
                </span>
              </button>
            </div>
            <div className="flex items-center gap-[60px] mt-[50px]">
              <div className="flex flex-col gap-3">
                <span className="flex gap-2.5 items-center text-2xl leading-28-8 tracking-0-48 text-white font-family-cardo">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                  Pages:
                </span>
                <span
                  className={cn(
                    "pl-[26px]",
                    "text-size-17 leading-27 tracking-0 font-family-inter text-quinary"
                  )}
                >
                  250pages
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="flex gap-2.5 items-center text-2xl leading-28-8 tracking-0-48 text-white font-family-cardo">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                  Length:
                </span>
                <span
                  className={cn(
                    "pl-[26px]",
                    "text-size-17 leading-27 tracking-0 font-family-inter text-quinary"
                  )}
                >
                  10 Hours
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="flex gap-2.5 items-center text-2xl leading-28-8 tracking-0-48 text-white font-family-cardo">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                  Rating:
                </span>
                <span
                  className={cn(
                    "pl-[26px]",
                    "text-size-17 leading-27 tracking-0 font-family-inter text-quinary"
                  )}
                >
                  4.5/5 (305 ratings)
                </span>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/HeroSection/image.png"
              alt="hero-image"
              width={592}
              height={800}
              className="object-cover shadow"
            />
          </div>
        </div>
      </section>
      <section className="bg-white px-4">
        <div className="container mx-auto max-w-[1300px] px-2.5 pt-[126px] pb-[150px] flex flex-col gap-[70px]">
          {/* Title Section */}
          <div className="flex flex-col gap-[23px] items-center">
            <h2 className="text-secondary font-family-cardo text-size-42 leading-50-4 tracking-0 ">
              The Author's Books
            </h2>
            <div className="bg-primary w-[50px] h-[3px]" />
          </div>
          {/* Books Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col md:flex-row gap-[30px]">
              <div className="w-full h-full">
                <Image
                  src="/images/TheAuthorsBooks/image-1.png"
                  alt="book-image"
                  width={285}
                  height={382}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col pt-[38px]">
                <h3 className="font-family-cardo text-size-32 leading-38-4 tracking-0-32 text-secondary pr-7">
                  Atomic One’s
                </h3>
                <span
                  className={cn(
                    "font-family-inter text-size-21 tracking-0 text-primary",
                    "mt-[7px]"
                  )}
                >
                  $ 13.84 USD
                </span>
                <p
                  className={cn(
                    "font-family-inter text-size-19 leading-28-5 tracking-0 text-octonary pr-7",
                    "mt-[17px]"
                  )}
                >
                  As the book contains theoretical content as well as solved
                  questions.
                </p>
                <span
                  className={cn(
                    "flex gap-2.5 items-center text-2xl leading-28-8 tracking-0-48 text-secondary font-family-cardo",
                    "mt-[13px]"
                  )}
                >
                  <div className="w-4 h-4 bg-primary rounded-full" />
                  Printed Book
                </span>
                <button
                  className={cn(
                    "bg-transparent text-secondary text-size-19 leading-28-5 tracking-0-38 font-family-cardo px-13 py-4.5 w-fit box-border border-[2px] border-primary",
                    "mt-[27px]"
                  )}
                >
                  Order Now
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-[30px]">
              <div className="w-full h-full">
                <Image
                  src="/images/TheAuthorsBooks/image-2.png"
                  alt="book-image"
                  width={285}
                  height={382}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col pt-[38px]">
                <h3 className="font-family-cardo text-size-32 leading-38-4 tracking-0-32 text-secondary pr-7">
                  The Dark Light
                </h3>
                <span
                  className={cn(
                    "font-family-inter text-size-21 tracking-0 text-primary",
                    "mt-[7px]"
                  )}
                >
                  $ 86.11 USD
                </span>
                {/* Description */}
                <p
                  className={cn(
                    "font-family-inter text-size-19 leading-28-5 tracking-0 text-octonary pr-7",
                    "mt-[17px]"
                  )}
                >
                  As the book contains theoretical content as well as solved
                  questions.
                </p>

                <span
                  className={cn(
                    "flex gap-2.5 items-center text-2xl leading-28-8 tracking-0-48 text-secondary font-family-cardo",
                    "mt-[13px]"
                  )}
                >
                  <div className="w-4 h-4 bg-primary rounded-full" />
                  Printed Book
                </span>
                {/* Button Outline */}
                <button
                  className={cn(
                    "bg-transparent text-secondary text-size-19 leading-28-5 tracking-0-38 font-family-cardo px-13 py-4.5 w-fit box-border border-[2px] border-primary",
                    "mt-[27px]"
                  )}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-quaternary px-4">
        <div className="container mx-auto max-w-[1300px] pt-[180px] pb-[140px] flex flex-col gap-[70px] lg:gap-[150px] justify-center lg:flex-row">
          {/* Image Section */}
          <div className="w-full min-h-full border-[10px] border-primary max-w-[545px] max-h-[640px]">
            <Image
              src="/images/AboutTheAuthor/image.png"
              alt="book-image"
              width={525}
              height={620}
              className="object-cover w-full h-full shadow-lg translate-x-[-30px] translate-y-[-30px]"
            />
          </div>
          <div className="flex w-full flex-col">
            {/* Title Section */}
            <div className="flex flex-col gap-[23px]">
              <h2 className="text-secondary font-family-cardo text-size-42 leading-50-4 tracking-0 ">
                About the Author
              </h2>
              <div className="bg-primary w-[50px] h-[3px]" />
            </div>
            {/* Description */}
            <p
              className={cn(
                "font-family-inter text-size-19 leading-34-2 tracking-0 text-octonary pr-7",
                "mt-[33]"
              )}
            >
              We believe that bookstores are essential to a healthy culture.
              They’re where authors can connect with readers, where we discover
              new writers, where children get hooked on the thrill of reading
              that can last a lifetime.
            </p>
            {/* Stats Section */}
            <div className="grid grid-cols-3 mt-[34px]">
              <div className="flex flex-col pl-3 border-r-2 border-primary">
                <span className="font-family-cardo text-secondary text-size-54 leading-77 tracking-0">
                  02
                </span>
                <p className="font-family-inter text-octonary text-size-17 leading-21-6 mt-px">
                  Books Published
                </p>
              </div>
              <div className="flex flex-col ml-[25px] pl-3 border-r-2 border-primary">
                <span className="font-family-cardo text-secondary text-size-54 leading-77 tracking-0">
                  4.5
                </span>
                <p className="font-family-inter text-octonary text-size-17 leading-21-6 mt-px">
                  User Reviews
                </p>
              </div>
              <div className="flex flex-col ml-[25px] pl-3">
                <span className="font-family-cardo text-secondary text-size-54 leading-77 tracking-0">
                  04
                </span>
                <p className="font-family-inter text-octonary text-size-17 leading-21-6 mt-px">
                  Best Seller Awards
                </p>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="flex mt-[55px] gap-10 py-[15px] px-5 bg-secondary">
              <div>
                <Image
                  src="/images/AboutTheAuthor/image-qr.png"
                  alt="qr-code"
                  width={130}
                  height={130}
                />
              </div>
              <div className="flex flex-col pt-[22px]">
                <h3 className="font-family-cardo text-primary text-size-22 leading-26-4 tracking-0">
                  John Abraham , Ph.d
                </h3>
                <p className="font-family-inter text-quinary text-size-18 leading-28-5 tracking-0 mt-2.5">
                  Mail: johnabraham@gmail.com
                </p>
                <p className="font-family-inter text-quinary text-size-18 leading-28-5 tracking-0">
                  Phone: (+2) 123 545 9000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 bg-white">
        <div className="container max-w-[1300px] mx-auto flex flex-col py-[130px]">
          {/* Title Section */}
          <div className="flex flex-col gap-[23px] items-center">
            <h2 className="text-secondary font-family-cardo text-size-42 leading-50-4 tracking-0 ">
              Trusted By The Best
            </h2>
            <div className="bg-primary w-[50px] h-[3px]" />
          </div>
          {/* Body Section */}
          <div className="grid grid-cols-4 w-full mt-[50px] gap-4 min-h-[254px]">
            <div className="flex flex-col items-center justify-start group">
              <div>
                <Image
                  src="/images/TrustedByTheBest/image-1.png"
                  alt="image"
                  width={180}
                  height={100}
                  className="object-cover w-full"
                />
              </div>
              <span
                className={cn(
                  "text-2xl leading-33-6 tracking-0 text-secondary font-family-cardo",
                  "mt-[16px] group-hover:mt-[19px] transition-all duration-300 group-hover:leading-28-8"
                )}
              >
                Amazen Corp.
              </span>
              <p
                className={cn(
                  "font-family-inter text-size-19 leading-28-5 tracking-0 text-octonary text-center",
                  "mt-[16px] group-hover:mt-[19px] transition-all duration-300"
                )}
              >
                They has been helping readers, music lovers, and videophiles
                find quality material.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start group">
              <div>
                <Image
                  src="/images/TrustedByTheBest/image-2.png"
                  alt="image"
                  width={180}
                  height={100}
                  className="object-cover w-full"
                />
              </div>
              <span
                className={cn(
                  "text-2xl leading-33-6 tracking-0 text-secondary font-family-cardo",
                  "mt-[16px] group-hover:mt-[19px] transition-all duration-300 group-hover:leading-28-8"
                )}
              >
                Megan Books
              </span>
              <p
                className={cn(
                  "font-family-inter text-size-19 leading-28-5 tracking-0 text-octonary text-center",
                  "mt-[16px] group-hover:mt-[19px] transition-all duration-300"
                )}
              >
                We help physical bookstores manage their overstock to <br /> the
                book inventory.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start group">
              <div>
                <Image
                  src="/images/TrustedByTheBest/image-3.png"
                  alt="image"
                  width={180}
                  height={100}
                  className="object-cover w-full"
                />
              </div>
              <span
                className={cn(
                  "text-2xl leading-33-6 tracking-0 text-secondary font-family-cardo",
                  "mt-[16px] group-hover:mt-[19px] transition-all duration-300 group-hover:leading-28-8"
                )}
              >
                Megank
              </span>
              <p
                className={cn(
                  "font-family-inter text-size-19 leading-28-5 tracking-0 text-octonary text-center",
                  "mt-[16px] group-hover:mt-[19px] transition-all duration-300"
                )}
              >
                Bookstore serving up the full spectrum of Black literature{" "}
                <br /> and wine black books.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start group">
              <div>
                <Image
                  src="/images/TrustedByTheBest/image-4.png"
                  alt="image"
                  width={180}
                  height={100}
                  className="object-cover w-full"
                />
              </div>
              <span
                className={cn(
                  "text-2xl leading-33-6 tracking-0 text-secondary font-family-cardo",
                  "mt-[16px] group-hover:mt-[19px] transition-all duration-300 group-hover:leading-28-8"
                )}
              >
                Urban Store
              </span>
              <p
                className={cn(
                  "font-family-inter text-size-19 leading-28-5 tracking-0 text-octonary text-center",
                  "mt-[16px] group-hover:mt-[19px] transition-all duration-300"
                )}
              >
                We also carry the latest records, issues of all of your favorite{" "}
                <br />
                comic books.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 bg-secondary">
        <div className="container mx-auto max-w-[1300px] py-[70px] flex justify-between items-center gap-4">
          <div className="flex w-full h-full flex-col justify-center max-w-[540px]">
            {/* Title Section */}
            <div className="flex flex-col gap-[23px]">
              <h2 className="text-white font-family-cardo text-size-45 leading-54 tracking-0 ">
                Get Book Copy Today!
              </h2>
              <div className="bg-primary w-[50px] h-[3px]" />
            </div>
            <p
              className={cn(
                "text-size-19 leading-28-5 tracking-0 font-family-inter text-quinary",
                "mt-[27px]"
              )}
            >
              We believe that bookstores are essential to a healthy culture.
              They’re where authors can connect with readers.
            </p>
            {/* Button Outline */}
            <button
              className={cn(
                "bg-transparent text-white text-size-19 leading-28-5 tracking-0-38 font-family-cardo px-13 py-4.5 w-fit box-border border-[2px] border-primary",
                "mt-[27px]"
              )}
            >
              Order Now
            </button>
          </div>
          <div className="w-full h-full max-w-[560px] max-h-[394px]">
            <Image
              src="/images/GetBookCopyToday/image.png"
              alt="image"
              width={560}
              height={394}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
      <section className="bg-white px-4">
        <div className="container mx-auto max-w-[1300px] py-[140px]">
          {/* Title Section */}
          <div className="flex flex-col gap-[23px] items-center">
            <h2 className="text-secondary font-family-cardo text-size-42 leading-50-4 tracking-0 ">
              What Will You Learn?
            </h2>
            <div className="bg-primary w-[50px] h-[3px]" />
          </div>
          {/* Body Section */}
          <div className="w-full flex gap-20 items-center justify-between mt-[90px]">
            {/* List Section */}
            <div className="grid grid-cols-2 gap-[30px] w-full max-w-[636px]">
              {/* Item Section */}
              <div className=" px-[30px] pt-[30px] pb-[27px] flex flex-col bg-novanary">
                <span className="flex justify-center items-baseline pt-2 bg-primary rounded-full w-[50px] h-[50px]">
                  <div className="text-size-23 leading-28-8 tracking-0 text-secondary font-family-cardo">
                    01
                  </div>
                </span>
                <p
                  className={cn(
                    "text-2xl leading-33-6 tracking-0 text-secondary font-family-cardo",
                    "mt-[30px]"
                  )}
                >
                  Use HDFS & Map Reduce for storing & analyzing data at scale.
                </p>
              </div>
              {/* Item Section */}
              <div className=" px-[30px] pt-[30px] pb-[27px] flex flex-col bg-novanary">
                <span className="flex justify-center items-baseline pt-2 bg-primary rounded-full w-[50px] h-[50px]">
                  <div className="text-size-23 leading-28-8 tracking-0 text-secondary font-family-cardo">
                    02
                  </div>
                </span>
                <p
                  className={cn(
                    "text-2xl leading-33-6 tracking-0 text-secondary font-family-cardo ",
                    "mt-[30px]"
                  )}
                >
                  Consume streaming data using Spark Streaming, Flink, and
                  Storm.
                </p>
              </div>
              {/* Item Section */}
              <div className=" px-[30px] pt-[30px] pb-[27px] flex flex-col bg-novanary">
                <span className="flex justify-center items-baseline pt-2 bg-primary rounded-full w-[50px] h-[50px]">
                  <div className="text-size-23 leading-28-8 tracking-0 text-secondary font-family-cardo">
                    03
                  </div>
                </span>
                <p
                  className={cn(
                    "text-2xl leading-33-6 tracking-0 text-secondary font-family-cardo",
                    "mt-[30px]"
                  )}
                >
                  Choose an <br /> appropriate data storage technology for your
                  application
                </p>
              </div>
              {/* Item Section */}
              <div className=" px-[30px] pt-[30px] pb-[27px] flex flex-col bg-novanary">
                <span className="flex justify-center items-baseline pt-2 bg-primary rounded-full w-[50px] h-[50px]">
                  <div className="text-size-23 leading-28-8 tracking-0 text-secondary font-family-cardo">
                    04
                  </div>
                </span>
                <p
                  className={cn(
                    "text-2xl leading-33-6 tracking-0 text-secondary font-family-cardo",
                    "mt-[30px]"
                  )}
                >
                  Analyze non-
                  <br /> relational data using HBase, Cassandra, <br /> and
                  MongoDB.
                </p>
              </div>
            </div>
            {/* Image Section */}
            <div className="w-full min-h-full border-[10px] border-primary max-w-[555px] max-h-[652px]">
              <Image
                src="/images/WhatWillYouLearn/image.png"
                alt="book-image"
                width={525}
                height={632}
                className="object-cover w-full h-full shadow-lg translate-x-[-30px] translate-y-[-30px]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-novanary px-4">
        <div className="container mx-auto max-w-[1300px] pt-[120px] pb-[130px] flex flex-col items-center gap-[70px]">
          {/* Title Section */}
          <div className="flex flex-col gap-[23px] items-center">
            <h2 className="text-secondary font-family-cardo text-size-42 leading-50-4 tracking-0 ">
              Enhance knowledge & Vision
            </h2>
            <div className="bg-primary w-[50px] h-[3px]" />
          </div>
          {/* Body Section */}
          <div className="grid grid-cols-2 gap-[30px]">
            <div className="bg-white px-10 pt-[42px] pb-11 flex flex-col">
              <h3 className="text-secondary font-family-cardo text-2xl leading-28-8 tracking-0">
                Chapter-1 Get Started Intro
              </h3>
              <p className="text-octonary text-size-19 leading-32-3 tracking-0 mt-[21px]">
                You can double your knowledge by reading this ever <br /> needed
                book that can last a lifetime.
              </p>
              <div className="flex item-center gap-[45px] mt-2.5">
                <div className="flex gap-2.5 items-baseline">
                  <span className="flex gap-2.5 items-center text-size-22 leading-30-8 tracking-0-48 text-secondary font-family-cardo">
                    <div className="w-4 h-4 bg-primary rounded-full" />
                    Pages :
                  </span>
                  <span
                    className={cn(
                      "text-size-17 leading-27 tracking-0 font-family-inter text-octonary"
                    )}
                  >
                    106pages
                  </span>
                </div>
                <div className="flex gap-2.5 items-baseline">
                  <span className="flex gap-2.5 items-center text-size-22 leading-30-8 tracking-0-48 text-secondary font-family-cardo">
                    <div className="w-4 h-4 bg-primary rounded-full" />
                    Length :
                  </span>
                  <span
                    className={cn(
                      "text-size-17 leading-27 tracking-0 font-family-inter text-octonary"
                    )}
                  >
                    2 Hours
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white px-10 pt-[42px] pb-11 flex flex-col">
              <h3 className="text-secondary font-family-cardo text-2xl leading-28-8 tracking-0">
                Chapter-2 The Roman Culture
              </h3>
              <p className="text-octonary text-size-19 leading-32-3 tracking-0 mt-[21px]">
                It will help to improve your life career with the perfect <br />
                and needed knowledge about your life.
              </p>
              <div className="flex item-center gap-[45px] mt-2.5">
                <div className="flex gap-2.5 items-baseline">
                  <span className="flex gap-2.5 items-center text-size-22 leading-30-8 tracking-0-48 text-secondary font-family-cardo">
                    <div className="w-4 h-4 bg-primary rounded-full" />
                    Pages :
                  </span>
                  <span
                    className={cn(
                      "text-size-17 leading-27 tracking-0 font-family-inter text-octonary"
                    )}
                  >
                    180pages
                  </span>
                </div>
                <div className="flex gap-2.5 items-baseline">
                  <span className="flex gap-2.5 items-center text-size-22 leading-30-8 tracking-0-48 text-secondary font-family-cardo">
                    <div className="w-4 h-4 bg-primary rounded-full" />
                    Length :
                  </span>
                  <span
                    className={cn(
                      "text-size-17 leading-27 tracking-0 font-family-inter text-octonary"
                    )}
                  >
                    3 Hours
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white px-10 pt-[42px] pb-11 flex flex-col">
              <h3 className="text-secondary font-family-cardo text-2xl leading-28-8 tracking-0">
                Chapter-3 How They Servived
              </h3>
              <p className="text-octonary text-size-19 leading-32-3 tracking-0 mt-[21px]">
                We wanted to create an easy, convenient way for you to <br />
                get your books & support.
              </p>
              <div className="flex item-center gap-[45px] mt-2.5">
                <div className="flex gap-2.5 items-baseline">
                  <span className="flex gap-2.5 items-center text-size-22 leading-30-8 tracking-0-48 text-secondary font-family-cardo">
                    <div className="w-4 h-4 bg-primary rounded-full" />
                    Pages :
                  </span>
                  <span
                    className={cn(
                      "text-size-17 leading-27 tracking-0 font-family-inter text-octonary"
                    )}
                  >
                    250pages
                  </span>
                </div>
                <div className="flex gap-2.5 items-baseline">
                  <span className="flex gap-2.5 items-center text-size-22 leading-30-8 tracking-0-48 text-secondary font-family-cardo">
                    <div className="w-4 h-4 bg-primary rounded-full" />
                    Length :
                  </span>
                  <span
                    className={cn(
                      "text-size-17 leading-27 tracking-0 font-family-inter text-octonary"
                    )}
                  >
                    4 Hours
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white px-10 pt-[42px] pb-11 flex flex-col">
              <h3 className="text-secondary font-family-cardo text-2xl leading-28-8 tracking-0">
                Chapter-4 The End Of Romans
              </h3>
              <p className="text-octonary text-size-19 leading-32-3 tracking-0 mt-[21px]">
                Promote your book via Pages shop to support your writing <br />&
                reading career.
              </p>
              <div className="flex item-center gap-[45px] mt-2.5">
                <div className="flex gap-2.5 items-baseline">
                  <span className="flex gap-2.5 items-center text-size-22 leading-30-8 tracking-0-48 text-secondary font-family-cardo">
                    <div className="w-4 h-4 bg-primary rounded-full" />
                    Pages :
                  </span>
                  <span
                    className={cn(
                      "text-size-17 leading-27 tracking-0 font-family-inter text-octonary"
                    )}
                  >
                    175pages
                  </span>
                </div>
                <div className="flex gap-2.5 items-baseline">
                  <span className="flex gap-2.5 items-center text-size-22 leading-30-8 tracking-0-48 text-secondary font-family-cardo">
                    <div className="w-4 h-4 bg-primary rounded-full" />
                    Length :
                  </span>
                  <span
                    className={cn(
                      "text-size-17 leading-27 tracking-0 font-family-inter text-octonary"
                    )}
                  >
                    3 Hours
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <button className="bg-primary px-[100px] py-7 w-fit cursor-pointer">
              <span className="text-size-19 leading-28-5 tracking-0-57 font-family-cardo text-secondary">
                Start a 15-Days Free Trail
              </span>
            </button>
            <p className="mt-[34px] text-octonary text-size-18 leading-28-5 tracking-0">
              Short description about each chapter
            </p>
            <p className="text-octonary text-size-18 leading-28-5 tracking-0">
              <Link
                href="/"
                className="text-secondary text-size-18 leading-28-5 tracking-0 font-family-inter"
              >
                Have any questions?
              </Link>{" "}
              Contact us
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white px-4">
        <div className="container mx-auto max-w-[1300px] pt-[130px] pb-[150px]">
          <div className="flex gap-[63px]">
            {/* Left Section */}
            <div className="flex flex-col w-full max-w-[440px] justify-center">
              {/* Title Section */}
              <div className="flex flex-col gap-[23px]">
                <h2 className="text-secondary font-family-cardo text-size-42 leading-50-4 tracking-0 ">
                  Words From Our Readers
                </h2>
                <div className="bg-primary w-[50px] h-[3px]" />
              </div>
              {/* Description */}
              <p className="text-octonary text-size-19 leading-34-2 tracking-0 mt-[33px]">
                We believe that bookstores are essential to a healthy culture.
                They’re where authors can connect with readers, where we
                discover new writers, where children get hooked on the thrill of
                reading that can last a lifetime.
              </p>
              {/* Rating*/}
              <div className="flex items-center gap-2.5 mt-[24px]">
                <div className="flex items-center gap-[5px]">
                  <div className="w-5 h-5 bg-transparent rounded-full border border-primary overflow-hidden">
                    <div className="h-full w-full bg-primary" />
                  </div>
                  <div className="w-5 h-5 bg-transparent rounded-full border border-primary overflow-hidden">
                    <div className="h-full w-full bg-primary" />
                  </div>
                  <div className="w-5 h-5 bg-transparent rounded-full border border-primary overflow-hidden">
                    <div className="h-full w-full bg-primary" />
                  </div>
                  <div className="w-5 h-5 bg-transparent rounded-full border border-primary overflow-hidden">
                    <div className="h-full w-full bg-primary" />
                  </div>
                  <div className="w-5 h-5 bg-transparent rounded-full border border-primary overflow-hidden">
                    <div className="h-full w-1/2 bg-primary" />
                  </div>
                </div>
                <span className="text-size-22 leading-26-4 tracking-0 text-secondary font-family-cardo">
                  (4.8/5)
                </span>
              </div>
              <p className="text-secondary text-size-18 leading-28-5 tracking-0 mt-2.5">
                Overall Customer Ratings
              </p>
            </div>
            {/* Right Section */}
            <div className="w-full grid grid-cols-2">
              <div className="flex flex-col justify-center gap-5">
                <div className="flex flex-col pl-[35px] pt-[30px] pb-[24px] pr-[50px] max-w-[381px] bg-secondary">
                  <div className="flex items-center gap-5">
                    <div className="rounded-full overflow-hidden w-[85px] h-[85px]">
                      <Image
                        src="/images/WordsFromOurReaders/image-1.png"
                        alt="image"
                        width={85}
                        height={85}
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex flex-col gap-[15px]">
                      <span className="text-2xl leading-28-8 tracking-0 text-white font-family-cardo">
                        James Williams
                      </span>
                      <div className="flex items-center gap-[3px]">
                        <div className="w-3 h-3 bg-transparent rounded-full border border-primary overflow-hidden">
                          <div className="h-full w-full bg-primary" />
                        </div>
                        <div className="w-3 h-3 bg-transparent rounded-full border border-primary overflow-hidden">
                          <div className="h-full w-full bg-primary" />
                        </div>
                        <div className="w-3 h-3 bg-transparent rounded-full border border-primary overflow-hidden">
                          <div className="h-full w-full bg-primary" />
                        </div>
                        <div className="w-3 h-3 bg-transparent rounded-full border border-primary overflow-hidden">
                          <div className="h-full w-full bg-primary" />
                        </div>
                        <div className="w-3 h-3 bg-transparent rounded-full border border-primary overflow-hidden">
                          <div className="h-full w-1/2 bg-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-white text-size-22 leading-33 tracking-0 mt-[30px] font-family-cardo">
                    “ Great Books Collections ”
                  </p>
                  <p className="text-quinary text-size-18 leading-28-8 tracking-0 mt-[13px]">
                    I was searching this book for many years and I was happy
                    that I could find it here.
                  </p>
                </div>
                <div className="flex flex-col pl-[35px] pt-[30px] pb-[24px] pr-[50px] max-w-[381px] bg-secondary">
                  <div className="flex items-center gap-5">
                    <div className="rounded-full overflow-hidden w-[85px] h-[85px]">
                      <Image
                        src="/images/WordsFromOurReaders/image-3.png"
                        alt="image"
                        width={85}
                        height={85}
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex flex-col gap-[15px]">
                      <span className="text-2xl leading-28-8 tracking-0 text-white font-family-cardo">
                        Chris Adams
                      </span>
                      <div className="flex items-center gap-[3px]">
                        <div className="w-3 h-3 bg-transparent rounded-full border border-primary overflow-hidden">
                          <div className="h-full w-full bg-primary" />
                        </div>
                        <div className="w-3 h-3 bg-transparent rounded-full border border-primary overflow-hidden">
                          <div className="h-full w-full bg-primary" />
                        </div>
                        <div className="w-3 h-3 bg-transparent rounded-full border border-primary overflow-hidden">
                          <div className="h-full w-full bg-primary" />
                        </div>
                        <div className="w-3 h-3 bg-transparent rounded-full border border-primary overflow-hidden">
                          <div className="h-full w-full bg-primary" />
                        </div>
                        <div className="w-3 h-3 bg-transparent rounded-full border border-primary overflow-hidden">
                          <div className="h-full w-0 bg-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-white text-size-22 leading-33 tracking-0 mt-[30px] font-family-cardo">
                    “ Perfect Response Author”
                  </p>
                  <p className="text-quinary text-size-18 leading-28-8 tracking-0 mt-[13px]">
                    I had a question about the book and the author response was
                    great & comfort.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-5">
                <div className="flex flex-col pl-[35px] pt-[30px] pb-[24px] pr-[50px] max-w-[381px] bg-secondary">
                  <div className="flex items-center gap-5">
                    <div className="rounded-full overflow-hidden w-[85px] h-[85px]">
                      <Image
                        src="/images/WordsFromOurReaders/image-2.png"
                        alt="image"
                        width={85}
                        height={85}
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex flex-col gap-[15px]">
                      <span className="text-2xl leading-28-8 tracking-0 text-white font-family-cardo">
                        Angeline Flora
                      </span>
                      <div className="flex items-center gap-[3px]">
                        <div className="w-3 h-3 bg-transparent rounded-full border border-primary overflow-hidden">
                          <div className="h-full w-full bg-primary" />
                        </div>
                        <div className="w-3 h-3 bg-transparent rounded-full border border-primary overflow-hidden">
                          <div className="h-full w-full bg-primary" />
                        </div>
                        <div className="w-3 h-3 bg-transparent rounded-full border border-primary overflow-hidden">
                          <div className="h-full w-full bg-primary" />
                        </div>
                        <div className="w-3 h-3 bg-transparent rounded-full border border-primary overflow-hidden">
                          <div className="h-full w-full bg-primary" />
                        </div>
                        <div className="w-3 h-3 bg-transparent rounded-full border border-primary overflow-hidden">
                          <div className="h-full w-1/2 bg-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-white text-size-22 leading-33 tracking-0 mt-[30px] font-family-cardo">
                    “ Creative Writing Skill”
                  </p>
                  <p className="text-quinary text-size-18 leading-28-8 tracking-0 mt-[13px]">
                    Sent an email after to books arrived to ask about the author
                    & I received a reply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-novanary px-4">
        <div className="container mx-auto max-w-[1300px] pt-[130px] pb-[150px]">
          {/* Title Section */}
          <div className="flex flex-col gap-[23px] items-center">
            <h2 className="text-secondary font-family-cardo text-size-42 leading-50-4 tracking-0 ">
              Articles & Resources
            </h2>
            <div className="bg-primary w-[50px] h-[3px]" />
          </div>
          {/* Body Section */}
          <div className="flex items-center gap-5 mt-[70px]">
            <div className="w-full shadow rounded-[5px] overflow-hidden">
              <div className="w-full max-h-[350px]">
                <Image
                  src="/images/ArticlesResources/image-1.png"
                  alt="image"
                  width={420}
                  height={350}
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col p-[30px] bg-white">
                <h3 className="text-2xl leading-33-6 tracking-0-24 text-secondary font-family-cardo">
                  Significant reading has more info number
                </h3>
                <p className="text-octonary text-size-19 leading-30-4 tracking-0 mt-[19px]">
                  Override the digital divide with additional clickthroughs from
                  DevOps for real-time schemas.
                </p>
                <div className="flex justify-between items-center gap-4 mt-[13px]">
                  <button className="border-b-2 border-secondary pb-1 pr-[9px] cursor-pointer">
                    <span className="text-size-19 leading-28-8 tracking-0-38 font-family-cardo text-secondary">
                      Readmore
                    </span>
                  </button>
                  <span className="text-secondary text-base leading-25-5 tracking-0">
                    October 6, 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full shadow rounded-[5px] overflow-hidden">
              <div className="w-full max-h-[350px]">
                <Image
                  src="/images/ArticlesResources/image-2.png"
                  alt="image"
                  width={420}
                  height={350}
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col p-[30px] bg-white">
                <h3 className="text-2xl leading-33-6 tracking-0-24 text-secondary font-family-cardo">
                  Many variations of pass majority have suffered
                </h3>
                <p className="text-octonary text-size-19 leading-30-4 tracking-0 mt-[19px]">
                  Capitalize on low-hanging fruit to identify a ballpark
                  value-added activity to beta test.
                </p>
                <div className="flex justify-between items-center gap-4 mt-[13px]">
                  <button className="border-b-2 border-secondary pb-1 pr-[9px] cursor-pointer">
                    <span className="text-size-19 leading-28-8 tracking-0-38 font-family-cardo text-secondary">
                      Readmore
                    </span>
                  </button>
                  <span className="text-secondary text-base leading-25-5 tracking-0">
                    October 6, 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full shadow rounded-[5px] overflow-hidden">
              <div className="w-full max-h-[350px]">
                <Image
                  src="/images/ArticlesResources/image-3.png"
                  alt="image"
                  width={420}
                  height={350}
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col p-[30px] bg-white">
                <h3 className="text-2xl leading-33-6 tracking-0-24 text-secondary font-family-cardo">
                  Words which don’t look even slightly believable
                </h3>
                <p className="text-octonary text-size-19 leading-30-4 tracking-0 mt-[19px]">
                  Podcasting operational change management inside of workflows
                  to establish a framework.
                </p>
                <div className="flex justify-between items-center gap-4 mt-[13px]">
                  <button className="border-b-2 border-secondary pb-1 pr-[9px] cursor-pointer">
                    <span className="text-size-19 leading-28-8 tracking-0-38 font-family-cardo text-secondary">
                      Readmore
                    </span>
                  </button>
                  <span className="text-secondary text-base leading-25-5 tracking-0">
                    October 6, 2021
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
