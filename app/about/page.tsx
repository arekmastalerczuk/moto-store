import React from "react";
import { GiFullMotorcycleHelmet } from "react-icons/gi";

function AboutPage() {
  return (
    <>
      <h1 className="text-3xl font-bold capitalize">About us</h1>
      <section className="mt-24">
        <h2 className="flex flex-wrap items-center justify-center gap-4 text-4xl font-bold tracking-wider sm:gap-x-6 sm:text-6xl">
          Armast
          <span className="rounded-xl bg-primary px-4 py-2 font-bold tracking-wider text-primary-foreground">
            Store
          </span>
          <GiFullMotorcycleHelmet className="relative -left-2 -top-8 size-10 sm:-left-4 sm:-top-10 sm:size-12" />
        </h2>
        <p className="mx-auto mt-12 max-w-2xl text-xl font-light leading-8 tracking-wide sm:text-2xl">
          We put our customers at the heart of everything we do.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-xl font-light leading-8 tracking-wide sm:text-2xl">
          We believe that by focusing on customer satisfaction, we can create a
          better experience for everyone.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-xl font-light leading-8 tracking-wide sm:text-2xl">
          Our goal is to provide a seamless, enjoyable and personal shopping
          experience that makes you feel valued and understood.
        </p>
      </section>
    </>
  );
}

export default AboutPage;
