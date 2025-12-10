import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const destinationpage = () => {

const places = [
    {
      id: 1,
      title: 'Kaziranga National Park',
      description: 'Situated near 190 km away from Guwahati, Assam, Kaziranga National Park is famous for its one horned rhinos and tigers. The rhino population in Kaziranga National Park is 2,401.',
      image: '/assets/Kaziranga.jpg'
    },
    {
      id: 2,
      title: 'Namdapha National Park',
      description: "Namdapha National Park is located in the north-eastern state of India – Arunachal Pradesh, and it is the largest protected area in India and is a flawless Eastern Himalaya biodiversity hotspot.",
      image: '/assets/Namdapha_National_Park.jpg'
    },
    {
      id: 3,
      title: 'Dibru National Park',
      description: 'The Dibru-Saikhowa National Park is located in Dibrugarh and Tinsukia District, 13-km from Tinsukia town, which is 483-km from Guwahati. It is rich and diverse in herpetofauna.',
      image: '/assets/Dibru.jpg'
    }
  ];



const Sites = [
    {
      id: 1,
      title: 'Kamakhya Temple',
      description: 'The Kamakhya Temple is a Hindu temple dedicated to the Goddess Kamakhya, and among the oldest shakti peeths. It is located on the Nilachal Hill in western part of Guwahati city in Assam, India.',
      image: '/assets/Kamakhya.jpg'
    },
    {
      id: 2,
      title: 'Umananda Temple',
      description: "The Umananda temple is situated on the Pea cock Island, which is in the middle of the river Brahmaputra, Guwahati. The mountain on which the temple is constructed is known as Bhasmacala.",
      image: '/assets/Umananda.jpg'
    },
    {
      id: 3,
      title: 'Bhuvaneswari Temple',
      description: 'The Bhuvaneswari Temple, located on the banks of the river Gomati, is popular for its outstanding architecture. The temple is of Goddess Bhuvaneshwari, who is known as the creator of the universe.',
      image: '/assets/Bhuvaneswari-Temple.jpg'
    }
  ];


  return (
<>
{/*============= Intro section ============*/}
<section className="py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-cyan-600 mb-2 mt-16 text-center font-lato">Destinations Neary Dhola Sadiya</h2>
        <div className="w-24 h-1 bg-gray-400 mx-auto mt-1"></div>
    </div>
</section>




{/*=================== Nature and Parks section =====================*/}
   <section className="w-full py-12 px-4 font-lato" style={{ backgroundColor: '#d8d8d8' }}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 inline-block relative pb-4">
           Nature & Parks
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-cyan-400"></span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((place) => (
            <div
              key={place.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              style={{ backgroundColor: '#eaeaea' }}
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={place.image}
                  alt={place.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-cyan-600">
                  {place.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {place.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


{/*===========================Historic Sites ================================*/}
 <section className="w-full bg-white py-16 font-lato" >
     
         {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-cyan-600 inline-block relative pb-4">
            Historic Sites
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-400"></span>
          </h2>
        </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="bg-[#eaeaea] rounded-md shadow-sm p-4">
          <div className="w-full h-56 relative mb-4">
            <Image
              src="/assets/Kachari-Fort.jpg" 
              alt="Kachari Fort"
              fill
              className="object-cover rounded-md"
            />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">Kachari Fort</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Kachari Fort is a famous historic monument, which is located in the province of <Link href="https://en.wikipedia.org/wiki/Silchar" rel="noopener noreferrer" target="_blank" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">Silchar</Link> at Khaspur, away at a distance of 10 km. Kachari Fort was the royal seat of Kachari Dynasty.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#eaeaea] rounded-md shadow-sm p-4">
          <div className="w-full h-56 relative mb-4">
            <Image
              src="/assets/agnigarh_hills.jpg" 
              alt="Agnigarh Hill"
              fill
              className="object-cover rounded-md"
            />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Agnigarh Hill
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
          There is a hillock on the shore of the River Brahmaputra in the district of <Link href="https://en.wikipedia.org/wiki/Sonitpur_district" rel="noopener noreferrer" target="_blank" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">Sonitpur,</Link> Assam, known as Agnigarh hill. This place is very popular for the mythological romance related with it.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#eaeaea] rounded-md shadow-sm p-4">
          <div className="w-full h-56 relative mb-4">
            <Image
              src="/assets/Talatal.jpg" 
              alt="Talatal Ghar"
              fill
              className="object-cover rounded-md"
            />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">Talatal Ghar</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Talatal ghar is situated in Rangpur, in Upper Assam. It is considered as one of the greatest demonstrations of Tai Ahom architecture. It is also the largest of all Tai Ahom monuments.
          </p>
        </div>

      </div>
    </section>

  
{/*=========================== Religious Sites ================================*/}
  <section className="w-full py-12 px-4 font-lato" style={{ backgroundColor: '#d8d8d8' }}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 inline-block relative pb-4">
           Religious Sites
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-400"></span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Sites.map((site) => (
            <div
              key={site.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              style={{ backgroundColor: '#eaeaea' }}
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={site.image}
                  alt={site.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cyan-600 mb-3">
                  {site.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {site.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


{/*========================== Points of Interest ===========================*/}
<section className="w-full bg-white py-16 font-lato" >
     
         {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-cyan-600 inline-block relative pb-4">
            Points Of Interest
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-400"></span>
          </h2>
        </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="bg-[#eaeaea] rounded-md shadow-sm p-4">
          <div className="w-full h-56 relative mb-4">
            <Image
              src="/assets/Lohi.jpg" 
              alt="Lohit River"
              fill
              className="object-cover rounded-md"
            />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">Lohit River</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Lohit River is a tributary of Brahmaputra river and originates from
            eastern Tibet. The river caters sports opportunities like rafting and
            kayaking. It is a tributary to the Brahmaputra River.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#eaeaea] rounded-md shadow-sm p-4">
          <div className="w-full h-56 relative mb-4">
            <Image
              src="/assets/Bogibeel-bridge.jpg" 
              alt="Bogibeel Bridge"
              fill
              className="object-cover rounded-md"
            />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Bogibeel Bridge
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Bogibeel Bridge is country’s longest rail road bridge, which is also
            double-decked. It is all set to be operational by March 2018. The
            bridge is being built over the Brahmaputra in the <Link href="https://en.wikipedia.org/wiki/Dibrugarh_district" rel="noopener noreferrer" target="_blank" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">Dibrugarh district.</Link>
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#eaeaea] rounded-md shadow-sm p-4">
          <div className="w-full h-56 relative mb-4">
            <Image
              src="/assets/hero4.jpg" 
              alt="Rang Ghar"
              fill
              className="object-cover rounded-md"
            />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">Rang Ghar</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Rang ghar is located by the side of the Assam Trunk Road. It was a
            kind of royal sports pavilion where Ahom kings sat as spectators of
            the games like buffalo fights and other sports at Rupahi Pathar.
          </p>
        </div>

      </div>
    </section>


</>
)
}

export default destinationpage