
import Link from "next/link"
import { Section } from "./Section"
import { BriefcaseIcon , ArrowUpRightIcon, AcademicCapIcon, CubeTransparentIcon } from "@heroicons/react/16/solid"
export const Parcour =()=>
    {



         //work
    const Par: Parcour[] = [




                                            {
                                                                            
                                                                                
                                                date:"2024",
                                                ecole:'Simplon CI',
                                                diplome : "certification data analyst"

                                                
                                            
                                            }
                                            ,

                                            {
                                        
                                            
                                                date:"2022 / 2023",
                                                diplome:'Licence professionel genie logiciel et sciences appliquées',
                                                ecole : "Groupe Cefiat Abidjan Plateau"
    
                                                
                                            
                                            }
                                            ,
                                            {
                                        
                                            
                                                date:"2021",
                                                diplome:'BTS (développement d"application)',
                                                ecole : "Groupe Cefiat Abidjan Plateau"
    
    
                                            
                                            }
                                            ,
    
                                                {
                                                
                                                    date:"2019",
                                                    diplome:'Baccalaureat  scientifique (D)',
                                                    ecole : "Lycée moderne adjamé harris"
                                                
                                                }
                                                ,
                                        
                                   

                                        
                                        
                                    
                                    ]

                                    type Parcour ={
                                        diplome : string,
                                        date : string,
                                        ecole : string ,
                                        
                                        
                                    
                                    }


      const Parcours  = (props : Parcour)=>{
        return (
            <tr>
            <td className=" px-4 py-2 sm:text-xl font-bold text-green-500 "> <CubeTransparentIcon className="w-6 h-6"></CubeTransparentIcon></td>
            <td className="px-4 py-2 sm:text-2xl text-green-500">{props.diplome}</td>
            <td className=" px-4 py-2 sm:text-xl">{props.date}</td>
            <td className=" px-4 py-2 sm:text-xl">{props.ecole}</td>
            </tr>
        )
      }

        
      return(


            
               < Section className="flex  items-baselines ">
                <div className="flex flex-col w-full max-md:mt-32 ">
                    <h1 className="sm:text-8xl max-md:text-6xl text-white w-full font-bold max-md:ml-4"> <AcademicCapIcon className="sm:h-32 sm:w-32 max-md:h-16 sm:w-16 text-green-500 " ></AcademicCapIcon>Mon parcour scolaire & universitaire</h1><br/>


                                <table className="table-auto  border border-green-700 w-full">
                                    <thead>
                                        <tr className="">
                                            <th></th>
                                        <th className=" text-2xl">Diplome & certification</th>
                                        <th className=" px-4 py-2 text-2xl">Années</th>
                                        <th className=" px-4 py-2 text-2xl">Ecoles / Structure</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Par.map(
                                                (parcour,index) =>(
                                                   <Parcours key={index} date={parcour.date} ecole={parcour.ecole} diplome={parcour.diplome}></Parcours>
                                                )
                                            )
                                        }
                                    </tbody>
                                    </table>

                                            

                                            </div>
                </Section>
        )}