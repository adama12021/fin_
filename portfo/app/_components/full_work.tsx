
import Link from "next/link"
import { Section } from "./Section"
import { BriefcaseIcon , ArrowUpRightIcon, ComputerDesktopIcon, DocumentArrowDownIcon} from "@heroicons/react/16/solid"
export const Full_work =()=>
    {



        const Work: Exp[] = [




            {
                                            
                                                
                    tech:"python",
                    titre:'Analyse du personnel',
                    detail : "Consultant data analyst",
                    image:"images.jpeg"
                
            
            }
            ,

            {
        
                tech:"python",
                titre:'Analyse du personnel',
                detail : "Consultant data analyst",
                image:"images.jpeg"


                
            
            }
            ,
            {
        
                tech:"python, excel, power BI ",
                titre:'Analyse des ventes',
                detail : "Consultant data analyst",
                image:"images.jpeg"


            
            }
            ,

                {
                
                    tech:"python , powerBI ",
                    titre:'Dashboard Uber',
                    detail : "Consultant data analyst",
                    image:"images.jpeg"
                
                }
                ,

                {
                
                    tech:"python",
                    titre:'Analyse du personnel',
                    detail : "Consultant data analyst",
                    image:"images.jpeg"
                
                }
                ,
        
   

        
        
    
    ]

    type Exp ={
        tech : string,
        titre : string,
        detail : string ,
        image: string
        
        
    
    }


    
    const Parcours  = (props : Exp)=>{
        return (
            <div className="flex flex-row max-md:flex-col justify-between sm:mt-8">
            <div className="bg-white flex-1  sm:py-20">
                
            <img className=" w-full " src="/images/morflax-studio.PNG"/>
            </div>

            <div className="bg-gray flex-1 ">
            <div className=" sm:ml-20 ">
            <h1 className="text-7xl font-bold  max-md:ml-4  max-md:mt-6 text-red-500 ">
                {props.titre}
            </h1>
            <p className="max-md:ml-4 mt-2 text-black">
                {props.detail}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, officia esse! Itaque, eaque sed repellendus 
                enim eligendi vitae maiores reprehenderit necessitatibus aspernatur animi quo perspiciatis labore voluptate eius velit omnis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, officia esse! Itaque, eaque sed repellendus 
                enim eligendi vitae maiores reprehenderit necessitatibus aspernatur animi quo perspiciatis labore voluptate eius velit omnis!
            </p>
            <div className="flex flex-row max-md:ml-4  gap-3">
            <p className="mt-2 text-xl text-green-500">Techno: </p><p className="mt-2 text-xl ">{props.tech}</p>
            </div>
            


            <div className="flex flex-row mt-2 max-md:ml-4 max-md:mb-16 gap-3">
            <Link href="/Projet" className="text-2xl font-bold text-green-500 ">Fichier du projet  </Link><DocumentArrowDownIcon className="h-8 w-8 text-green-500"></DocumentArrowDownIcon>
            </div>
            

            </div>
            </div>
            </div>
            
        )
    }


        return(
            
               < Section className="flex  items-baselines ">
                <div className="flex flex-col w-full  ">
                    <h1 className="sm:text-8xl max-md:text-6xl text-white w-full font-bold max-md:ml-4"> <ComputerDesktopIcon className="sm:h-32 sm:w-32 max-md:h-16 sm:w-16 text-red-500 " ></ComputerDesktopIcon>Mes projets Réalisés</h1><br/>
                
                {
                    Work.map(
                        (Parcour, index) => (
                            <Parcours key={index}  titre={Parcour.titre} detail={Parcour.detail} image={Parcour.image} tech={Parcour.tech}></Parcours>
                        )
                    )
                }

               <br/>

              

              
                </div>

               </Section>

        

             )  }