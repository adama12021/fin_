import { Main } from "next/document";
import Image from "next/image";
import { Header } from "./_components/Header";
import { Titrer } from "./_components/titre";
import { Mini } from "./_components/mini";
import { Hero } from "./_components/hero";

export default function Home() {
  return (
    <main>
        <Titrer></Titrer>
        <Header></Header>
        <Mini></Mini>
        <Hero></Hero>
    </main>
  );
}
