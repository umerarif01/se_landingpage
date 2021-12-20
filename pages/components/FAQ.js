import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const FAQ = () => {
    return (
        <div>
            <div className='my-10' />
            
            <div className=" flex justify-center">
              <h1 className="my-8 px-5 py-5 rounded-xl border-[5px] border-green-500 font-bold text-5xl text-green-500">FAQ</h1>
            </div>
            
            <div className=' flex justify-center  font-semibold'>
            <Accordion preExpanded={'a'}>
            <AccordionItem uuid="a">
                <AccordionItemHeading>
                    <AccordionItemButton >
                    How many Scary Eyes are there?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className=' text-purple-500'>
                    There is a fixed max supply of 50 Scary Eyes. A competitive quantity!
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How much do they cost to mint?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className=' text-purple-500'>
                    During the early-bird presale, each Scary Eyes will cost 0.02 ETH to mint. During normal presale, they will cost 0.09 ETH. During public sale, they will cost 0.1 ETH.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What wallets can I use to mint?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className=' text-purple-500'>
                    You will ONLY be able to use MetaMask to mint! Make sure you have enough funds for the mint price + gas in your MetaMask wallet on minting day.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Why buy a Scary Eyes?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className=' text-purple-500'>
                    The Scary Eyes are an incredible collection of NFTs that not only provide their holders with insane utility, but also provide access to an amazing community full of like-minded individuals.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
      
           </div>
        </div>
    )
}

export default FAQ
