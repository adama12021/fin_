
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
import { About } from "../_components/About";
import { Section } from "../_components/Section";
export default function Page(){
return(
    <>
    <Section>
    <Header></Header>
    <Spacing size="sm"></Spacing>
    <div className="max-w-3xl px-4 ">
        <h2 className="text-5xl mb-4 flex-[2] w-full font-caption text-primary font-bold">Je suis <b className="text-green-500 font-bold">Camara Adama</b>. 
            je vis à Abidjan ou j'exploite toutes mes ressources.
        </h2>
       
    </div>
    <About></About>
    <br></br>
    <hr className="max-w-5xl px-4 m-auto"></hr><br/>
    <Pied></Pied>

    </Section>
    </>
)
         

}