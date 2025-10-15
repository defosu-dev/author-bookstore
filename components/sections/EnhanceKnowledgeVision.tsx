"use client";
import React from "react";
import Typography from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import data from "@/data/home.json";

function Stat(props: { label: string; value: string }) {
  const { label, value } = props;
  return (
    <div className="flex gap-2.5 items-baseline">
      <span className="flex gap-2.5 items-center text-size-22 leading-30-8 tracking-0-48 text-secondary font-family-cardo">
        <div className="w-4 h-4 bg-primary rounded-full" />
        {label}
      </span>
      <span
        className={cn(
          "text-size-17 leading-27 tracking-0 font-family-inter text-octonary"
        )}
      >
        {value}
      </span>
    </div>
  );
}

function ChapterCard(props: {
  title: string;
  desc: React.ReactNode;
  pages: string;
  length: string;
}) {
  const { title, desc, pages, length } = props;
  return (
    <div
      className="bg-white px-10 pt-[42px] pb-11 flex flex-col"
      role="listitem"
    >
      <Typography as="h3" variant="h4">
        {title}
      </Typography>
      <Typography as="p" variant="bodyLg" className="text-octonary mt-[21px]">
        {desc}
      </Typography>
      <div className="flex item-center gap-[45px] mt-2.5">
        <Stat label="Pages :" value={pages} />
        <Stat label="Length :" value={length} />
      </div>
    </div>
  );
}

export default function EnhanceKnowledgeVision() {
  return (
    <section className="bg-novanary px-4">
      <div className="container mx-auto max-w-[1300px] pt-[80px] md:pt-[120px] pb-[100px] md:pb-[130px] flex flex-col items-center gap-[50px] md:gap-[70px]">
        <div className="flex flex-col gap-[23px] items-center">
          <Typography
            as="h2"
            variant="h2"
            className="text-secondary font-family-cardo text-size-42 leading-50-4 tracking-0 "
          >
            {data.titles.enhance}
          </Typography>
          <div className="bg-primary w-[50px] h-[3px]" />
        </div>
        <div className="grid grid-cols-2 gap-[30px]" role="list">
          {data.chapters.map((c) => (
            <ChapterCard
              key={c.title}
              title={c.title}
              desc={c.desc}
              pages={c.pages}
              length={c.length}
            />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <Button
            variant="solid"
            tone="primary"
            size="xl"
            type="button"
            role="link"
            aria-label="Start a 15-Days Free Trial"
          >
            <span>{data.enhanceCta.label}</span>
          </Button>
          <p className="mt-[34px] text-octonary text-size-18 leading-28-5 tracking-0">
            {data.enhanceCta.desc}
          </p>
          <p className="text-octonary text-size-18 leading-28-5 tracking-0">
            <Link
              href={data.enhanceCta.questionHref}
              className="text-secondary text-size-18 leading-28-5 tracking-0 font-family-inter"
            >
              {data.enhanceCta.questionPrefix}
            </Link>{" "}
            {data.enhanceCta.contactText}
          </p>
        </div>
      </div>
    </section>
  );
}
