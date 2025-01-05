
import Link from "next/link"
import { Section } from "./Section"
import { BriefcaseIcon , ArrowUpRightIcon} from "@heroicons/react/16/solid"
export const Work =()=>
    {
        return(
            
               < Section className="flex  items-baselines ">
                <div className="flex flex-col w-full max-md:mt-32 ">
                    <h1 className="sm:text-8xl max-md:text-6xl text-white w-full font-bold max-md:ml-4"> <BriefcaseIcon className="sm:h-32 sm:w-32 max-md:h-16 sm:w-16 text-green-500 " ></BriefcaseIcon>Mes projets</h1><br/>
                
                <div className="flex flex-row max-md:flex-col justify-between">
                <div className="bg-white flex-1  sm:py-20">
                    
                <img className=" w-full" src="/images/morflax-studio.PNG"/>
                </div>

                <div className="bg-gray flex-1 ">
                <div className=" sm:ml-20 ">
                <h1 className="text-7xl font-bold  max-md:ml-4  max-md:mt-6 text-green-500 ">
                    Dashboard
                </h1>
                <p className="hover:text-green-500 max-md:ml-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, officia esse! Itaque, eaque sed repellendus 
                    enim eligendi vitae maiores reprehenderit necessitatibus aspernatur animi quo perspiciatis labore voluptate eius velit omnis!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, officia esse! Itaque, eaque sed repellendus 
                    enim eligendi vitae maiores reprehenderit necessitatibus aspernatur animi quo perspiciatis labore voluptate eius velit omnis!
                </p>
                <div className="flex flex-row mt-10 max-md:ml-4 ">
                <Link href="/">en savoir plus  </Link><ArrowUpRightIcon className="h-6 w-6 text-green-500"></ArrowUpRightIcon>
                </div>
                

                </div>
                </div>
                </div><br/>

                <div className="flex flex-row justify-between max-md:flex-col max-md:flex-reverse">
                <div className="bg-gray flex-1">
                <div className="sm:mr-20 ">
                <h1 className="text-7xl font-bold  text-green-500 max-md:ml-4">
                    Dashboard
                </h1>
                <p className="hover:text-green-500 max-md:ml-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, officia esse! Itaque, eaque sed repellendus 
                    enim eligendi vitae maiores reprehenderit necessitatibus aspernatur animi quo perspiciatis labore voluptate eius velit omnis!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, officia esse! Itaque, eaque sed repellendus 
                    enim eligendi vitae maiores reprehenderit necessitatibus aspernatur animi quo perspiciatis labore voluptate eius velit omnis!
                </p>

                <div className="flex flex-row mt-10 max-md:ml-4">
                <Link href="/">en savoir plus  </Link><ArrowUpRightIcon className="h-6 w-6 text-green-500"></ArrowUpRightIcon>
                </div>
                    
                
                </div>
                </div>

                <div className="bg-white   m-auto  flex-1 v py-24 sm:py-20">
                <img className=" w-full" src="/images/morflax-studio.PNG"/>
                    
                
                </div>
                </div>
                

                <div className="flex flex-row mt-10">
                <Link href="/" className="text-2xl text-gray-500 hover:text-green-500">Voir plus  de projet... </Link><ArrowUpRightIcon className="h-8 w-8 text-green-500"></ArrowUpRightIcon>
                </div>

                </div>

               </Section>

        

             )  }