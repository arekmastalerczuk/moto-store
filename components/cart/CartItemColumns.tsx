import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/utils/format";

export const FirstColumn = ({
  image,
  name,
}: {
  image: string;
  name: string;
}) => {
  return (
    <div className="relative size-24 sm:size-32">
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
        className="w-full rounded-md object-cover"
      />
    </div>
  );
};

export const SecondColumn = ({
  productId,
  name,
  company,
}: {
  productId: string;
  name: string;
  company: string;
}) => {
  return (
    <div className="md:w-48">
      <Link href={`/products/${productId}`}>
        <h3 className="font-bold capitalize hover:underline">{name}</h3>
      </Link>
      <h4 className="mt-2 text-xs capitalize">{company}</h4>
    </div>
  );
};

export const FourthColumn = ({ price }: { price: number }) => {
  return <p className="font-medium md:ml-auto">{formatPrice(price)}</p>;
};
