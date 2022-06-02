import Hero from '../components/Hero'
import Largecard from '../components/Largecard'
import Smallcard from '../components/Smallcard'
import ofm from '../public/assets/0fm.webp'
import home from '../public/assets/2io.webp'
import pet from '../public/assets/8ix.webp'
import boat from '../public/assets/q7j.webp'
import hut from '../public/assets/s03.webp'
import Mediumcard from '../components/Mediumcard'

import shared from '../public/assets/share.jpg'
import feel from '../public/assets/feel.jpg'
import online from '../public/assets/online.jpg'



export default function Home() {
  return (
    <>
     <Hero />
     <main className='max-w-7xl mx-auto px-8 sm:px-16'>
     <section className="pt-6">
     <h2 className='text-xl font-bold'>Explore Nearby</h2>
         <Smallcard />
     </section>
    <Largecard img={ofm} title="Not sure where to go perfect" buttontext="i'm flexible"/>
     <section >
       <h2 className="font-bold text-xl">Live Anywhere</h2>
       <div className='flex space-x-3 rounded-xl overflow-scroll scrollbar-hide p-3 -ml-3'>
       <Mediumcard img={home} title="outdoor gateways"/>
        <Mediumcard img={boat} title="Unique Stays"/>
        <Mediumcard img={hut} title="Entire Home"/>
        <Mediumcard img={pet} title="Pets allowed"/>
       </div>
        
      </section>

      <section >
          <div className='flex space-x-3 rounded-xl overflow-scroll scrollbar-hide p-3 -ml-3'>
            <h2>Discover Experiences</h2>
            <p>unique activities with local experts--in person</p>
          <Mediumcard img={shared} title="outdoor gateways"/>
        <Mediumcard img={feel} title="Unique Stays"/>
        <Mediumcard img={online} title="Entire Home"/>
        
          </div>
        
      </section>

     </main>
    
    </>
  )
}
