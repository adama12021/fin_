
import Link from "next/link"
import { Section } from "./Section"
export const Mini =()=>
    {
        return(
            <header className="sticky top-0 py-4"> 
               < Section className="flex  items-baselines justify-center">
               

               <div className="bg-accent rounded-xl p-2 flex max-md:flex-col  items-center justify-between w-full ">

                    <div className="flex-col flex-1 max-md:w-full">
                        <p  className="font-bold">Specialité</p>
                        <p className="text-green-500 font-bold text-xl">Data Analyst</p>
                        <hr className="w-[180px]"></hr>
                        <div className="flex gap-20 ">
                        <p>About</p>
                        <p>About</p>
                        </div>
                    </div>
                        <br/>
                    <div className="flex-col flex-1 max-md:w-full">
                        <p  className="font-bold">Disponibilité</p>
                        <p className="text-green-500 font-bold text-xl">Ouvert</p>
                        <hr className="w-[180px]"></hr>
                        <div className="flex gap-20 ">
                        <p>About</p>
                        <p>About</p>
                        </div>
                        
                    </div>
                    <br/>
                    <div className="flex-col flex-1 max-md:w-full">
                        <p  className="font-bold">Années d'experience</p>
                        <p className="text-green-500 font-bold text-xl">5 ans</p>
                        <hr className="w-[180px]"></hr>
                        <div className="flex gap-20 ">
                        <p>About</p>
                        <p>About</p>
                        </div>
                    </div>
                    <br/>

                    <div className="flex-col flex-1 max-md:w-full">
                        <p className="font-bold">Adresse</p>
                        <p className="text-green-500 font-bold  ">Cöte d'ivoire, Abidjan </p>
                        <hr className="w-[180px]"></hr>
                        <div className="flex gap-20 ">
                        <p>About</p>
                        <p>About</p>
                        </div>
                    </div>
               
               </div>
              
              

                </Section>
            </header>
            
        )
    }