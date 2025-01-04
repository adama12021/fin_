
import Link from "next/link"
import Image from 'next/image'
import { Section } from "./Section"
import { ArrowUpRightIcon } from "@heroicons/react/16/solid"
export const Mini =()=>
    {
        return(
            <header className=" top-0 py-4"> 
               < Section className="flex  items-baselines justify-center">
               

               <div className="bg-accent rounded-xl p-2 flex max-md:flex-wrap  items-center justify-between w-full ">
                {/* <div className="max-md:flex max-md:flex-row  max-md:w-full"> */}
                   
                    <div className="flex-col flex-1 ">
                        <p  className="font-bold">Specialité</p>
                        <p className="text-green-500 font-bold text-xl">Data Analyst</p>
                        <hr className="w-[150px]"></hr>
                        <div className="flex gap-20 ">
                        <p>About</p>
                        <ArrowUpRightIcon  className="h-6 w-6 text-white"></ArrowUpRightIcon>
                        </div>
                    </div>
                        <br/>
                    <div className="flex-col flex-1 max-md:w-full">
                        <p  className="font-bold">Disponibilité</p>
                        <p className="text-green-500 font-bold text-xl">Ouvert</p>
                        <hr className="w-[150px]"></hr>
                        <div className="flex gap-20 ">
                        <p>About</p>
                        <ArrowUpRightIcon  className="h-6 w-6 text-white"></ArrowUpRightIcon>
                        
                        </div>

                        </div>
                        
                    {/* </div> */}
                    <br/>
                    {/* <div className="max-md: flex max-md:flex-row max-md:w-full"> */}
                    <div className="flex-col flex-1 max-md:w-full">
                        <p  className="font-bold">Années d'experience</p>
                        <p className="text-green-500 font-bold text-xl">5 ans</p>
                        <hr className="w-[150px]"></hr>
                        <div className="flex gap-20 ">
                        <p>About</p>
                        <ArrowUpRightIcon  className="h-6 w-6 text-white"></ArrowUpRightIcon>
                        </div>
                    </div>
                    <br/>

                    <div className="flex-col flex-1 max-md:w-full">
                        <p className="font-bold">Adresse</p>
                        <p className="text-green-500 font-bold  ">Cöte d'ivoire, Abidjan </p>
                        <hr className="w-[160px]"></hr>
                        <div className="flex gap-20 ">
                        <p>Contact</p>
                        <ArrowUpRightIcon  className="h-6 w-6 text-white"></ArrowUpRightIcon>
                        </div>
                    </div>
                    </div>
               
               {/* </div> */}
              
              

                </Section>
            </header>
            
        )
    }