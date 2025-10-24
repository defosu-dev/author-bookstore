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
  size?: number
  half?: boolean
}) {
  return (
    <div className="flex items-center gap-[2.8px]" aria-hidden="true">
      {Array.from({ length: size }).map((_, i) => (
        <div
          key={i}
        >
         { i === size - 1 ? (
  half ? (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.33333 12.1667C9.55499 12.1667 12.1667 9.55499 12.1667 6.33333C12.1667 3.11167 9.55499 0.5 6.33333 0.5C3.11167 0.5 0.5 3.11167 0.5 6.33333C0.5 9.55499 3.11167 12.1667 6.33333 12.1667Z"
        stroke="#FFCA42"
      />
      <path
        d="M6.33346 12.6667C5.50176 12.6667 4.67816 12.5029 3.90976 12.1846C3.14136 11.8663 2.44316 11.3998 1.85506 10.8117C1.26696 10.2236 0.800459 9.52539 0.482159 8.75699C0.163859 7.9886 6.10352e-05 7.16504 6.10352e-05 6.33333C6.10352e-05 5.50163 0.163859 4.67807 0.482159 3.90967C0.800459 3.14128 1.26696 2.44309 1.85506 1.85499C2.44316 1.26689 3.14136 0.800375 3.90976 0.482096C4.67816 0.163816 5.50176 -1.09065e-07 6.33346 0V6.33333V12.6667Z"
        fill="#FFCA42"
      />
    </svg>
  ) : (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.33333 12.1667C9.55499 12.1667 12.1667 9.55499 12.1667 6.33333C12.1667 3.11167 9.55499 0.5 6.33333 0.5C3.11167 0.5 0.5 3.11167 0.5 6.33333C0.5 9.55499 3.11167 12.1667 6.33333 12.1667Z"
        stroke="#FFCA42"
      />
    </svg>
  )
) : (
  <svg
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.33333 12.6667C9.83113 12.6667 12.6667 9.83113 12.6667 6.33333C12.6667 2.83553 9.83113 0 6.33333 0C2.83553 0 0 2.83553 0 6.33333C0 9.83113 2.83553 12.6667 6.33333 12.6667Z"
      fill="#FFCA42"
    />
  </svg>
)}

        </div>
      ))}
    </div>
  )
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
      className="flex flex-col w-full pl-[35px] pr-11 pt-[30px] pb-[24px] max-w-[381px] bg-secondary"
      role="article"
      aria-label={ratingAria}
    >
      <div className="flex items-start gap-5">
        <div className="rounded-full overflow-hidden w-[85px] h-[85px]">
          <Image src={src} alt={alt} width={85} height={85} objectFit="cover" />
        </div>
        <div className="flex flex-col gap-[14px] pt-3">
          <span className="text-2xl leading-28-8 tracking-0 text-white font-family-cardo ">
            {name}
          </span>
          <RatingDots half={half} />
        </div>
      </div>
      <p className="text-white text-size-22 leading-33 tracking-0 mt-[20px] font-family-cardo w-full">{quote}</p>
      <p className="text-quinary text-size-18 leading-28-8 tracking-0 mt-[13px] text-wrap">
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
          className={cn("flex", "flex-col lg:flex-row gap-10 md:gap-[58px]")}
        >
          <div className="flex flex-col w-full max-w-[440px] justify-start md:pt-25">
            <div className="flex flex-col">
              <Typography
                as="h2"
                variant="h2"
                className="text-secondary font-family-cardo text-size-42 leading-50-4 tracking-0"
              >
                {data.titles.readers}
              </Typography>
              <div className="bg-primary w-[50px] h-[3px] mt-[24px]" />
            </div>
            <Typography
              as="p"
              variant="body"
              className="text-octonary mt-[33px] leading-[35px]"
            >
              We believe that bookstores are essential to a healthy culture.
              They’re where authors can connect with readers, where we discover
              new writers, where children get hooked on the thrill of reading
              that can last a lifetime.
            </Typography>
            <div className="flex items-center gap-2.5 mt-4">
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
            <p className="text-secondary text-size-18 leading-28-5 tracking-0 mt-1.5">
              {data.readers.overallLabel}
            </p>
          </div>
          <div
            className={cn(
              "w-full grid",
              "grid-cols-1 md:grid-cols-2 gap-5 md:gap-0"
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
            <div className="flex flex-col justify-center w-full">
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
