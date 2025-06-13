import React from "react";
import Container from "../global/Container";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <Container className="mb-8 mt-24">
      <footer className="grid gap-y-2 text-center text-muted-foreground lg:text-lg">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="tracking-wider">Armast Store</span>{" "}
          <a
            href="https://github.com/arekmastalerczuk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-x-2 pr-2 font-bold tracking-wider"
          >
            Arkadiusz Mastalerczuk <FaGithub className="size-4 lg:size-5" />
          </a>{" "}
          All rights reserved.
        </p>
        <p className="text-sm">
          The site uses free photos from{" "}
          <a
            href="https://www.pexels.com"
            target="_blank"
            rel="noopener noreferrer"
            className="tracking-wider text-primary hover:underline"
          >
            Pexels.com
          </a>
        </p>
      </footer>
    </Container>
  );
}

export default Footer;
