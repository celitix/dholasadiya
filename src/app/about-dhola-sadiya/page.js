import Image from "next/image";
import Link from "next/link";


const page = () => {

 const tableData = [
    { label: 'Name of the Bridge', value: 'Annai Indira Gandhi Bridge' },
    { label: 'Commonly referred Names', value: 'Indhira Gandhi Bridge Pamban Bridge Pamban Road Bridge' },
    { label: 'Opened on', value: '2nd October 1988' },
    { label: 'Structural Design', value: 'Arch Bridge' },
    { label: 'Length Of Pamban Bridge', value: '2,345 KM' },
    { label: 'Lane', value: 'Two Lane' },
    { label: 'Region', value: 'Over The Palk Strait' },
    { label: 'Location', value: '28°24\'16.7"N 79.188922°E' },
    { label: 'Number Of Pillars (Piers) Holding Bridge', value: '79 Pillars' },
    { label: 'Number Of Pillars (Piers) Stands Inside Sea', value: '64 Pillars' },
    { label: 'Maximum Height Of Bridge From Sea Level', value: '17.68 M' },
    { label: 'Connecting Places', value: 'Mandapam & Pamban' },
  ];


  return (
    <>
 
{/* =================The Bridge of Hope Section =================*/}
    <section className="w-full px-4 py-16 bg-white font-lato">
  
  <h2 className="font-lato text-cyan-600 text-center text-3xl md:text-4xl mt-12 mb-6">Dhola sadiya - The Bridge Of Hope</h2>
  <div className="w-24 h-1 bg-gray-400 mx-auto mb-8"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start font-lato subpixel-antialiased">


        {/* LEFT IMAGE */}
        <div className="w-full">
          <Image
            src="/assets/hero3.jpg"   
            width={900}
            height={700}
            alt="Dhola Sadiya Bridge"
            className="rounded-md w-full h-auto object-cover"
          />
        </div>

        {/* RIGHT TEXT SECTION */}
        <div className="pr-4">
         

          <p className="mb-4 leading-relaxed text-gray-700">
            Dhola sadiya <b>(Bhupen Hazarika Setu)</b> is the largest bridge amongst in the 
            history of bridges of India, and it has the length of 9.5 kilo meters. Dhola Sadiya 
            bridge is meant to decrease the travel time between 
             Assam and Arunachal Pradesh 
            by four hours. The Dhola – Sadiya Bridge is all set to be used by the general
            public in 2017.
          </p>

          <p className="mb-4 leading-relaxed text-gray-700">
            It grows over the <Link href="https://en.wikipedia.org/wiki/Lohit_River" rel="noopener noreferrer" target="_blank" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">Lohit River</Link> to connect the two 
            states of India in particular, Assam and Arunachal Pradesh and this bridge is of 
            5.69 mi.
          </p>

          <p className="leading-relaxed text-gray-700">
            The development of this bridge started in 2011 under the supervision of the 
            Ministry of Road Transport and it is a result of the contemplations introduced 
            by the head administrator of India Highways. This project started under the 
            joint collaboration of public private ownership i.e. partnership of Navayuga 
            Engineering Company Ltd with Ministry of road transport and highways.
          </p>
        </div>
      </div>
    </section>


{/*================== Brahmaputra River Section ===================*/}
 <section className="w-full px-4 py-16 bg-gray-100 font-lato">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl text-cyan-600 font-medium ">Brahmaputra River</h2>
        <div className="w-24 h-1 bg-gray-400 mx-auto mt-2"></div>
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative">
          <Image
            src="/assets/brahmaputra-river.jpg" 
            width={800}
            height={500}
            alt="Brahmaputra River"
            className="rounded-md w-full h-auto object-cover"
          />
        </div>

        {/* RIGHT TEXT BOX */}
        <div className="bg-[#021e44] text-white p-8 lg:p-12 rounded-md lg:-ml-20 shadow-xl">
          <p className="mb-4 leading-relaxed">
            Along its natural course, the <Link href="https://en.wikipedia.org/wiki/Brahmaputra_River" rel="noopener noreferrer" target="_blank" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">Brahmaputra River</Link> makes its way 
            through the Tibet Autonomous Region of China, the Indian states of 
            Arunachal Pradesh and Assam, and Bangladesh. The river is 3,848 km 
            (2,391 mi) long, and its drainage area is 712,035 km2 (274,918 sq mi). 
            For most of its length, the river is appeared be an important inland waterway.
          </p>

          <p className="leading-relaxed">
            For connecting the two Indian states, Assam and Arunachal Pradesh, 
            the largest bridge in India <span className="font-semibold">“Dhola Sadiya”</span>, is being constructed 
            over Brahmaputra. It is destination for many heart warming sites and 
            sceneries. The people living in the different parts of the Brahmaputra 
            valley reflect various origins and cultures.
          </p>
        </div>
      </div>
    </section>



{/*================== Table Section ===================*/}
 <div className=" bg-gray-50 p-4 md:p-8 font-lato">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-cyan-600 text-white py-4 px-6 mb-6 rounded-t-lg">
          <h1 className="text-2xl md:text-3xl font-light">Dhola Sadiya Bridge Stats</h1>
        </div>

        {/* Table */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                {tableData.map((row, index) => (
                  <tr 
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-4 md:px-6 text-teal-600 font-medium text-sm md:text-base w-1/2 md:w-2/5 border-r border-gray-300">
                      {row.label}
                    </td>
                    <td className="py-4 px-4 md:px-6 text-gray-700 text-sm md:text-base w-1/2 md:w-3/5">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      
      </div>
    </div>


{/*================== Construction Highlights Section ==============*/}
   <section className="relative bg-white py-16 font-lato">
      {/* Background Image */}
      <div className="relative w-full h-[300px]">
        <Image 
          src="/assets/hero3.jpg" 
          alt="Bridge background"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Empty Space Below Image */}
      <div className="h-[800px] md:h-[500px] lg:h-[300px]"></div>

      {/* Text Box */}
      <div className="absolute top-[15%] md:top-[20%] lg:top-[30%] left-0 right-0 px-6 md:px-12 text-center z-10 ">
        <div className="bg-[#eaeaea] text-gray-900 p-6 md:p-12 rounded-lg shadow-lg max-w-6xl mx-auto">
          <h2 className="text-4xl text-cyan-600 mb-4">
            Construction Highlights
            <div className="w-24 h-1 bg-gray-400 mt-2 mx-auto"></div>
          </h2>
          <p className="text-lg md:text-base leading-relaxed mb-6">
            This bridge is a joint work of Ministry of Road Transport and Highways in public-private partnership with Navayuga Engineering Company Ltd.
            The official name of this bridge is Dhola Sadiya, which is crossing the Lohit River, connecting Dhola in Assam with Sadiya in Arunachal Pradesh.
            This longest bridge in India has the length of 9.5 km and the locus of this bridge is Dhola-Sadiya, Tinsukia, India. The construction of this Sadiya Bridge started in 2011 under the supervision of the Ministry of Road Transport and is set to be functional in 2017.
          </p>
          <p className="text-lg md:text-base leading-relaxed">
            This bridge has the coordinates of 27°47'55"N 95°40'34"E. With the striking feature of reducing the considerable measure of distance between the two states, this bridge will bring a revolution. It will save a lot of time and money for those who have to travel between these two places frequently. This bridge has a width of 12.9 m and has one hundred and eighty-three spans.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default page