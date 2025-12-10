import Image from "next/image";
import HeroSection from "@/app/components/hero";
import TouristHotspots from "@/app/components/cards";
import Link from "next/link";

export default function Home() {
  return (
 <>
 {/*=============== Hero Section ===================*/}
 <HeroSection />
 

 {/*=============== Dhola Sadiya Section ===================*/}
  <section className="w-full px-4 py-12 max-w-6xl mx-auto font-lato">
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-10 items-start">
        
        {/* TEXT SECTION */}
        <div>
          <h2 className="text-3xl md:text-4xl text-cyan-600 mb-4">
            Dhola Sadiya
            <div className="w-24 h-1 bg-gray-400 mt-2"></div>
          </h2>

          <p className="mb-4 text-gray-700">
            Dhola sadiya (<b>Bhupen Hazarika Setu</b>) bridge is the longest bridge
            amongst all the bridges in India, having the length of 9.5 kilo meters.
            This bridge reduces the travel distance between <Link href="https://en.wikipedia.org/wiki/Assam" rel="noopener noreferrer" target="_blank" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">Assam</Link> and <Link href="https://en.wikipedia.org/wiki/Arunachal_Pradesh" rel="noopener noreferrer" target="_blank" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">Arunachal
            Pradesh</Link> by four hours. This bridge is the result of strategic thoughts
            which is set to be inaugurated by the prime minister of India.
          </p>

          <p className="mb-4 text-gray-700">
            The Dhola–Sadiya Bridge is all set to become functional in 2017. It
            expands over the Lohit River to connect the two states of India namely,
            Assam and Arunachal Pradesh and is of 5.69 mi.
          </p>

          <p className="mb-4 text-gray-700">
            The construction of this bridge began in 2011 under the supervision of
            the Ministry of Road Transport and Highways in public private
            partnership in collaboration with, Navayuga Engineering Company Ltd.
            The bridge was initially set to become operational from December 2015,
            but due to delay in construction work the operation was delayed.
          </p>

          <Link href="/about-dhola-sadiya"  rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold underline font-medium mt-2">
            Read more ›
          </Link>
        </div>

        {/* IMAGE SECTION */}
        <div className="w-full">
          <Image
            src="/assets/hero2.jpg"  
            width={600}
            height={400}
            alt="Dhola Sadiya Bridge"
            className="rounded-md w-full h-auto object-cover border border-gray-300"
          />
        </div>
      </div>
    </section>


 {/*=============== Cards Section ===================*/}
 <TouristHotspots />


 {/*=============== Bridge highlights Section ===================*/}
  <section className="relative w-full py-16 md:py-24 font-lato">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/bg.gif"
          alt="Bridge Background"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center text-white">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold">
          Bridge Highlights
        </h2>
        <div className="w-20 h-1 bg-green-300 mx-auto mt-2 mb-4"></div>

        <p className="text-gray-200 mb-10">
          Here you can learn all the striking features of the Dhola Sadiya Bridge.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="backdrop-blur-md bg-white/30 border border-white/30 rounded-xl p-6">
            <h3 className="text-lg text-gray-100">Total Length</h3>
            <p className="text-3xl font-semibold mt-2 text-white">9.15 km</p>
            <div className="w-16 h-0.5 bg-green-300 mx-auto mt-3"></div>
          </div>

          {/* Card 2 */}
          <div className="backdrop-blur-md bg-white/30 border border-white/30 rounded-xl p-6">
            <h3 className="text-lg text-gray-100">No. Of Spans</h3>
            <p className="text-3xl font-semibold mt-2 text-white">183</p>
            <div className="w-16 h-0.5 bg-green-300 mx-auto mt-3"></div>
          </div>

          {/* Card 3 */}
          <div className="backdrop-blur-md bg-white/30 border border-white/30 rounded-xl p-6">
            <h3 className="text-lg text-gray-100">Width</h3>
            <p className="text-3xl font-semibold mt-2 text-white">12.9 m</p>
            <div className="w-16 h-0.5 bg-green-300 mx-auto mt-3"></div>
          </div>

          {/* Card 4 */}
          <div className="backdrop-blur-md bg-white/30 border border-white/30 rounded-xl p-6">
            <h3 className="text-lg text-gray-100">Reduction Of Travel</h3>
            <p className="text-3xl font-semibold mt-2 text-white">4 hours</p>
            <div className="w-16 h-0.5 bg-green-300 mx-auto mt-3"></div>
          </div>
        </div>
      </div>
    </section>



 {/*=============== Media Section ===================*/}
<section className="py-10">
  <div className="text-center mb-6">
    <h2 className="text-3xl md:text-4xl text-cyan-600 font-lato">Media</h2>
    <span className="block w-20 h-1 bg-gray-400 mx-auto mt-2"></span>
  </div>

  {/* Responsive grid */}
  <div className="grid grid-cols-1 md:grid-cols-5  px-4 lg:px-0">
    <Image 
      src="/assets/str1.jpg" 
      width={400} 
      height={400} 
      alt="media image" 
      className="w-full h-auto object-cover"
    />
    <Image 
      src="/assets/str2.jpg" 
      width={400} 
      height={400} 
      alt="media image" 
      className="w-full h-auto object-cover"
    />
    <Image 
      src="/assets/str3.jpg" 
      width={400} 
      height={400} 
      alt="media image" 
      className="w-full h-auto object-cover"
    />
    <Image 
      src="/assets/str4.jpg" 
      width={400} 
      height={400} 
      alt="media image" 
      className="w-full h-auto object-cover"
    />
    <Image 
      src="/assets/str5.jpg" 
      width={400} 
      height={400} 
      alt="media image" 
      className="w-full h-auto object-cover"
    />
  </div>
</section>
 
 </>
  );
}
