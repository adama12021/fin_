
import Link from "next/link"
import { Section } from "./Section"
import { BriefcaseIcon , ArrowUpRightIcon, ArrowTrendingUpIcon} from "@heroicons/react/16/solid"
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
                    entreprise:'MTN CI / Simplon CI',
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

               

<article className="flex max-w-xl flex-col items-start justify-between">
<div className="flex items-center gap-x-4 text-xs">
  <h2 className="text-white">{props.date}</h2>
  <a href="#" className="rounded-full bg-white px-3 py-1.5 font-medium text-black font-bold hover:bg-green-500 text-xl transition duration-700 ease-in-out ">{props.post}</a>
</div>
<div className="">
  <h3 className="mt-3 text-lg/6 font-semibold text-green-500 group-hover:text-gray-600">
    <a href="#">
      <span className="absolute inset-0"></span>
      {props.entreprise}
    </a>
  </h3>
  <p className="mt-5 line-clamp-3 text-sm/6 text-white">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
</div>
{/* <div className="relative mt-8 flex items-center gap-x-4">
  <img src="" alt="" className="size-10 rounded-full bg-gray-50"/>
  <div className="text-sm/6">
    <p className="font-semibold text-gray-900">
      <a href="#">
        <span className="absolute inset-0"></span>
        Michael Foster
      </a>
    </p>
    <p className="text-gray-600">Co-Founder / CTO</p>
  </div>
</div> */}
</article>


                
        )
      }


        return(
            
            < Section className="flex  items-baselines justify-center">
                <div className="flex flex-col sm:w-full max-md:mt-2 ">
                    <h1 className="sm:text-8xl max-md:text-6xl text-white w-full font-bold max-md:ml-4"> 
                        <BriefcaseIcon className="sm:h-32 sm:w-32 max-md:h-16 sm:w-16 text-green-500 " ></BriefcaseIcon>Experience professionnel</h1><br/>
                
                                    
                <div className=" py-24 sm:py-24">
                <div className="max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl lg:mx-0">
                    <h2 className="text-pretty text-4xl font-semibold tracking-tight text-green-500 sm:text-5xl">Mes Experiences professionnelles</h2>
                    <div className="flex flex-row gap-4">
                    <p className="mt-2 text-lg/10 font-bold">Observer mon évolution au fil des experiences. </p><ArrowTrendingUpIcon className="sm:h-12 sm:w-12 max-md:h-6 sm:w-6 text-green-500 "></ArrowTrendingUpIcon>
                    </div>
                      </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    
                    
                    
                    
                     

                {
                                            Experiences.map(
                                                (parcour,index) =>(
                                                   <Parcours key={index} date={parcour.date} entreprise={parcour.entreprise} post={parcour.post} image={parcour.image}></Parcours>
                                                )
                                            )
                                        }
                

                        </div>
                    </div>
                    </div>
                    </div>
                </Section>
                )
                }


























             