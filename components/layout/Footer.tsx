"use client";
import React from "react";
import Link from "next/link";
import IconLogo from "@/components/icons/IconLogo";
import IconFacebook from "@/components/icons/social/IconFacebook";
import IconTwitter from "@/components/icons/social/IconTwitter";
import IconLinkedin from "@/components/icons/social/IconLinkedin";
import IconInstagram from "@/components/icons/social/IconInstagram";
import IconThreeDots from "@/components/icons/IconThreeDots";
import Typography from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import data from "@/data/home.json";

export default function Footer() {
  return (
    <footer className="bg-secondary px-4">
      <div className="container mx-auto max-w-[1300px] pt-[92px] pb-[25px] flex flex-col gap-[60px] md:gap-[95px]">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0">
          <div className="flex flex-col gap-5">
            <Link href="/">
              <IconLogo />
            </Link>
            <div
              className={cn(
                "space-x-2.5 flex items-center",
                "[&>a]:w-11 [&>a]:h-11 [&>a]:bg-transparent [&>a]:text-white [&>a]:flex [&>a]:items-center [&>a]:justify-center [&>a]:aspect-square [&>a]:border [&>a]:border-primary"
              )}
              aria-label="Social links"
              role="list"
            >
              <Link href="/" aria-label="Facebook" role="listitem">
                <IconFacebook />
              </Link>
              <Link href="/" aria-label="Twitter" role="listitem">
                <IconTwitter />
              </Link>
              <Link href="/" aria-label="LinkedIn" role="listitem">
                <IconLinkedin />
              </Link>
              <Link href="/" aria-label="Instagram" role="listitem">
                <IconInstagram />
              </Link>
            </div>
          </div>
          <div className="md:ml-[88px] mt-8 md:mt-0 flex flex-col gap-6">
            <h3 className="text-white text-2xl leading-33-6 tracking-0-38 font-family-cardo">
              {data.footer.exploreTitle}
            </h3>
            <nav
              className="pl-[11px] flex flex-col gap-[9px] [&>a]:flex [&>a]:items-center [&>a]:gap-[9px] [&>a]:text-size-18 [&>a]:leading-30-6 [&>a]:tracking-0-18 [&>a]:font-family-inter [&>a]:text-quinary"
              aria-label="Footer Explore"
            >
              {data.footer.explore.map((label) => (
                <Link key={label} href="/">
                  <IconThreeDots className="text-[#FFCA42]" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="md:ml-[100px] mt-8 md:mt-0 flex flex-col gap-6">
            <h3 className="text-white text-2xl leading-33-6 tracking-0-38 font-family-cardo">
              {data.footer.utilityTitle}
            </h3>
            <nav
              className="pl-[11px] flex flex-col gap-[9px] [&>a]:flex [&>a]:items-center [&>a]:gap-[9px] [&>a]:text-size-18 [&>a]:leading-30-6 [&>a]:tracking-0-18 [&>a]:font-family-inter [&>a]:text-quinary"
              aria-label="Footer Utility"
            >
              {data.footer.utility.map((label) => (
                <Link key={label} href="/">
                  <IconThreeDots className="text-[#FFCA42]" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <address
            className="md:ml-[93px] mt-8 md:mt-0 flex flex-col not-italic"
            aria-label="Keep in touch contact details"
          >
            <Typography as="h3" variant="h4Tight" color="white">
              {data.footer.keepInTouchTitle}
            </Typography>
            <div className="flex gap-7 mt-[27px]">
              <div className=" flex flex-col gap-7 [&>*]:text-white [&>*]:font-family-cardo [&>*]:text-size-18 [&>*]:leading-27 [&>*]:tracking-0-36 ">
                <div>
                  Address : <br />
                  <br />
                </div>
                <div>Mail :</div>
                <div>Phone :</div>
              </div>
              <div className=" flex flex-col gap-7 [&>*]:text-quinary [&>*]:font-family-inter [&>*]:text-size-17 [&>*]:leading-27 [&>*]:tracking-0 ">
                <div>
                  {data.footer.addressLines[0]} <br />{" "}
                  {data.footer.addressLines[1]}
                </div>
                <div>
                  <a
                    href={`mailto:${data.footer.email}`}
                    className="no-underline text-inherit"
                  >
                    {data.footer.email}
                  </a>
                </div>
                <div>
                  <a
                    href={`tel:+221234567900`}
                    className="no-underline text-inherit"
                  >
                    {data.footer.phone}
                  </a>
                </div>
              </div>
            </div>
          </address>
        </div>
        <div>
          <p className="text-center text-quinary text-size-17 leading-25-5 tracking-0-17 font-family-inter [&>a]:text-white">
            {data.footer.copyrightLeft}{" "}
            <Link href="/">{data.footer.copyrightBrand}</Link>
            {data.footer.poweredLeft}{" "}
            <Link href="/">{data.footer.poweredBrand}</Link>.
          </p>
        </div>
      </div>
    </footer>
  );
}
