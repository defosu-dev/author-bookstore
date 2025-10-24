"use client";
import React from "react";
import Image from "next/image";
import Typography from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import data from "@/data/home.json";

function LearnItem(props: { index: string; text: React.ReactNode }) {
  const { index, text } = props;
  return (
    <div
      className=" px-[30px] pt-[30px] pr-[24px] pb-[27px] flex flex-col bg-novanary "
      role="listitem"
    >
      <span className="flex justify-center items-baseline pt-2 bg-primary rounded-full w-[50px] h-[50px]">
        <div className="text-size-23 leading-28-8 tracking-0 text-secondary font-family-cardo">
          {index}
        </div>
      </span>
      <p
        className={cn(
          "text-2xl leading-[33.8px] tracking-0 text-secondary font-family-cardo ",
          "mt-[29px]",
          "group-[&>*:nth-last-child(-n+2)]:pr-6 group-[&>*:nth-last-child(-n+2)]:mt-[30px]"
        )}
      >
        {text}
      </p>
    </div>
  );
}

export default function WhatWillYouLearn() {
  return (
    <section className="bg-white px-4">
      <div className="container mx-auto max-w-[1300px] py-[134px]">
        <div className="flex flex-col gap-[26px] items-center">
          <Typography
            as="h2"
            variant="h2"
            className="text-secondary font-family-cardo text-size-42 leading-50-4 tracking-0 "
          >
            {data.titles.whatWillYouLearn}
          </Typography>
          <div className="bg-primary w-[50px] h-[3px]" />
        </div>
        <div
          className={cn(
            "w-full flex  justify-between mt-[90px]",
            "flex-col lg:flex-row gap-10 lg:gap-20"
          )}
        >
          <div
            className="grid grid-cols-2 gap-[30px] w-full max-w-[636px] mt-[30px] h-fit group"
            role="list"
          >
            {data.learn.map((i) => (
              <LearnItem key={i.index} index={i.index} text={i.text} />
            ))}
          </div>
          <div className="w-full min-h-full border-[10px] border-primary max-w-[555px] max-h-[652px] mt-10 lg:mt-0">
            <Image
              src="/images/WhatWillYouLearn/image.png"
              alt=""
              width={525}
              height={632}
              className="w-full h-full translate-x-[-30px] translate-y-[-30px] shadow-[0px_0px_20px_0px_rgba(27,55,100,0.3)]"
              objectFit="cover"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
