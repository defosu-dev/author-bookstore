"use client";
import React from "react";
import Image from "next/image";
import Typography from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import data from "@/data/home.json";

export default function GetBookCopyToday() {
  return (
    <section className="px-4 bg-secondary">
      <div className="container mx-auto max-w-[1300px] py-[50px] md:py-[70px] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
        <div className="flex w-full h-full flex-col justify-center max-w-[540px]">
          <div className="flex flex-col mt-1">
            <Typography
              as="h2"
              variant="h2Lg"
              className="text-white font-family-cardo text-size-45 leading-54 tracking-0 "
            >
              {data.titles.getBookCopy}
            </Typography>
            <div className="bg-primary w-[50px] h-[3px] mt-[25px]" />
          </div>
          <Typography
            as="p"
            variant="body"
            className={cn("text-quinary", "mt-[28px]")}
          >
            {data.getBookCopy.desc}
          </Typography>
          <Button
            className={cn(
              "mt-[26px]",
              "pt-[16px] pb-[17px] tracking-[0.02rem] px-[46px]"
            )}
            variant="outline"
            tone="white"
            type="button"
            role="link"
            aria-label={data.getBookCopy.cta}
        >
          <span className="px-1 pr-2 tracking-0-32 ">{data.getBookCopy.cta}</span>
        </Button>
        </div>
        <div className="w-full h-full max-w-[560px] max-h-[394px]">
          <Image
            src="/images/GetBookCopyToday/image.png"
            alt=""
            width={560}
            height={394}
            className="w-full h-full"
            objectFit="cover"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
