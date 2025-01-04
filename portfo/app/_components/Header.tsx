
import Link from "next/link"
import { Section } from "./Section"
export const Header =()=>
    {
        return(
            <header className="sticky top-0 py-4"> 
               < Section className="flex items-baselines justify-center">
               

               <ul className="bg-accent rounded-xl p-2 flex items-center justify-between w-full ">
                <Link href="/About" className=" flex-1 hover:text-green-500 text-2xl" >About</Link>
                <Link href="/Projet" className=" flex-1 hover:text-green-500 text-2xl" >Projet</Link>
                <Link  href="/Skills" className=" flex-1 hover:text-green-500 text-2xl" >Tech. & parcours</Link>
               </ul>
              
              

                </Section>
            </header>
            
        )
    }