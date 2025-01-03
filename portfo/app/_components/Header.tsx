
import Link from "next/link"
import { Section } from "./Section"
export const Header =()=>
    {
        return(
            <header className="sticky top-0 py-4"> 
               < Section className="flex items-baselines">
               <Link href="/" className="text-3xl text-green-500 font-bold text-primary" > Camara</Link>

               <div className="flex-1"/>
               <ul className="bg-accent rounded-xl p-2 flex items-center gap-5">
                <Link href="/About" className="hover:text-green-500 text-sm" >About</Link>
                <Link href="/Projet" className="hover:text-green-500 text-sm" >Projet</Link>
                <Link  href="/Skills" className="hover:text-green-500 text-sm" >Tech. & parcours</Link>
               </ul>
               <div className="flex-1"/>
               <ul className="flex items-center gap-2">
               
               <Link  href="https://github.com/adama123" className="size-6">
              
                </Link>

                <Link  href="https://github.com/adama123" className="size-6">
              
                </Link>

                <Link  href="https://github.com/adama123" className="size-6">
              
                </Link>

               </ul>
              

                </Section>
            </header>
            
        )
    }