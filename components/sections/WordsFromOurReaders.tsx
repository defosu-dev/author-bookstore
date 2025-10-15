"use client";
import React from "react";
import Image from "next/image";
import Typography from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import data from "@/data/home.json";

function RatingDots({
  size = 5,
  half = false,
}: {
  size?: number;
  half?: boolean;
}) {
  return (
    <div className="flex items-center gap-[3px]" aria-hidden="true">
      {Array.from({ length: size }).map((_, i) => (
        <div
          key={i}
          className="w-3 h-3 bg-transparent rounded-full border border-primary overflow-hidden"
        >
          <div
            className={`h-full ${
              i === size - 1 && half ? "w-1/2" : "w-full"
            } bg-primary`}
          />
        </div>
      ))}
    </div>
  );
}

function ReaderCard(props: {
  src: string;
  alt: string;
  name: string;
  quote: string;
  body: string;
  ratingAria: string;
  half?: boolean;
}) {
  const { src, alt, name, quote, body, ratingAria, half } = props;
  return (
    <div
      className="flex flex-col w-full pl-[35px] pt-[30px] pb-[24px] pr-[50px] max-w-[381px] bg-secondary"
      role="article"
      aria-label={ratingAria}
    >
      <div className="flex items-center gap-5">
        <div className="rounded-full overflow-hidden w-[85px] h-[85px]">
          <Image src={src} alt={alt} width={85} height={85} objectFit="cover" />
        </div>
        <div className="flex flex-col gap-[15px]">
          <span className="text-2xl leading-28-8 tracking-0 text-white font-family-cardo">
            {name}
          </span>
          <RatingDots half={half} />
        </div>
      </div>
      <p className="text-white text-size-22 leading-33 tracking-0 mt-[30px] font-family-cardo">{`“ ${quote} ”`}</p>
      <p className="text-quinary text-size-18 leading-28-8 tracking-0 mt-[13px]">
        {body}
      </p>
    </div>
  );
}

export default function WordsFromOurReaders() {
  return (
    <section className="bg-white px-4">
      <div className="container mx-auto max-w-[1300px] pt-[90px] md:pt-[130px] pb-[110px] md:pb-[150px]">
        <div
          className={cn("flex", "flex-col lg:flex-row gap-10 lg:gap-[63px]")}
        >
          <div className="flex flex-col w-full max-w-[440px] justify-center">
            <div className="flex flex-col gap-[23px]">
              <Typography
                as="h2"
                variant="h2"
                className="text-secondary font-family-cardo text-size-42 leading-50-4 tracking-0 "
              >
                {data.titles.readers}
              </Typography>
              <div className="bg-primary w-[50px] h-[3px]" />
            </div>
            <Typography
              as="p"
              variant="body"
              className="text-octonary mt-[33px]"
            >
              We believe that bookstores are essential to a healthy culture.
              They’re where authors can connect with readers, where we discover
              new writers, where children get hooked on the thrill of reading
              that can last a lifetime.
            </Typography>
            <div className="flex items-center gap-2.5 mt-[24px]">
              <div className="flex items-center gap-[5px]" aria-hidden="true">
                <div className="w-5 h-5 bg-transparent rounded-full border border-primary overflow-hidden">
                  <div className="h-full w-full bg-primary" />
                </div>
                <div className="w-5 h-5 bg-transparent rounded-full border border-primary overflow-hidden">
                  <div className="h-full w-full bg-primary" />
                </div>
                <div className="w-5 h-5 bg-transparent rounded-full border border-primary overflow-hidden">
                  <div className="h-full w-full bg-primary" />
                </div>
                <div className="w-5 h-5 bg-transparent rounded-full border border-primary overflow-hidden">
                  <div className="h-full w-full bg-primary" />
                </div>
                <div className="w-5 h-5 bg-transparent rounded-full border border-primary overflow-hidden">
                  <div className="h-full w-1/2 bg-primary" />
                </div>
              </div>
              <Typography
                as="span"
                variant="titleSmLoose"
                color="secondary"
                aria-label="Overall rating: 4.8 out of 5"
              >
                {data.readers.overallRating}
              </Typography>
            </div>
            <p className="text-secondary text-size-18 leading-28-5 tracking-0 mt-2.5">
              {data.readers.overallLabel}
            </p>
          </div>
          <div
            className={cn(
              "w-full grid",
              "grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
            )}
          >
            <div className="flex flex-col justify-center gap-5 w-full">
              {data.reviews.slice(0, 2).map((r) => (
                <ReaderCard
                  key={r.name}
                  src={r.src}
                  alt={r.alt}
                  name={r.name}
                  quote={r.quote}
                  body={r.body}
                  ratingAria={r.ratingAria}
                  half={r.half}
                />
              ))}
            </div>
            <div className="flex flex-col justify-center gap-5 w-full">
              {data.reviews.slice(2, 3).map((r) => (
                <ReaderCard
                  key={r.name}
                  src={r.src}
                  alt={r.alt}
                  name={r.name}
                  quote={r.quote}
                  body={r.body}
                  ratingAria={r.ratingAria}
                  half={r.half}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
