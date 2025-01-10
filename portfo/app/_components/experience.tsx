
import Link from "next/link"
import { Section } from "./Section"
import { BriefcaseIcon , ArrowUpRightIcon} from "@heroicons/react/16/solid"
export const Experience =()=>
    {

        const Experiences: Exp[] = [




            {
                                            
                                                
                date:"3 mois",
                entreprise:'Desps',
                post : "developpeur web",
                image:"logodesps.png"

                
            
            }
            ,

            {
        
            
                date:"03 mois",
                entreprise:'Fitdev',
                post : "developpeur web",
                image:""


                
            
            }
            ,
            {
        
            
                date:"1 ans",
                entreprise:'Les aladdins',
                post : "data analyst",
                image:"aladdins.png"



            
            }
            ,

                {
                
                    date:"09 mois",
                    entreprise:'Simplon CI/ MTN CI',
                    post : "data analyst",
                    image:"MTN-CI.jpg"
    
                
                }
                ,

                {
                
                    date:"---",
                    entreprise:'Simplon CI',
                    post : "Consultant data analyst",
                    image:"images.jpeg"
    
                
                }
                ,
        
   

        
        
    
    ]

    type Exp ={
        entreprise : string,
        date : string,
        post : string ,
        image: string
        
        
    
    }


   
    const Parcours  = (props : Exp)=>{
        return (
            <div className="max-md:flex max-md: flex-1 ml-4 mr-4 sm:py-20 sm:h-10  max-md:mt-5 max-md:mb-5   ">
                    
                    <img className=" sm:w-full max-md:w-40 " src={`/images/entreprise/${props.image}`} />
                    <div className="max-md:ml-10 max-md:flex max-md:flex-col">
                    <h1 className="text-green-500 font-bold sm:text-2xl">{props.entreprise} </h1>
                    <h1 >{props.date} </h1>
                    <h1 className="font-bold">{props.post} </h1>
                    </div>
                    
                </div>
        )
      }


        return(
            
               < Section className="flex  items-baselines  ">
                <div className="flex flex-col sm:w-full max-md:mt-[300px] mb-20 ">
                    <h1 className="sm:text-8xl max-md:text-6xl text-white w-full font-bold max-md:ml-4"> <BriefcaseIcon className="sm:h-32 sm:w-32 max-md:h-16 sm:w-16 text-green-500 " ></BriefcaseIcon>Experience professionnel</h1><br/>
                
                <div className="flex  max-md:flex-col justify-between">

                {
                                            Experiences.map(
                                                (parcour,index) =>(
                                                   <Parcours key={index} date={parcour.date} entreprise={parcour.entreprise} post={parcour.post} image={parcour.image}></Parcours>
                                                )
                                            )
                                        }
                </div><br/>
                </div>
                </Section>
                )}
