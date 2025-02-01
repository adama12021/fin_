
import Link from "next/link"
import { Section } from "./Section"
import { BriefcaseIcon , ArrowUpRightIcon , CheckBadgeIcon} from "@heroicons/react/16/solid"
export const Competances =()=>
    {
        return(
            
               < Section className="flex  items-baselines ">
                <div className="flex flex-col w-full max-md:mt-2 ">
                    <h1 className="sm:text-8xl max-md:text-6xl text-[#F26430] w-full font-bold max-md:ml-4"> <CheckBadgeIcon className="sm:h-32 sm:w-32 max-md:h-16 sm:w-16 text-[#F26430] " ></CheckBadgeIcon>Mes compétances</h1><br/>
                
                <div className="flex flex-row max-md:flex-col justify-between">
                <div className="bg-white flex-1  sm:py-20">
                    
                <img className=" w-full " src="/images/analyse.jpeg"/>
                </div>

                <div className="bg-gray flex-1 ">
                <div className=" sm:ml-20 ">
                <h1 className="text-5xl font-bold  max-md:ml-4  max-md:mt-6 text-black ">
                    Data analytics skills
                </h1>
                <p className="text-primary  font-bold  text-[#F24F13] max-md:ml-4 mt-2">
                Passionné par l'analyse des données, je suis capable de transformer des informations brutes en insights exploitables.
                Mes compétences en data analytics me permettent de collecter, nettoyer, analyser et visualiser les données pour aider à la prise de décision. 
                Je maîtrise les outils et techniques statistiques essentiels, et je suis toujours à l'affût des dernières avancées dans le domaine.

                Fort des expériences en ce dommaine,
                je possède une solide maîtrise des outils et techniques nécessaires pour extraire des connaissances pertinentes à partir de données complexes. Je suis compétent en SQL pour l'interrogation de bases de données, 
                en Python avec des librairies comme Pandas et NumPy pour la manipulation et l'analyse des données, et en outils de visualisation tels que Tableau ou Power BI pour communiquer efficacement les résultats.
                Je suis capable de mener des analyses descriptives,
                exploratoires et prédictives pour répondre à des problématiques métiers concrètes.


                </p>
               
                

                </div>
                </div>
                </div><br/>

                <div className="flex flex-row justify-between max-md:flex-col-reverse">
                <div className="bg-gray flex-1">
                <div className="sm:mr-20 ">
                <h1 className="text-5xl font-bold  text-black max-md:ml-4">
                    Software developement / web development
                </h1>
                <p className=" text-primary max-md:ml-4 mt-2 font-bold text-[#F24F13] text-black">
                Développeur web full-stack, je suis capable de gérer l'ensemble du cycle de développement d'une application web,
                du front-end au back-end en passant par le déploiement. 
                Je maîtrise un large éventail de technologies, notamment React, Node.js, Express, et des bases de données comme MongoDB ou PostgreSQL. 
                Je suis passionné par la création de solutions web complètes et performantes.
                </p>

               
                    
                
                </div>
                </div><br/>

                <div className="bg-white   m-auto  flex-1 v py-24 sm:py-20">
                <img className=" w-full" src="/images/web.PNG"/>
                    
                
                </div>
                </div><br/>


                <div className="flex flex-row max-md:flex-col justify-between">
                <div className="bg-white flex-1  sm:py-20">
                    
                <img className=" w-full " src="/images/comm.jpg"/>
                </div>

                <div className="bg-gray flex-1 ">
                <div className=" sm:ml-20 ">
                <h1 className="text-5xl font-bold  max-md:ml-4  max-md:mt-6 text-black ">
                    Communications
                </h1>
                <p className="text-primary max-md:ml-4 mt-2 font-bold text-[#F24F13] text-black">
                Sensible aux nuances culturelles, je possède une forte capacité d'adaptation et de communication interculturelle, 
                renforcée par mon apprentissage de l'anglais et de l'italien. Cette expérience m'a permis de développer une compréhension approfondie des différentes perspectives et modes de communication,
                me permettant de construire des relations solides et de favoriser la collaboration dans des environnements multiculturels.


                </p>
               
                

                </div>
                </div>
                </div><br/>
                

               

                </div>

               </Section>

        

             )  }