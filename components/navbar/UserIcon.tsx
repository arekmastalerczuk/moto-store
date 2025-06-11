import React from "react";
import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";
import { FaUser } from "react-icons/fa";

async function UserIcon() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt="user image"
        className="size-6 rounded-full border border-foreground"
        width={24}
        height={24}
      />
    );
  }

  return (
    <FaUser className="size-6 rounded-full text-primary dark:text-secondary-foreground" />
  );
}

export default UserIcon;
