"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";

type Props = {
  comment: string;
};

function Comment({ comment }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const isLongComment = comment.length > 120;
  const displayComment =
    isLongComment && !isExpanded ? `${comment.slice(0, 120)}...` : comment;

  return (
    <>
      <p className="text-sm">{displayComment}</p>
      {isLongComment && (
        <Button
          variant="link"
          className="pl-0 capitalize text-muted-foreground"
          onClick={toggleExpanded}
        >
          {isExpanded ? "show less" : "show more"}
        </Button>
      )}
    </>
  );
}

export default Comment;
