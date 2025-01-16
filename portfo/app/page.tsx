'use client'
import { Main } from "next/document";
import Image from "next/image";
import { Header } from "./_components/Header";
import { Titrer } from "./_components/titre";
import { Mini } from "./_components/mini";
import { Hero } from "./_components/hero";
import { Spacing } from "./_components/space";
import { Work } from "./_components/Work";
import { Competances } from "./_components/competance";
import { Parcour } from "./_components/Parcours";
import { Achivement } from "./_components/Achive";
import { Pied } from "./_components/pied-vague";
import { Experience } from "./_components/experience";
import { Contact } from "./_components/contact";
import { Freelance } from "./_components/freelance";

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
        <Competances></Competances>
        <Spacing size="sm"></Spacing>
        <Achivement></Achivement>
        <Spacing size="sm"></Spacing>
        <Parcour></Parcour>
        <Spacing size="sm"></Spacing>
        <Experience></Experience>
        <Spacing size="sm"></Spacing>
        <Freelance></Freelance>
        <Spacing size="sm"></Spacing>
        <Contact></Contact>
        <Spacing size="sm"></Spacing>
        <Pied></Pied>
    </main>
  );
}
