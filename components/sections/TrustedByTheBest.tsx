"use client";
import React from "react";
import Image from "next/image";
import Typography from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import data from "@/data/home.json";

function BrandItem(props: {
  src: string;
  alt: string;
  title: string;
  desc: string;
}) {
  const { src, alt, title, desc } = props;
  return (
    <div
      className="flex flex-col items-center justify-start group"
      role="listitem"
    >
      <div>
        <Image
          src={src}
          alt={alt}
          width={188}
          height={100}
          className="w-[188px] h-[100px] object-contain"
        />
      </div>
      <span
        className={cn(
          "text-2xl leading-33-6 tracking-0 text-secondary font-family-cardo",
          "mt-[22px] group-hover:mt-[19px] transition-all duration-300 group-hover:leading-28-8"
        )}
      >
        {title}
      </span>
      <p
        className={cn(
          "font-family-inter text-size-19 leading-28-5 tracking-0 text-octonary text-center text-balance",
          "mt-[16px] group-hover:mt-[19px] transition-all duration-300",
          "group-last:text-wrap"
        )}
      >
        {desc}
      </p>
    </div>
  );
}

export default function TrustedByTheBest() {
  return (
    <section className="bg-white px-4">
      <div className="container mx-auto max-w-[1300px] px-1 pt-[126px] pb-[127px] flex flex-col gap-[50px]">
        <div className="flex flex-col gap-[23px] items-center">
          <Typography
            as="h2"
            variant="h2"
            className="text-secondary font-family-cardo text-size-42 leading-50-4 tracking-0 "
          >
            {data.titles.trusted}
          </Typography>
          <div className="bg-primary w-[50px] h-[3px]" />
        </div>
        <div
          className={cn(
            "w-full min-h-[254px] grid gap-6",
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          )}
          role="list"
        >
          {data.trusted.map((t) => (
            <BrandItem
              key={t.title}
              src={t.src}
              alt={t.alt}
              title={t.title}
              desc={t.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
