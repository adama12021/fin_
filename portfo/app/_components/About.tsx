import { Section } from "./Section";
import Image from "next/image";
import { Facebook } from "./icon/Fbicon";
import { X } from "./icon/X";
import { Gmailicon } from "./icon/Gmail";
import { Linkd } from "./icon/Linkicon";
import Link from "next/link";

import { Spacing } from "./space";
import { Titrer } from "./titre";
import { Titre_about } from "./titre_about";




export const About = ()=>
    {
        return (
            <Section className="flex max-md:flex-col items-start gap-4">
                <div className="flex-[2] flex flex-col gap-2">
                    <h1 className="text-3xl font-caption text-primary font-bold">Camara Adama<b className="text-2xl text-green-500">.</b></h1>
                    <h3 className="text-2xl text-green-500 font-caption">
                   <Titre_about></Titre_about>
                    </h3>
                    
                
                    <p className="text-base">
                   <b className="text-green-500 font-bold">À propos de moi </b>
                    Salut ! Je m'appelle Ange Christopher BOUABRE web designer et community manager passionné. 
                    Avec plus de 3 ans d'expérience dans le domaine du design et de la gestion de communautés en ligne, 
                    j'ai développé une expertise qui me permet de créer des expériences numériques attrayantes et fonctionnelles.
                    </p>

                    <p className="text-base">
                    <b className="text-green-500 font-bold"> Mon Parcours Depuis 2020 </b>
                    , je me suis plongé dans l'univers du web design, 
                    où j'ai eu l'occasion de collaborer avec des clients variés pour transformer leurs idées en réalités visuelles captivantes.
                    Mes compétences couvrent l'ensemble du processus de création, allant de la conception UX/UI à l'intégration front-end.
                    En parallèle, en tant que community manager, 
                    j'ai aidé des marques et des entreprises à bâtir et à entretenir des communautés dynamiques en ligne. 
                    Grâce à ma connaissance des réseaux sociaux et à ma capacité à comprendre les tendances numériques,
                    j'ai su générer un engagement authentique et durable autour de projets variés.
                   </p>

                   <p className="text-base">
                   <b className="text-red-500 font-bold">Ce que je peux apporter </b>
                    Mon objectif est de créer des designs intuitifs et esthétiques tout en veillant à ce que chaque projet communique efficacement le message du client. 
                    En tant que community manager, je sais comment adapter la stratégie de contenu pour qu'elle résonne avec l'audience ciblée, 
                    créant ainsi des interactions positives et mémorables.
                   </p>

                </div>
                {/* <div className="flex-1"></div> */}
                <div className="flex flex-[2]  flex-col mt-20 max-md:m-auto  ">
                    
                    <img src="/images/IMG_7544.jpg" width={100}  className="w-full  h-auto max-w-xs max-md:w-40  max-md:m-auto max-md:w-full rotate-50 rounded-lg mb-10" alt="BRADY" />
                    
                    
                    <div className="ml-5 mb-5 max-md:mt-5 max-md:w-full text-xl font-caption text-green-500"> 
                        Suivez moi sur mes reseaux sociaux
                    </div>
                    <div className="flex flex-col">
                        <div className="flex-1 flex flex-row ml-5 mb-5">
                            <Link href="" className="flex flex-row hover:text-green-500">
                            <Facebook size={20}></Facebook>
                            <b className="ml-5 text-sm">Suivre sur Facebook</b>
                             </Link>
                            
                        </div>
                        <div className="flex-1  ml-5 mb-5">
                            <Link href='https://github.com' className="flex flex-row hover:text-green-500">
                            <X size={20}></X>
                            <b className="ml-5 text-sm">Suivre sur X</b>
                            </Link>
                            
                        </div>
                        <div className="flex-1 flex flex-row ml-5 mb-5">
                            <Link  href="" className="flex flex-row hover:text-green-500">
                            <Facebook size={20}></Facebook>
                            <b className="ml-5 text-sm">Suivre sur Instagram</b>
                            </Link>
                           
                        </div>

                        <div className="flex-1 flex flex-row ml-5 mb-5">
                            <Link  href="www.linkedin.com/in/adama-camara-2a2a0b234" className="flex flex-row hover:text-green-500">
                            <Linkd size={20}></Linkd>
                            <b className="ml-5 text-sm">Suivre sur Linkedin</b>
                            </Link>
                           
                        </div>
                    <hr className="ml-5 mb-2 "></hr>

                    <div className="flex-1 flex flex-row ml-5 mb-5">
                            <Link  href="mailto:adamscam925@gmail.com" className="flex flex-row hover:text-green-500">
                            <Gmailicon size={20}></Gmailicon>
                            <b className="ml-5 text-sm">adamscam925@gmail.com</b>
                            </Link>
                           
                        </div>
                    </div>
                </div>
                
            </Section>
        )
    }