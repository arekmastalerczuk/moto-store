import React from "react";
import { Button } from "../ui/button";
import { FaHeart } from "react-icons/fa";

type Props = {
  productId: string;
};

function FavoriteToggleButton({ productId }: Props) {
  return (
    <Button size="icon" variant="outline" className="cursor-pointer p-2">
      <FaHeart />
    </Button>
  );
}

export default FavoriteToggleButton;
