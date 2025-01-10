
import Wave from 'react-wavify'
import { Section } from './Section'
import { X } from './icon/X'
import { Linkd } from './icon/Linkicon'
import { Facebook } from './icon/Fbicon'
import { Gmailicon } from './icon/Gmail'

export const Pied = () => {

    return( 

    < Section className="flex flex-col items-baselines justify-center">
   <Wave fill='#4ade80'
        paused={false}
        style={{ display: 'flex' }}
        options={{
          height: 80,
          amplitude: 20,
          speed: 0.35,
          points: 3
        }}
  >
    slslslsl
  </Wave>
  {/* Contenu à l'intérieur de la vague (optionnel) */}
  <div className='bg-green-400 flex max-md:flex-col justify-evenly h-[100px] max-md:h-[200px]'>
      <h1 className='text-black sm:text-xl max-md:ml-2 '>CAMARA ADAMA</h1>
      <div className='sm:mt-2 flex  justify-beetween max-md:ml-2  '>

        <div ><X size={20} color='black'></X></div>
        <div className='ml-3'><Linkd size={20} color='black'></Linkd></div>
        <div className='ml-3'>< Facebook size={20} color='transparent'></Facebook></div>
        <div className='ml-3'>< Gmailicon size={20} color='transparent' ></Gmailicon></div>
    
      
       </div>
      <h1 className='text-black max-md:ml-2 '>@copyright camara adama 2025</h1>
      
</div>

  </Section>)
}