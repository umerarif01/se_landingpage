import React from 'react'
import Image from "next/image";

const Roadmap = () => {
    return (
        <div>
            <div className=" flex justify-center">
              <h1 className="px-5 py-5 rounded-xl border-[5px] border-purple-600 font-bold text-5xl text-purple-600">ROADMAP</h1>
            </div>
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm">1</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <Image className = "rounded-full" 
          src = "/3.png"
          width = {100}
          height = {100}
          />
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">STAGE 1 - Pre-Mint Launch</h2>
          <p class="leading-relaxed">Community building & using organic marketing tactics to spread the word about the Scary Eyes project.</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm">2</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
        <Image className = "rounded-full" 
          src = "/1.png"
          width = {100}
          height = {100}
          />
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">STAGE 2 - Mint</h2>
          <p class="leading-relaxed">30+ ETH reserved for Partnerships, Hires, and Marketing Campaigns.</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm">3</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-purple-500 rounded-full inline-flex items-center justify-center">
        <Image className = "rounded-full" 
          src = "/7.png"
          width = {100}
          height = {100}
          />
            <circle cx="12" cy="5" r="3"></circle>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">STAGE 3 - The Eyes Begins their Reign</h2>
          <p class="leading-relaxed">7 Days after mint we start reinvesting royalties into bringing more hype to the already sold out project.</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm">4</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-purple-500 rounded-full inline-flex items-center justify-center">
        <Image className = "rounded-full" 
          src = "/5.png"
          width = {100}
          height = {100}
          />
            <circle cx="12" cy="7" r="4"></circle>
          
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">STAGE 4 - Expansion (2022 & Beyond)</h2>
          <p class="leading-relaxed">Continue To Operate & Push The Scary Eyes Brand Relentlessly.</p>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}

export default Roadmap
