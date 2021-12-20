import React from 'react'
import Image from "next/image";

const Team = () => {
    return (
        <div>
            <section class="text-black body-font">
            <div className=" flex justify-center">
              <h1 className="px-5 py-5 rounded-xl border-[5px] border-pink-500 font-bold text-5xl text-pink-500">OUR TEAM</h1>
            </div>
  
  <div class="container px-5 py-15 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
     
     
      
    </div>
    <div class="flex flex-wrap -m-2">
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image alt="team" 
          class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-5" 
          src="/1.png" 
          width={75}
          height={75}  
          />
          <div class="flex-grow">
            <h2 class="ml-2 text-gray-900 title-font font-medium">Umer Arif</h2>
            <p class="text-gray-500 ml-2">CEO</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <Image alt="team" 
          class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" 
          src="/2.png" 
          width={75}
          height={75}  
          />
          <div class="flex-grow">
            <h2 class="ml-2 text-gray-900 title-font font-medium">Sami Awan</h2>
            <p class="ml-2 text-gray-500">Graphic Designer</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <Image alt="team" 
          class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" 
          src="/3.png" 
          width={75}
          height={75}  
          />
          <div class="flex-grow">
            <h2 class="ml-2 text-gray-900 title-font font-medium">Abdul Muqeet</h2>
            <p class="ml-2 text-gray-500">Marketing Manager</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>
        </div>
    )
}

export default Team
