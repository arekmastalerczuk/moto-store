import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ImGift } from "react-icons/im";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <ImGift />
      </Link>
    </Button>
  );
}

export default Logo;
