"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";

export function Card({
  id,
  title,
  description,
  img,
  icon,
  link,
}: {
  id?: number;
  title: string;
  description?: string;
  img?: string;
  icon?: string[];
  link?: string;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto md:h-[580px] rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl lg:text-2xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm lg:text-xl max-w-md mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={
              img ??
              "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <div className="flex gap-4">
            {icon?.map((item, idx) => (
              <Image key={idx} src={item} alt={item} width={18} height={18} />
            ))}
          </div>
          <CardItem
            translateZ={20}
            className="pl-4 lg:px-4 py-2 rounded-xl text-sm lg:text-xl font-normal text-purple"
            as={Link}
            href={link}
          >
            Check live site →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
