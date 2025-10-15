"use client";
import React from "react";
import Link from "next/link";
import IconLogo from "@/components/icons/IconLogo";
import IconFacebook from "@/components/icons/social/IconFacebook";
import IconTwitter from "@/components/icons/social/IconTwitter";
import IconLinkedin from "@/components/icons/social/IconLinkedin";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import data from "@/data/home.json";

export default function HeaderBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="px-4 bg-secondary">
      <div
        className={cn(
          "container mx-auto max-w-[1300px] flex items-center py-[22px]",
          "justify-between"
        )}
      >
        <div className={cn("flex items-center", "space-x-4 md:gap-x-[19px]")}>
          <Link href="/" aria-label="Homepage" className={cn("pb-[5px]")}>
            <IconLogo />
          </Link>

          <div
            className={cn(
              "gap-x-2.5 flex items-center pb-px",
              "[&>a]:w-[45px] [&>a]:h-[45px] [&>a]:bg-white [&>a]:text-tertiary [&>a]:flex [&>a]:items-center [&>a]:justify-center [&>a]:aspect-square"
            )}
            aria-label="Social links"
            role="list"
          >
            <Link href="/" aria-label="Facebook" role="listitem">
              <IconFacebook />
            </Link>
            <Link href="/" aria-label="Twitter" role="listitem">
              <IconTwitter />
            </Link>
            <Link href="/" aria-label="LinkedIn" role="listitem">
              <IconLinkedin />
            </Link>
          </div>
        </div>
        <div
          className={cn(
            "flex items-center",
            "space-x-4 sm:space-x-6 md:space-x-[106px]"
          )}
        >
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className={cn(
              "sm:hidden inline-flex items-center justify-center",
              "w-11 h-11 border border-primary text-white"
            )}
            onClick={() => setIsOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="block w-5 h-[2px] bg-white" />
            <span className="block w-5 h-[2px] bg-white mt-[5px]" />
            <span className="block w-5 h-[2px] bg-white mt-[5px]" />
          </button>
          <nav
            className={cn(
              "hidden sm:flex items-center pt-1 pb-0.5 pr-0.5 space-x-5 md:gap-x-[21px] text-size-17 font-normal  leading-[26px] tracking-[0.4px] text-quaternary [&>a]:hover:text-primary [&>a]:transition-colors [&>a]:duration-300 [&>a]:last:ml-5 [&>a]:first:mr-1"
            )}
            aria-label="Primary"
          >
            <div
              className={cn("flex items-center", "space-x-5 md:gap-x-[28px]")}
            >
              {data.header.nav.map(
                (label, idx) =>
                  idx !== data.header.nav.length - 1 && (
                    <Link
                      href="/"
                      aria-current={idx === 0 ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  )
              )}
            </div>
            <Link
              href="/"
              aria-current={
                data.header.nav.length - 1 === 0 ? "page" : undefined
              }
            >
              {data.header.nav[data.header.nav.length - 1]}
            </Link>
          </nav>
          <Button
            variant="solid"
            tone="primary"
            size="md"
            type="button"
            role="link"
            aria-label="Order Today"
            className="hidden sm:inline-flex px-[53px] py-[19px] tracking-[0.88px] leading-7"
          >
            <span>{data.header.cta}</span>
          </Button>
        </div>
      </div>
      <div
        className={cn(
          "sm:hidden overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[300px]" : "max-h-0"
        )}
      >
        <nav
          className={cn(
            "container mx-auto max-w-[1300px] px-1 pb-3",
            "flex flex-col gap-3 text-quinary"
          )}
          aria-label="Mobile Primary"
        >
          {data.header.nav.map((label, idx) => (
            <Link
              key={label}
              href="/"
              aria-current={idx === 0 ? "page" : undefined}
              className="text-white"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Button
            variant="solid"
            tone="primary"
            size="md"
            type="button"
            role="link"
            aria-label="Order Today"
            className="mt-3"
            onClick={() => setIsOpen(false)}
          >
            <span>{data.header.cta}</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}
