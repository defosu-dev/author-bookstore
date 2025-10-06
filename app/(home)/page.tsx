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
            <button className="bg-primary text-secondary text-size-19 leading-28-5 tracking-0-57 font-family-cardo px-13 py-4.5 w-fit">
              Order Today
            </button>
          </div>
        </header>
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
            <div className="flex items-center gap-4 mt-[42px]">
              <button className="bg-primary text-secondary text-size-19 leading-28-5 tracking-0-57 font-family-cardo px-13 py-4.5 w-fit">
                Order Today
              </button>
              <button className="text-size-19 leading-28-5 tracking-0-57 font-family-cardo text-white border-b border-white pb-0.5 pr-[11px]">
                Read Free Demo
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
      <section className="bg-white">
        <div className="container mx-auto max-w-[1300px] px-2.5 pt-[126px] pb-[150px] flex flex-col gap-[70px]">
          <div className="flex flex-col gap-[23px] items-center">
            <h2 className="text-secondary font-family-cardo text-size-42 leading-50-4 tracking-0 ">
              The Author's Books
            </h2>
            <div className="bg-primary w-[50px] h-[3px]" />
          </div>
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
          </div>
        </div>
      </section>
    </main>
  );
}
