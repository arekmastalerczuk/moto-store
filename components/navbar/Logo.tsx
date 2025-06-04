import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { PiMotorcycleFill } from "react-icons/pi";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <PiMotorcycleFill />
      </Link>
    </Button>
  );
}

export default Logo;
