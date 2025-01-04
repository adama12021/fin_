
import Link from "next/link"
import { Section } from "./Section"
export const Titrer =()=>
    {
        return(
            <header className="sticky top-0 py-4"> 
               < Section className="flex flex-col items-baselines">
               
               <div className="text-7xl  text-green-500">
               Adama
               </div>
               <div className="text-9xl text-green-500">
                Camara 
               </div>
               <hr className="text-green-500"></hr>
               
              
              

                </Section>
            </header>
            
        )
    }