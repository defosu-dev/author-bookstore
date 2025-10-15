"use client";
import React from "react";
import Typography from "@/components/ui/Typography";
import data from "@/data/home.json";

export default function GetBestUpdates() {
  return (
    <section className="bg-white px-4">
      <div className="container mx-auto max-w-[1300px] py-[120px]">
        <div className="pt-[100px] pb-[115px] bg-primary px-4 flex flex-col justify-between items-center shadow-lg rounded-[5px]">
          <div className="flex flex-col gap-[23px] items-center">
            <Typography
              as="h2"
              variant="h2"
              className="text-secondary font-family-cardo text-size-42 leading-50-4 tracking-0 "
            >
              {data.titles.updates}
            </Typography>
            <div className="bg-secondary w-[50px] h-[3px]" />
          </div>
          <p className="text-center text-size-18 leading-28-5 tracking-0 font-family-inter mt-[25px] text-secondary">
            {data.updates.desc}
          </p>
          <form
            action="#"
            className="flex gap-4 items-center justify-center w-full mt-[49px]"
            aria-label="Subscribe to updates"
          >
            <input
              type="email"
              name="email"
              id="subscribe-email"
              placeholder="Your Email ID..."
              autoComplete="email"
              required
              aria-label="Email address"
              className="w-full h-[70px] px-[39px] pt-[19px] pb-[20px] border border-denary max-w-[656px] bg-white placeholder-quinary text-black"
            />
            <button
              className="bg-secondary w-full flex justify-center items-center max-w-[328px] h-[70px]"
              type="submit"
              aria-label="Subscribe"
            >
              <span className="text-size-18 leading-30-4 tracking-0-18 text-white font-family-inter">
                {data.updates.cta}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
