'use client'
import { Main } from "next/document";
import Image from "next/image";
import { Header } from "../_components/Header";
import { Titrer } from "../_components/titre";
import { Mini } from "../_components/mini"; 
import { Spacing } from "../_components/space";
import { Work } from "../_components/Work";
import { Full_work } from "../_components/full_work";
import { Pied } from "../_components/pied-vague";


export default function Page() {
  return (
    <main>
        <Titrer></Titrer>
        <Header></Header>
        <Spacing size="sm"></Spacing>
       <Full_work></Full_work>
       <Spacing size="sm"></Spacing>
       <Pied></Pied>
        
    </main>
  );
}
