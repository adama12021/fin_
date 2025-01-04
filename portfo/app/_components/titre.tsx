
import Link from "next/link"
import { Section } from "./Section"
import Type from "./type"
export const Titrer =()=>
    {
        return(
            <header className=" top-0 py-4"> 
               < Section className="flex flex-col items-baselines">

               <div className="relative  w-full"> {/* Conteneur parent avec position relative et une hauteur définie */}
                <img
                    src="/images/IMG_9222.JPEG"
                    alt="Description de l'image"
                    className="absolute top-50 right-0 h-[230px] w-[280px] mr-20 mt-10  sm:rounded-full sm:object-cover max-md:h-10 max-md:W-[10PX]" />
                {/* Autre contenu dans le conteneur */}
                </div>
               
               <div className="text-7xl text-green-500 max-md:text-3xl max-md:ml-2">
               Adama
               </div>
               <div className="text-9xl text-white-500 max-md:text-7xl">
                Camara  <div className="text-8xl text-green-500 max-md:text-7xl"><Type ></Type></div> 
               </div><br/>
              
               <hr></hr>

            
              
              

                </Section>
            </header>
            
        )
    }