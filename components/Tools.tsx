"use client";

import React from "react";

import { tools } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Tools = () => {
  return (
    <section id="testimonials" className="py-5">
      <h1 className="heading">Tools most used</h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={tools} direction="right" speed="slow" />
        </div>
      </div>
    </section>
  );
};

export default Tools;
