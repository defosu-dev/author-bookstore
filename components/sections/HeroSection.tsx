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
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3.5">
            <span className="w-[35px] h-0.5 bg-primary" />
            <Typography as="span" variant="eyebrow" color="white">
              {data.hero.eyebrow}
            </Typography>
          </div>
          <Typography as="h1" variant="h1" color="white" className="mt-[15px]">
            {data.hero.titleLine1}
            <br />
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
            >
              <span>{data.hero.primaryCta}</span>
            </Button>
            <Button
              variant="link"
              tone="white"
              type="button"
              role="link"
              aria-label="Read Free Demo"
            >
              <span>{data.hero.secondaryCta}</span>
            </Button>
          </div>
          <div
            className={cn(
              "flex items-center flex-wrap",
              "gap-6 md:gap-[60px] mt-8 md:mt-[50px]"
            )}
          >
            <div
              className="flex flex-col gap-3"
              role="group"
              aria-label="Pages: 250 pages"
            >
              <span className="flex gap-2.5 items-center text-2xl leading-28-8 tracking-0-48 text-white font-family-cardo">
                <div className="w-4 h-4 bg-primary rounded-full" />
                {data.hero.stats.pagesLabel}
              </span>
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
              <span className="flex gap-2.5 items-center text-2xl leading-28-8 tracking-0-48 text-white font-family-cardo">
                <div className="w-4 h-4 bg-primary rounded-full" />
                {data.hero.stats.lengthLabel}
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
              <span className="flex gap-2.5 items-center text-2xl leading-28-8 tracking-0-48 text-white font-family-cardo">
                <div className="w-4 h-4 bg-primary rounded-full" />
                {data.hero.stats.ratingLabel}
              </span>
              <span
                className={cn(
                  "pl-[26px]",
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
