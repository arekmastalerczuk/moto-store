"use client";

import React from "react";
import { FaShareAlt } from "react-icons/fa";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  EmailIcon,
  EmailShareButton,
} from "react-share";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

type Props = {
  productId: string;
  company: string;
  name: string;
};

function ShareButton({ productId, company, name }: Props) {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const shareLink = `${url}/products/${productId}`;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="p-2">
          <FaShareAlt />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="start"
        sideOffset={10}
        className="flex w-full items-center justify-center gap-x-4"
      >
        <FacebookShareButton
          url={shareLink}
          htmlTitle={`${company} ${name}`}
          hashtag={`#${company.split(" ").join("")} #
          ${name.split(" ").join("")}`}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={shareLink}
          title={`${company} ${name} - Check this out!`}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton
          url={shareLink}
          title={name}
          summary={`${name} | ${company}\n\nCheck out this product!`}
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <EmailShareButton
          url={shareLink}
          subject={`${company} - ${name}`}
          body={`Check out ${name} from ${company}:\n\n`}
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
      </PopoverContent>
    </Popover>
  );
}

export default ShareButton;
