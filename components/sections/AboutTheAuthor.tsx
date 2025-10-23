"use client";
import React from "react";
import Image from "next/image";
import Typography from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import data from "@/data/home.json";

export default function AboutTheAuthor() {
  return (
    <section className="bg-quaternary px-4">
      <div className="container mx-auto max-w-[1300px] pt-[120px] md:pt-[180px] pb-[100px] md:pb-[140px] flex flex-col gap-[50px] lg:gap-[150px] justify-center lg:flex-row">
        <div className="w-full min-h-full border-[10px] border-primary max-w-[545px] max-h-[640px] order-2 lg:order-1">
          <Image
            src="/images/AboutTheAuthor/image.png"
            alt="Portrait of John Abraham"
            width={525}
            height={620}
            className="w-full h-full translate-x-[-40px] translate-y-[-40px] shadow-[0px_0px_20px_0px_rgba(27,55,100,0.3)]"
            objectFit="cover"
          />
        </div>
        <div className="flex w-full flex-col order-1 lg:order-2">
          <div className={cn("flex flex-col gap-[24px]", "mt-[15px]")}>
            <Typography
              as="h2"
              variant="h2"
              className="text-secondary font-family-cardo text-size-42 leading-50-4 tracking-0 "
            >
              {data.titles.aboutAuthor}
            </Typography>
            <div className="bg-primary w-[50px] h-[3px]" />
          </div>
          <Typography
            as="p"
            className={cn(
              "text-octonary tracking-[0.038px] pr-[38px] leading-[34px]",
              "mt-[34px]"
            )}
            variant="body"
          >
            {data.about.desc}
          </Typography>
          <div className="grid grid-cols-3 mt-[33px]">
            {data.about.stats.map((s, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  idx < 1
                    ? "w-fit pr-[35px] pl-3  border-r border-primary"
                    : "pl-[18px]"
                } ${idx > 1 ? "pl-[22px]" : ""}`}
              >
                <span className="font-family-cardo text-secondary text-size-54 leading-77 tracking-0">
                  {s.value}
                </span>
                <p className="font-family-inter text-octonary text-size-17 leading-21-6">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <div className="flex mt-[55px] gap-10 py-[15px] pb-4 px-5 pr-[25px] bg-secondary w-fit">
            <div>
              <Image
                src="/images/AboutTheAuthor/image-qr.png"
                alt="QR code with author contact details"
                width={130}
                height={130}
              />
            </div>
            <address
              className="flex flex-col pt-[22px] not-italic"
              aria-label="Author contact details"
            >
              <Typography as="h3" variant="titleSm" color="primary">
                {data.about.contact.name}
              </Typography>
              <p className="font-family-inter text-quinary text-size-18 leading-28-5 tracking-0 mt-2.5 pt-px">
                <span className="pr-[10px]">Mail:</span>
                <a
                  href={`mailto:${data.about.contact.email}`}
                  className="no-underline text-inherit tracking-[0.1px]"
                >
                  {data.about.contact.email}
                </a>
              </p>
              <p className="font-family-inter text-quinary text-size-18 leading-28-5 tracking-0 mt-[5px]">
                <span className="pr-[13px]">Phone:</span>
                <a
                  href={`tel:+21235459000`}
                  className="no-underline text-inherit tracking-[0.25px]"
                >
                  {data.about.contact.phone}
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
