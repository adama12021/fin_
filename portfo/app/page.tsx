'use client'
import { Main } from "next/document";
import Image from "next/image";
import { Header } from "./_components/Header";
import { Titrer } from "./_components/titre";
import { Mini } from "./_components/mini";
import { Hero } from "./_components/hero";
import { Spacing } from "./_components/space";
import { Work } from "./_components/Work";

export default function Home() {
  return (
    <main>
        <Titrer></Titrer>
        <Header></Header>
        <Mini></Mini>
        <Spacing size="sm"></Spacing>
        <Hero></Hero>
        <Spacing size="sm"></Spacing>
        <Work></Work>
        <Spacing size="sm"></Spacing>
    </main>
  );
}
