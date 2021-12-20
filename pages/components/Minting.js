import React from 'react'
import Image from "next/image";


const Minting = () => {
    return (
        <div>
            <section class="body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image className=" object-cover object-center rounded" 
      alt="hero" 
      src="/9.png"
      width={412}
      height={412}/>
    </div>
    <div class=" 2xl:flex-grow lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class=" title-font sm:text-7xl text-3xl mb-2 font-bold 
      text-lime-400
      ">
          Minting is Live now! 🚀
        
      </h1>
      <p class= "text-gray-700 mt-5 text-2xl mb-8 leading-relaxed">Go to our exclusive Minting Dapp before it's too late</p>
      <div class="flex justify-center">
      <a href='https://scaryeyesmintingdapp.netlify.app/' target="_blank">
        <button class="inline-flex bg-purple-700  text-white
         text-xl font-semibold rounded-full py-5 px-10 
         hover:bg-purple-500 transition duration-150 ease-out hover:ease-in">Minting Dapp 🔥</button>
        </a>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}

export default Minting



