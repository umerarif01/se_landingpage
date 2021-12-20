import React from 'react'
import Image from "next/image";
import { SocialIcon } from 'react-social-icons';
import 'animate.css';


const Hero = () => {
    return (
        <div>
          <div className='animate__animated animate__fadeInUp'>
           <section className="body-font">
           {/* <div className='pb-[10px]' />         */}
          
<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

      <h1 className="title-font lg:text-[90px] 2xl:text-[125px] sm:text-[70px] md:text-[70px] text-6xl mb-4 font-bold 
      bg-gradient-to-r from-purple-700 via-purple-400 to-pink-500 text-transparent bg-clip-text">
          Scary Eyes NFT Collection
      </h1>
      <p className="mb-8 text-gray-700 leading-relaxed text-xl 2xl:mb-4">
      Scary Eyes is a collection of NFTs - unique digital collectibles, blinking on the Ethereum Blockchain. 
      50 eyes have been programmatically generated from an ocean of combinations, each with unique characteristics and different traits.</p>

<div class="justify-center">
        <div className='animate__animated animate__fadeInUp'></div>
        <a href='https://testnets.opensea.io/collection/scaryeye' target="_blank">
        <div className="flex bg-purple-700  text-white
         text-xl font-semibold rounded-full py-5 px-10 
         hover:bg-purple-500 transition duration-150 ease-out hover:ease-in
         ">
        <p className ="pr-2">Buy on OpenSea</p>
        <Image 
            className='rounded-xl '
            width={30}
            height={30}
            src='/opensea.png'
            />         
        </div>
        </a>
          
         <div className='flex p-5  space-x-10 '>
         <SocialIcon url="https://twitter.com/umerarif01" />
         <SocialIcon url="https://instagram.com/umerarif01" />
         <SocialIcon url="https://discord.gg/4uaVVXvs" />
             </div> 
                    
</div>
</div>

<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
      <div className='grid grid-cols-3 gap-6'>
      <Image className="object-cover object-center rounded-lg" 
      alt="hero" 
      src="/1.png" 
      width={720}
      height={720}/>
      <Image className="object-cover object-center rounded-lg" 
      alt="hero" 
      src="/2.png" 
      width={720}
      height={720}/>
      <Image className="object-cover object-center rounded-lg" 
      alt="hero" 
      src="/3.png" 
      width={720}
      height={720}/>
      <Image className="object-cover object-center rounded-lg" 
      alt="hero" 
      src="/4.png" 
      width={720}
      height={720}/>
      <Image className="object-cover object-center rounded-lg" 
      alt="hero" 
      src="/5.png" 
      width={720}
      height={720}/>
      <Image className="object-cover object-center rounded-lg" 
      alt="hero" 
      src="/6.png" 
      width={720}
      height={720}/>
       <Image className="object-cover object-center rounded-lg" 
      alt="hero" 
      src="/7.png" 
      width={720}
      height={720}/>
       <Image className="object-cover object-center rounded-lg" 
      alt="hero" 
      src="/8.png" 
      width={720}
      height={720}/>
       <Image className="object-cover object-center rounded-lg" 
      alt="hero" 
      src="/9.png" 
      width={720}
      height={720}/>
      </div>
    </div>
  </div>
</section>
</div>
        </div>
    )
}

export default Hero
