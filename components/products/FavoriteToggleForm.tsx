"use client";

import { toggleFavoriteAction } from "@/utils/actions";
import { usePathname } from "next/navigation";
import React from "react";
import FormContainer from "../form/FormContainer";
import { CardSubmitButton } from "../form/Buttons";

type Props = {
  favoriteId: string | null;
  productId: string;
};

function FavoriteToggleForm({ favoriteId, productId }: Props) {
  const pathname = usePathname();
  const toggleAction = toggleFavoriteAction.bind(null, {
    productId,
    favoriteId,
    pathname,
  });

  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
}

export default FavoriteToggleForm;
