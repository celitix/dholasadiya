import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero2.jpg" 
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" /> {/* Overlay */}
      </div>

      {/* Footer Content */}
      <div className="relative container mx-auto px-6 py-12 grid md:grid-cols-4 sm:grid-cols-2 gap-10 z-10">
        {/* Logo */}
        <div>
         <Link href="/"><div className="text-4xl font-bold mb-4 text-cyan-600">Dhola Sadiya</div></Link>
          <p className="text-gray-300 text-base ">
            Discover Dholasadiya, a peaceful cultural landmark of Assam known for its historic roots, sacred sites, and the birthplace of Srimanta Sankardev.
          </p>
        </div>
 
        {/* Recent Posts */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
          <div className="space-y-4">
            {/* Blog Item */}
            <Link href="/blog/dhola-sadiya-bridge-inauguration" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/hero3.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-cyan-500 transition leading-snug">
              Inauguration of Dhola Sadiya Bridge on 26th May, 2017
              </p>
            </Link>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li><Link href="/" className="hover:text-cyan-500 transition">Home</Link></li>
            <li><Link href="/about-dhola-sadiya" className="hover:text-cyan-500 transition">About</Link></li>
            <li><Link href="/destinations" className="hover:text-cyan-500 transition">Destinations</Link></li>
            <li><Link href="/gallery" className="hover:text-cyan-500 transition">Gallery</Link></li>
            <li><Link href="/getting-there" className="hover:text-cyan-500 transition">Getting There</Link></li>
            <li><Link href="/blog" className="hover:text-cyan-500 transition">Blog</Link></li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112878.48197150962!2d95.62961995910347!3d27.85736513760432!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x373faa3e3c9b2935%3A0x99811198cb2a4d30!2sSadiya%2C%20Assam%20786155%2C%20India!5e0!3m2!1sen!2sus!4v1764072394001!5m2!1sen!2sus" 
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg border-0"
          ></iframe>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative border-t border-gray-600/40 text-center py-4 text-sm text-gray-400 z-10">
        © {new Date().getFullYear()} All Rights Reserved | Built by{" "}
        <Link href="https://www.proactivedigital.in/" target="_blank"   rel="noopener noreferrer" className="text-blue-400 hover:text-cyan-600">Proactive</Link> |{" "}
        {/* <Link href="/disclaimer" className="text-blue-400 hover:text-cyan-600">Disclaimer</Link> */}
      </div>
    </footer>
  );
}
