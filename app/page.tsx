import Image from "next/image";

export default function Home() {
  return (
    <div className="mac-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="space-y-8 text-center">
        <div className="fade-in">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
            The LaStraw Inc.
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            Addressing local issues since 2003.
          </p>
          <div className="h-1 w-24 bg-blue-900 mx-auto m-4 rounded-full"></div>
        </div>
      </div>
      
      <div className="my-16 relative">
        <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] animate-spin-slow relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-counter-spin hover:scale-110 transition-transform">
   
              <Image src={"/comc.png"} alt="Comc" width={130} height={130}/>
     
          </div>
          
          <div className="absolute bottom-0 left-0 animate-counter-spin hover:scale-110 transition-transform">
  
              <Image src={"/tchi.png"} alt="Tchi" width={130} height={130} />

          </div>
          
          <div className="absolute bottom-0 right-0 animate-counter-spin hover:scale-110 transition-transform">

              <Image src={"/GGHP.png"} alt="Gghp" width={130} height={130}/>

          </div>
        </div>
      </div>

      <div className="max-w-md w-full space-y-4 text-center slide-up">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Simple Solutions Coming Soon...
        </h2>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a href="mailto:contact@lastraw.com" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            Contact Us
          </a>
          <a href="https://sharedetroit.org/nonprofit/lastraw" className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Learn More
          </a>
        </div>
      </div>
      
      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} The LaStraw Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
