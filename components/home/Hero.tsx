import React from "react";
import HeroCarousel from "./HeroCarousel";
import { Button } from "../ui/button";
import Link from "next/link";

function Hero() {
  return (
    <section className="grid items-center gap-24 lg:grid-cols-2">
      <div>
        <h1 className="grid max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl lg:grid-cols-2">
          Happiness&nbsp;is&nbsp;not in money, but in shopping.
        </h1>
        <p className="mt-8 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg lg:text-xl">
          Enjoy your shopping experience!
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/products" className="tracking-wider">
            Our products
          </Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}

export default Hero;
