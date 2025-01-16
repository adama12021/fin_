
import Link from "next/link"
import { Section } from "./Section"
import Type from "./type"
export const Titre_about =()=>
    {
        return(
            <header className=" top-0 py-4"> 
               < Section className="flex flex-col items-baselines">
               
               <div className="text-3xl text-green-500 max-md:text-3xl max-md:ml-2">
               Adama
               </div>
               <div className="text-9xl text-white-500 max-md:text-7xl">
                Camara  <div className="text-5xl text-green-500 max-md:text-7xl"><Type ></Type></div> 
               </div><br/>
              
               <hr></hr>

            
              
              

                </Section>
            </header>
            
        )
    }