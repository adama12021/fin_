import { Section } from "./Section";
import Image from "next/image";
// import Type from "./type";




export const Hero = ()=>
    {
        return (
            <Section className="flex max-md:flex-col flex items-baselines justify-center">
                

                {/* items-start gap-4 justify-between w-full */}
               
               <div className="flex max-md:flex-col justify-between w-full h-[450px]">

               <div className="flex-[2] max-md:flex max-md:justify-center m-auto  h-full w-full">
                    
                    <img src="/images/IMG_9222.JPEG" className="w-full h-full max-w-xs max-md:w-[250PX] rounded-lg" alt="BRADY" />
                </div>
                <div className="flex-[3] max-md:mt-10 flex flex-col  justify-between  ">
                    {/* <h3 className="text-2xl text-green-500 font-caption">
                   <Type></Type>
                    </h3> */}
                    
                
                    <p className="text-xl sm:mr-10  max-md:ml-4 max-md:flex max-md:justify-center ">
                        Extremement motivé pour dévélopper constament mes compétences et évoluer professionnellement.
                        Je suis confiant dans ma capacité à proposer des idées intéressantes qui seront favorable au developpement économique de l'entreprise.
                    </p>


                    <div className="flex-col justify-evenly ">
                        <div className="flex justify-between mr-20">
                       <div className="flex flex-col max-md:ml-4 ">
                        <p className="text-5xl max-md:text-3xl text-gray-500  hover:text-white">Projet</p>
                        <p className="text-3xl max-md:text-xl text-green-500">100+</p>
                       </div>

                       <div className="flex flex-col ">
                       <p className="text-5xl max-md:text-3xl text-gray-500  hover:text-white">Projet</p>
                       <p className="text-3xl max-md:text-xl text-green-500">100+</p>
                       </div>

                       </div>

                       <div className="flex justify-between mr-20">
                       <div className="flex flex-col max-md:ml-4">
                       <p className="text-5xl max-md:text-3xl text-gray-500  hover:text-white">Projet</p>
                       <p className="text-3xl max-md:text-xl text-green-500">100+</p>
                       </div>

                       <div className="flex flex-col ">
                       <p className="text-5xl max-md:text-3xl text-gray-500  hover:text-white">Projet</p>
                       <p className="text-3xl max-md:text-xl text-green-500">100+</p>
                       </div>

                       </div>
                    </div>

                </div>
              
              

                </div>
             
            </Section>
        )
    }