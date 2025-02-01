import { Section } from "./Section";
import Image from "next/image";
import { BriefcaseIcon , ArrowUpRightIcon, AcademicCapIcon, ArrowRightIcon, ArrowDownIcon, ChevronDoubleRightIcon} from "@heroicons/react/16/solid"
// import Type from "./type";




export const Hero = ()=>
    {
        return (
            <Section className="flex max-md:flex-col flex items-baselines justify-center">
                

                {/* items-start gap-4 justify-between w-full */}
               
               <div className="flex max-md:flex-col justify-between w-full h-[450px] ">

               <div className="flex-[2] max-md:flex max-md:justify-center m-auto  h-full w-full">
                    
                    <img src="/images/IMG_9222.JPEG" className="w-full h-full max-w-xs max-md:w-[250PX] rounded-lg" alt="BRADY" />
                </div>
                <div className="flex-[3] max-md:mt-10 flex flex-col  justify-between  ">
                     <h3 className="text-5xl max-md:ml-4  text-black text-bold font-caption">
                               Qui suis-je ?
                    </h3> 
                    
                
                    <p className="text-xl sm:mr-10 text-[#F24F13]  max-md:mt-5 max-md:ml-4 max-md:flex max-md:justify-center ">
                        Extremement motivé pour dévélopper constament mes compétences et évoluer professionnellement.
                        Je suis confiant dans ma capacité à proposer des idées intéressantes qui seront favorable au developpement économique de l'entreprise.
                    </p>


                    <div className="flex-col justify-evenly max-md:mt-5 ">
                        <div className="flex justify-between mr-20">
                       <div className="flex flex-col max-md:ml-4 ">
                        <div className="flex flex-row justify-center ">  <ChevronDoubleRightIcon  className="h-8 w-8 text-[#F24F13]"></ChevronDoubleRightIcon> <p className="text-2xl   text-black   hover:text-[#F24F13] ml-5 max-md:text-2xl hover:text-3xl  hover:transition duration-700 ease-in-out"> Data analyst</p></div>
                        
               
                       </div>

                       <div className="flex flex-col max-md:ml-4 ">
                        <div className="flex flex-row justify-center ">  <ChevronDoubleRightIcon  className="h-8 w-8 text-[#F24F13]"></ChevronDoubleRightIcon> <p className="text-2xl text-black   hover:text-[#F24F13] ml-5 max-md:text-2xl hover:text-3xl  hover:transition duration-700 ease-in-out">Business analyst</p></div>
                        
               
                       </div>

                       </div>

                       <div className="flex justify-between mr-20 mt-5">
                       <div className="flex flex-col max-md:ml-4 ">
                        <div className="flex flex-row justify-center ">  <ChevronDoubleRightIcon  className="h-8 w-8 text-[#F24F13]"></ChevronDoubleRightIcon> <p className="text-2xl max-md:text-2xl  text-black   hover:text-[#F24F13] ml-5 hover:text-3xl hover:transition  duration-700 ease-in-out">Web developper</p></div>
                        
               
                       </div>

                       

                       </div>
                    </div>

                    <div className="flex  mr-20 max-md:ml-4  max-md:mt-5">

                        <a href="#" className="bg-[#F24F13] hover:bg-black hover:text-[#F24F13] text-white font-bold py-2 px-4 rounded  transition duration-700 ease-in-out" >CV <ArrowDownIcon  className="h-4 w-4"></ArrowDownIcon></a>
                    </div>

                </div>
              
              

                </div>
             
            </Section>
        )
    }