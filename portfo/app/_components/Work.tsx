
import Link from "next/link"
import { Section } from "./Section"
export const Work =()=>
    {
        return(
            
               < Section className="flex  items-baselines ">
                <div className="flex flex-col w-full ">
                    <h1 className="text-8xl text-green-500">My work</h1><br/>
                
                <div className="flex flex-row justify-between">
                <div className="bg-white flex-1  sm:py-20">
                    
                <img className=" w-full" src="/images/morflax-studio.PNG"/>
                </div>

                <div className="bg-gray flex-1 ">
                <div className="ml-20 hover:font-bold ">
                <h1 className="text-7xl ">
                    Dashboard
                </h1>
                <p className="hover:text-green-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, officia esse! Itaque, eaque sed repellendus 
                    enim eligendi vitae maiores reprehenderit necessitatibus aspernatur animi quo perspiciatis labore voluptate eius velit omnis!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, officia esse! Itaque, eaque sed repellendus 
                    enim eligendi vitae maiores reprehenderit necessitatibus aspernatur animi quo perspiciatis labore voluptate eius velit omnis!
                </p>

                </div>
                </div>
                </div><br/>

                <div className="flex flex-row justify-between">
                <div className="bg-gray flex-1">
                <div className="mr-20 hover:text-green-500">
                <h1 className="text-7xl">
                    Dashboard
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, officia esse! Itaque, eaque sed repellendus 
                    enim eligendi vitae maiores reprehenderit necessitatibus aspernatur animi quo perspiciatis labore voluptate eius velit omnis!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, officia esse! Itaque, eaque sed repellendus 
                    enim eligendi vitae maiores reprehenderit necessitatibus aspernatur animi quo perspiciatis labore voluptate eius velit omnis!
                </p>
                    
                
                </div>
                </div>

                <div className="bg-white flex-1 v py-24 sm:py-20">
                <img className=" w-full" src="/images/morflax-studio.PNG"/>
                    
                
                </div>
                </div>
                

                </div>

               </Section>

        

             )  }