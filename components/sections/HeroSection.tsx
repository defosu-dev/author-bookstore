"use client";
import React from "react";
import Image from "next/image";
import Typography from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import data from "@/data/home.json";

export default function HeroSection() {
  return (
    <section className="px-4 bg-secondary">
      <div
        className={cn(
          "constiner mx-auto max-w-[1300px]",
          "px-[21px] py-[60px] md:py-[100px]",
          "flex flex-col md:flex-row justify-between",
          "gap-10 md:gap-[75px]"
        )}
      >
        <div className="flex flex-col justify-center pl-0.5">
          <div className="flex items-center gap-3.5">
            <span className="w-[35px] h-0.5 bg-primary" />
            <Typography as="span" variant="eyebrow" color="white">
              {data.hero.eyebrow}
            </Typography>
          </div>
          <Typography as="h1" variant="h1" color="white" className="mt-[10px]">
            {data.hero.titleLine1}
          </Typography>
          <Typography
            as="h1"
            variant="h1"
            color="white"
            className="[word-spacing:0.8px] tracking-[0.68px]"
          >
            {data.hero.titleLine2}
          </Typography>
          <Typography as="p" variant="bodySm" color="quinary" className="mt-6">
            {data.hero.desc1}
          </Typography>
          <Typography as="p" color="quinary" variant="bodySm">
            {data.hero.desc2}
          </Typography>
          <div className="flex items-center gap-[51px] mt-[42px]">
            <Button
              variant="solid"
              tone="primary"
              size="md"
              type="button"
              role="link"
              aria-label="Order Today"
              className="px-[49px] py-[19px] tracking-[0.4px] leading-7"
            >
              <span className="px-1 pr-2">{data.hero.primaryCta}</span>
            </Button>
            <Button
              variant="link"
              tone="white"
              type="button"
              role="link"
              aria-label="Read Free Demo"
              className="pb-1 leading-[26px] tracking-[0.475px]"
            >
              <span>{data.hero.secondaryCta}</span>
            </Button>
          </div>
          <div
            className={cn(
              "flex items-center flex-wrap w-full",
              "gap-6 md:gap-[62px] mt-8 md:mt-[48px]"
            )}
          >
            <div
              className="flex flex-col gap-3"
              role="group"
              aria-label="Pages: 250 pages"
            >
              <div className="flex gap-2.5 pl-[26px] relative items-center text-2xl leading-28-8 tracking-0-48 text-white font-family-cardo">
                <span className="w-4 h-4 bg-primary rounded-full aspect-square absolute left-0 top-1.5" />
                <span>{data.hero.stats.pagesLabel}</span>
              </div>
              <span
                className={cn(
                  "pl-[26px]",
                  "text-size-17 leading-27 tracking-0 font-family-inter text-quinary"
                )}
              >
                {data.hero.stats.pagesValue}
              </span>
            </div>
            <div
              className="flex flex-col gap-3"
              role="group"
              aria-label="Length: 10 hours"
            >
              <span className="flex gap-2.5 pl-[26px] relative items-center text-2xl leading-28-8 tracking-0-48 text-white font-family-cardo h-full w-full">
                <span className="w-4 h-4 bg-primary rounded-full aspect-square absolute left-0 top-1.5" />
                <span>{data.hero.stats.lengthLabel}</span>
              </span>
              <span
                className={cn(
                  "pl-[26px]",
                  "text-size-17 leading-27 tracking-0 font-family-inter text-quinary"
                )}
              >
                {data.hero.stats.lengthValue}
              </span>
            </div>
            <div
              className="flex flex-col gap-3"
              role="group"
              aria-label="Rating: 4.5 out of 5 based on 305 ratings"
            >
              <span className="flex gap-2.5 pl-[26px] relative items-center text-2xl leading-28-8 tracking-0-48 text-white font-family-cardo h-full w-full md:ml-2">
                <span className="w-4 h-4 bg-primary rounded-full aspect-square absolute left-0 top-1.5" />
                <span>{data.hero.stats.ratingLabel}</span>
              </span>
              <span
                className={cn(
                  "pl-[26px] md:ml-2",
                  "text-size-17 leading-27 tracking-0 font-family-inter text-quinary"
                )}
              >
                {data.hero.stats.ratingValue}
              </span>
            </div>
          </div>
        </div>
        <div className="order-first md:order-none mt-8 md:mt-0">
          <Image
            src="/images/HeroSection/image.png"
            alt=""
            width={592}
            height={800}
            className="shadow"
            objectFit="cover"
            aria-hidden="true"
            priority
          />
        </div>
      </div>
    </section>
  );
}
