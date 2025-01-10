
import Link from "next/link"
import { Section } from "./Section"
import { BriefcaseIcon , ArrowUpRightIcon , ChatBubbleLeftRightIcon} from "@heroicons/react/16/solid"
export const Contact =()=>
    {
        return(
            
               < Section className="flex  items-baselines ">
                <div className="flex flex-col w-full max-md:mt-20 ">
                    <h1 className="sm:text-8xl max-md:text-6xl text-white w-full font-bold max-md:ml-4"> <ChatBubbleLeftRightIcon className="sm:h-32 sm:w-32 max-md:h-16 sm:w-16 text-green-500 " ></ChatBubbleLeftRightIcon>Restons en <h2 className="text-green-500">contact</h2></h1><br/>
         

                </div>

               </Section>

        

             )  }