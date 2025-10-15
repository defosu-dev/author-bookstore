"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import data from "@/data/home.json";

function BookCard(props: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  price: string;
  description: string;
  orderAria: string;
}) {
  const { imageSrc, imageAlt, title, price, description, orderAria } = props;
  return (
    <div
      className={cn("flex flex-col md:flex-row", "gap-5 md:gap-[30px]")}
      role="listitem"
    >
      <div className="w-full h-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={285}
          height={382}
          className="w-full h-full"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col pt-[38px]">
        <Typography as="h3" variant="h3" className="pr-7">
          {title}
        </Typography>
        <span
          className={cn(
            "font-family-inter text-size-21 tracking-0 text-primary",
            "mt-[7px]"
          )}
        >
          {price}
        </span>
        <p
          className={cn(
            "font-family-inter text-size-19 leading-28-5 tracking-0 text-octonary pr-7",
            "mt-[17px]"
          )}
        >
          {description}
        </p>
        <span
          className={cn(
            "flex gap-2.5 items-center text-2xl leading-28-8 tracking-0-48 text-secondary font-family-cardo",
            "mt-[13px]"
          )}
        >
          <div className="w-4 h-4 bg-primary rounded-full" />
          Printed Book
        </span>
        <Button
          className={cn("mt-[27px]")}
          variant="outline"
          tone="primary"
          type="button"
          role="link"
          aria-label={orderAria}
        >
          Order Now
        </Button>
      </div>
    </div>
  );
}

export default function AuthorsBooks() {
  return (
    <section className="bg-white px-4">
      <div className="container mx-auto max-w-[1300px] px-2.5 pt-[90px] md:pt-[126px] pb-[110px] md:pb-[150px] flex flex-col gap-[50px] md:gap-[70px]">
        <div className="flex flex-col gap-[23px] items-center">
          <Typography
            as="h2"
            variant="h2"
            className="text-secondary font-family-cardo text-size-42 leading-50-4 tracking-0 "
          >
            {data.titles.authorsBooks}
          </Typography>
          <div className="bg-primary w-[50px] h-[3px]" />
        </div>
        <div
          className={cn("grid", "grid-cols-1 md:grid-cols-2 gap-6 md:gap-5")}
          role="list"
        >
          {data.books.map((b) => (
            <BookCard
              key={b.title}
              imageSrc={b.imageSrc}
              imageAlt={b.imageAlt}
              title={b.title}
              price={b.price}
              description={b.description}
              orderAria={b.orderAria}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
