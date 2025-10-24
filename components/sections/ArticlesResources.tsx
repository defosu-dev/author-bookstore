"use client";
import React from "react";
import Image from "next/image";
import Typography from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import data from "@/data/home.json";

function ArticleCard(props: {
  src: string;
  alt: string;
  title: string;
  body: string;
  aria: string;
  date: string;
  dateTime: string;
}) {
  const { src, alt, title, body, aria, date, dateTime } = props;
  return (
    <div
      className="w-full shadow rounded-[5px] overflow-hidden"
      role="listitem"
    >
      <div className="w-full max-h-[350px]">
        <Image src={src} alt={alt} width={420} height={350} objectFit="cover" />
      </div>
      <div className="flex flex-col p-[30px]  pt-[26px] bg-white">
        <Typography as="h3" variant="titleMd" className="pr-8">
          {title}
        </Typography>
        <Typography as="p" variant="body" className="text-octonary mt-[22px] leading-30-4">
          {body}
        </Typography>
        <div
          className={cn(
            "flex items-center mt-[6px] pr-2",
            "justify-between gap-2 sm:gap-4"
          )}
        >
          <Button
            variant="link"
            tone="secondary"
            type="button"
            role="link"
            aria-label={aria}
            className="pb-0.5 tracking-0-38"
          >
            <span>Readmore</span>
          </Button>
          <time
            className="text-secondary text-base leading-25-5 tracking-0 mt-0.5"
            dateTime={dateTime}
          >
            {date}
          </time>
        </div>
      </div>
    </div>
  );
}

export default function ArticlesResources() {
  return (
    <section className="bg-novanary px-4">
      <div className="container mx-auto max-w-[1300px] pt-[125px] pb-[150px]">
        <div className="flex flex-col gap-[24px] items-center">
          <Typography
            as="h2"
            variant="h2"
            className="text-secondary font-family-cardo text-size-42 leading-50-4 tracking-0 "
          >
            {data.titles.articles}
          </Typography>
          <div className="bg-primary w-[50px] h-[3px]" />
        </div>
        <div
          className={cn(
            "mt-[70px] flex items-stretch",
            "flex-col sm:flex-row gap-6 md:gap-5"
          )}
          role="list"
        >
          {data.articles.map((a) => (
            <ArticleCard
              key={a.title}
              src={a.src}
              alt={a.alt}
              title={a.title}
              body={a.body}
              aria={a.aria}
              date={a.date}
              dateTime={a.dateTime}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
