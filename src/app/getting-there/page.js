import Image from "next/image"
import Link from "next/link"


const page = () => {
  return (
    <>
    {/*================ intro section ================*/}
    <section className="py-16 px-4 sm:px-6 lg:px-8 font-lato">
        <div className="max-w-5xl mx-auto">
            <h2 className="font-lato text-3xl md:text-4xl text-cyan-600 mb-2 mt-16 text-center">Reaching Dhola Sadiya</h2>
            <div className="w-24 h-1 bg-gray-400 mx-auto mt-1"></div>

             <p className="mt-6 font-lato leading-7 text-gray-700">
          Sadiya dhola bridge has gained too much limelight because it is the longest bridge in the country or India’s longest bridge having the length of 9.5 km. Built over the renowned <Link href="https://en.wikipedia.org/wiki/Brahmaputra_River" rel="noopener noreferrer" target="_blank" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">Brahmaputra,</Link> this bridge is connecting two states of our very own nation, respectively Dhola, Assam and Sadiya, Arunachal Pradesh. If you want to move from one state to another, then this bridge will lead you to reach your <Link href="/destinations" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">destination</Link> four hours earlier than expected time. You can travel across the states with your own vehicle or through road, public transport, air transport, etc. This bridge is set to be functional in 2017.  
        </p>
        </div>
    </section>

    {/*=============== Travel section ===============*/}
       <section className="w-full max-w-6xl mx-auto px-4 md:px-10 lg:px-20 py-10 font-lato">
      
      {/* ================= AIR TRAVEL ================= */}
      <div className="flex flex-col md:flex-row items-center lg:items-start gap-6 mb-16">
        {/* Icon */}
        <div className="w-32 md:w-48 flex-shrink-0">
          <Image
            src="/assets/air-travel.jpg"  
            alt="Air Travel"
            width={200}
            height={200}
            className="w-full h-auto"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Air Tavel</h2>
          <div className="w-14 h-1 bg-cyan-600 mb-4"></div>

          <p className="text-gray-700 mb-3">
            The nearest airport <span className="text-blue-600">Dibrugarh</span>,
            the capital of Assam will become easily accessible, and all thanks goes to the bridge.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-cyan-600 text-xl">◆</span>
              You can travel across the two states using air transport mode.
            </li>

            <li className="flex items-start gap-2">
              <span className="text-cyan-600 text-xl">◆</span>
              Capture the beauty of these states by flying there.
            </li>
          </ul>
        </div>
      </div>

      {/* ================= TRAIN TRAVEL ================= */}
      <div className="flex flex-col md:flex-row items-center lg:items-start gap-6 mb-16">
        <div className="w-32 md:w-48 flex-shrink-0">
          <Image
            src="/assets/train-travel.png"
            alt="Train Travel"
            width={200}
            height={200}
            className="w-full h-auto"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Train Travel</h2>
          <div className="w-14 h-1 bg-cyan-600 mb-4"></div>

          <p className="text-gray-700 mb-3">
            People of Arunachal Pradesh can reach the nearest Railway Station Tinsukia
            easily and credit goes to the bridge.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-cyan-600 text-xl">◆</span>
              Travel across these two states to get the glimpse of nature being nurtured.
            </li>

            <li className="flex items-start gap-2">
              <span className="text-cyan-600 text-xl">◆</span>
              Observe the customs and traditions of people residing on the bank of mighty 
              <span className="text-blue-600 ml-1">Brahmaputra</span>.
            </li>
          </ul>
        </div>
      </div>

      {/* ================= BUS TRAVEL ================= */}
      <div className="flex flex-col md:flex-row items-center lg:items-start gap-6 mb-16">
        <div className="w-32 md:w-48 flex-shrink-0">
          <Image
            src="/assets/bus-travel.png"
            alt="Bus Travel"
            width={200}
            height={200}
            className="w-full h-auto"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Bus Travel</h2>
          <div className="w-14 h-1 bg-cyan-600 mb-4"></div>

          <p className="text-gray-700 mb-3">
            It will bolster the road connectivity in the Northeast as the bridge will be
            used by people of Assam and Arunachal Pradesh besides.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-cyan-600 text-xl">◆</span>
              Bus travel is economical.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-600 text-xl">◆</span>
              These buses will take you wherever you want to be.
            </li>
          </ul>
        </div>
      </div>

      {/* ================= ROAD TRAVEL ================= */}
      <div className="flex flex-col md:flex-row items-center lg:items-start gap-6">
        <div className="w-32 md:w-48 flex-shrink-0">
          <Image
            src="/assets/car-travel.png"
            alt="Road Travel"
            width={200}
            height={200}
            className="w-full h-auto"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Road Travel</h2>
          <div className="w-14 h-1 bg-cyan-600 mb-4"></div>

          <p className="text-gray-700 mb-3">
            Your Travel Plan Starts at Tinsukia, Assam, India. It Ends at Dhola Sadiya Bridge,
            Purana Sadiya, Assam 786155, India.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-cyan-600 text-xl">◆</span>
              Enjoy the slow ride and capture the memories while traveling in these states.
            </li>

            <li className="flex items-start gap-2">
              <span className="text-cyan-600 text-xl">◆</span>
              Witness the best of India’s cultures by traveling across Dhola Sadiya.
            </li>
          </ul>
        </div>
      </div>

    </section>


    {/*================ Bridge Features =================*/}
         <section className="relative w-full py-16 md:py-24 font-lato">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/bg.gif" 
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center text-white">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold">
          Bridge Features at a Glance
        </h2>
        <div className="w-20 h-1 bg-cyan-600 mx-auto mt-2 mb-10"></div>

        {/* Glass Background for Bullet Points */}
        <div className="backdrop-blur-lg bg-white/30 border border-white/20 rounded-xl p-8 md:p-10">

          {/* Bullet Points Grid */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <li className="flex gap-3">
              <span className="text-cyan-600 text-xl">•</span>
              <p>India is getting developed at more fast pace than ever and the construction of the India’s longest bridge, connecting Assam and Arunachal Pradesh, is the proof of that.</p>
            </li>

            <li className="flex gap-3">
              <span className="text-cyan-600 text-xl">•</span>
              <p>Being constructed over the river Brahmaputra, this bridge has the length of 9.56 kms and it reduces the gap between these two states mentioned above, considerably.</p>
            </li>

            <li className="flex gap-3">
              <span className="text-cyan-600 text-xl">•</span>
              <p>It was expected to be operational a lot earlier but due to delays in construction, Dhola Sadiya – India’s longest bridge is inaugurated in 2017.</p>
            </li>

            <li className="flex gap-3">
              <span className="text-cyan-600 text-xl">•</span>
              <p>This bridge is being constructed in the partnership of Ministry of Road Transport and Highways with, Navayuga Engineering Company Ltd.</p>
            </li>

            <li className="flex gap-3">
              <span className="text-cyan-600 text-xl">•</span>
              <p>This bridge is a relief for those who have to travel between these two places, frequently.</p>
            </li>

            <li className="flex gap-3">
              <span className="text-cyan-600 text-xl">•</span>
              <p>This bridge is a connectivity that opens your gate for exploring this part of the country, even more easily.</p>
            </li>

            <li className="flex gap-3">
              <span className="text-cyan-600 text-xl">•</span>
              <p>This bridge owns a width of 12.9 meters, now you can only imagine how gigantic Dhola sadiya is going to be.</p>
            </li>

            <li className="flex gap-3">
              <span className="text-cyan-600 text-xl">•</span>
              <p>The number of spans in the India’s largest bridge are 183.</p>
            </li>
          </ul>

        </div>
      </div>
    </section>

    </>
  )
}

export default page