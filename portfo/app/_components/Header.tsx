'useclient'
import Link from "next/link"
import { Section } from "./Section"
import { useEffect , useState} from "react";
useEffect
export const Header =()=>
    {

        const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 350); // Changez 0 si besoin (par ex. hauteur d'une section au dessus du header)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


        return(
            <header className={`sticky     top-0 py-4 transition-colors duration-300 ${ isSticky ? 'bg-[#F24F13]' : 'bg-transparent' } `}> 
               < Section className="flex items-baselines justify-center">
               

               <ul className="bg-accent rounded-xl p-2 flex items-center justify-between w-full ">

                <Link href="/" className={`flex-1 hover:text-black text-2xl ${ isSticky ? 'hover:text-black' : 'text-white' }`} >Acceuil</Link>
                <Link href="/About" className={`flex-1 hover:text-black text-2xl ${ isSticky ? 'hover:text-black' : 'text-white' }`} >About</Link>
                <Link href="/Projet" className={`flex-1 hover:text-black text-2xl ${ isSticky ? 'hover:text-black' : 'text-white' }`} >Projets</Link>
                <Link  href="/Technologie" className={`flex-1 hover:text-black text-2xl ${ isSticky ? 'hover:text-black' : 'text-white' }`} >Technologies</Link>
               </ul>
              
              

                </Section>
            </header>
            
        )
    }