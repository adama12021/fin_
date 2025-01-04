
import Link from "next/link"
import { Section } from "./Section"
import Type from "./type"
export const Titrer =()=>
    {
        return(
            <header className=" top-0 py-4"> 
               < Section className="flex flex-col items-baselines">
               
               <div className="text-7xl  text-green-500">
               Adama
               </div>
               <div className="text-9xl text-white-500">
                Camara  <div className="text-8xl text-green-500"><Type></Type></div> 
               </div><br/>
               <hr></hr>
               
              
              

                </Section>
            </header>
            
        )
    }