/* eslint-disable @next/next/no-img-element */

export default function Benefit() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row px-12 md:px-20">
        <div className="md:w-1/4">
          <img src="/img/arts/3.png" className="rounded-xl" alt="" />
        </div>
        <div className="md:w-3/4 md:ml-24 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-5xl">
            Benefit by Holding Cyborg Ape
          </h1>
          <p className="mt-6 text-gray-500 text-sm md:text-base">
            By purchasing Cyborg Ape Genesis you will get free mint for every
            our derivative project that affiliated with Cyborg Ape! <br />
            <br /> You also get IP permission to all of our collection in the
            future, we will purchase MAYC and other project! <br />
            <br /> Every Cyborg Ape Holders will get free NFT that generated by
            Mutant Ape Yacht Club character! <br /> <br /> Grant access to many
            event only for holders and merch!
          </p>
        </div>
      </div>
    </>
  );
}