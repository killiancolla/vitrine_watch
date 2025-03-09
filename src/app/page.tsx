"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowBigDown, ChevronDown, ChevronsDown, Clock, Watch } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const images = [
  "/watch/1.jpg",
  "/watch/2.jpg",
  "/watch/3.jpg",
  "/watch/4.jpg"
];

export default function WatchGallery() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="h-[400vh] overflow-hidden fixed">
        {images.map((src, index) => {
          const windowHeight = typeof window !== "undefined" ? window.innerHeight : 1;
          const clipValue = Math.min(Math.max(0, ((scrollY - index * windowHeight) / windowHeight) * 100), 100);

          return (
            <div
              key={index}
              className={`fixed top-0 left-0 w-full h-screen`}
              style={{
                clipPath: `inset(0 0 ${clipValue}% 0)`,
                zIndex: -index
              }}
            >
              <Image
                className={`w-full h-full object-cover brightness-5`}
                src={src}
                height={10000}
                width={10000}
                alt="watch"
              />
            </div>
          );
        })}
      </div>
      <div className="relative h-[400vh] overflow-hidden">
        <div className="h-screen w-screen flex justify-center items-center flex-col gap-4">
          <p className="text-6xl text-white font-bold tracking-widest uppercase">L’Excellence du Temps.</p>
          <Button className="text-xl">Découvrez nos collections</Button>
        </div>
        <div className="h-screen w-screen flex justify-center items-center flex-col gap-4">
          <p className="text-white text-xl">Technologie et Artisanat</p>
          <p className="text-6xl text-white font-bold tracking-widest text-center w-1/2">Un savoir-faire d’exception, des   tériaux d’avant-garde.</p>
          <Button className="text-xl">En savoir plus</Button>
        </div>
        <div className="h-screen w-screen flex justify-center items-center flex-col gap-4">
          <p className="text-white text-xl">Élégance et Prestige</p>
          <p className="text-6xl text-white font-bold tracking-widest text-center w-1/2">Un design intemporel pour une distinction absolue.</p>
        </div>
        <div className="h-screen w-screen flex justify-center items-center flex-col gap-4">
          <p className="text-white text-xl">Engagement et Durabilité</p>
          <p className="text-6xl text-white font-bold tracking-widest text-center w-1/2">Créée pour durer, pensée pour l’avenir.</p>
          <Button className="text-xl">Notre Engagement</Button>
        </div>
      </div>
      <div className="bg-neutral-900 sm:p-10 flex max-sm:flex-col gap-10 relative max-sm:py-10">
        <div className="max-sm:hidden w-px bg-white absolute left-1/3 -translate-x-1/2 top-1/2 -translate-y-1/2 h-2/3"></div>
        <div className="max-sm:hidden w-px bg-white absolute left-2/3 -translate-x-1/2 top-1/2 -translate-y-1/2 h-2/3"></div>
        <div className="w-1/3 max-sm:w-full rounded-xl sm:p-10 flex flex-col justify-center items-center">
          <p className="text-white text-center text-4xl max-sm:text-3xl">Matériaux d'exception</p>
          <p className="text-white text-center max-sm:text-xs">Or, titane, saphir, cuir haut de gamme.</p>
        </div>
        <div className="w-1/3 max-sm:w-full rounded-xl sm:p-10 flex flex-col justify-center items-center">
          <p className="text-white text-center text-4xl max-sm:text-3xl">Un design intemporel</p>
          <p className="text-white text-center max-sm:text-xs">Inspiration classique avec une touche moderne.</p>
        </div>
        <div className="w-1/3 max-sm:w-full rounded-xl sm:p-10 flex flex-col justify-center items-center">
          <p className="text-white text-center text-4xl max-sm:text-3xl">Mécanisme de précision</p>
          <p className="text-white text-center max-sm:text-xs">Mouvement suisse, assemblage artisanal.</p>
        </div>
      </div>
      <div className="bg-neutral-950 flex max-md:flex-col">
        <div className="relative max-md:w-full w-2/5 flex justify-center flex-col gap-4 md:p-20 max-md:p-10">
          <p className="text-white text-6xl font-bold tracking-widest">Chronos Élite 1957</p>
          <p className="text-white text-base font-extralight raleway">Une fusion parfaite entre élégance intemporelle et ingénierie de précision. Conçue pour les passionnés de raffinement et d’excellence, chaque détail incarne l’héritage du temps.</p>
          <Button className="w-fit text-xl tracking-wide">Découvrir l'édition limitée</Button>
        </div>
        <div className="h-screen relative max-md:w-1/2 max-md:mx-auto max-md:h-auto max-md:aspect-square w-1/5 flex flex-col justify-center items-center">
          <div className="absolute w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(255,165,64,0.5)_0%,rgba(255,165,64,0)_70%)] rounded-full opacity-100 z-0"></div>
          <div className="max-md:hidden absolute w-[60%] aspect-square rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border border-black"></div>
          <div className="max-md:hidden absolute w-[100%] aspect-square rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border border-black">
          </div>
          <div className="max-md:hidden absolute w-[140%] aspect-square rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border border-black"></div>
          <div className="max-md:hidden rotate-45 absolute w-[180%] aspect-square rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border border-black"></div>
          <Image src={'/watch/watch.png'} height={1000} width={1000} alt="watch" className="pb-10 md:absolute w-full h-auto z-10 top-1/2 left-1/2 md:-translate-y-1/2 md:-translate-x-1/2" />
          <p className="md:absolute bottom-8 text-white animate-bounce opacity-80"><ChevronsDown className="w-10 h-10" /></p>
        </div>
      </div>
      <div className="w-full bg-neutral-900 overflow-hidden">
        <div className="flex gap-4 py-10 px-10 max-w-7xl mx-auto">
          <div className="w-1/3 max-sm:w-1/2 bg-neutral-800 text-white flex flex-col items-center rounded-lg gap-6 py-6">
            <div className="flex flex-col items-center gap-1">
              <h2 className="text-3xl tracking-widest uppercase text-center">Eclipse 40</h2>
              <p className="font-light text-xs raleway uppercase tracking-tighter opacity-70">40mm Sver Timepiece</p>
              <Clock className="h-4" />
            </div>
            <Image src={'/watch/6.png'} alt="watch" height={500} width={500} className="w-3/4 h-auto py-4" />
          </div>
          <div className="w-1/3 max-sm:w-1/2 bg-neutral-800 text-white flex flex-col items-center rounded-lg gap-6 py-6">
            <div className="flex flex-col items-center gap-1">
              <h2 className="text-3xl tracking-widest uppercase text-center">Vesper Chrono</h2>
              <p className="font-light text-xs raleway uppercase tracking-tighter opacity-70">40mm Black Timepiece</p>
              <Clock className="h-4" />
            </div>
            <Image src={'/watch/7.png'} alt="watch" height={500} width={500} className="w-3/4 h-auto py-4" />
          </div>
          <div className="max-sm:hidden w-1/3 bg-neutral-800 text-white flex flex-col items-center rounded-lg gap-6 py-6">
            <div className="flex flex-col items-center gap-1">
              <h2 className="text-3xl tracking-widest uppercase text-center">Aurora Prime</h2>
              <p className="font-light text-xs raleway uppercase tracking-tighter opacity-70">40mm Gold Timepiece</p>
              <Clock className="h-4" />
            </div>
            <Image src={'/watch/5.png'} alt="watch" height={500} width={500} className="w-full h-auto py-4" />
          </div>
        </div>
      </div>
      <div className="bg-white pb-10">
        <div className="flex justify-center items-center gap-5 py-10">
          <div className="h-px w-1/6 bg-black"></div>
          <h2 className="text-black text-5xl text-center">Notre histoire</h2>
          <div className="h-px w-1/6 bg-black"></div>
        </div>
        <div className="flex max-lg:flex-col w-full px-40 max-sm:px-10">
          <Image className="rounded-xl w-1/3 max-lg:w-full max-lg:h-40 aspect-square object-cover" src={'/watch/bg.jpeg'} alt="watch" height={1000} width={1000} />
          <div className="w-2/3 px-16 max-sm:px-0 max-lg:w-full max-lg:pt-10">
            <div className="text-black raleway italic tracking-widest ">
              <span className="text-7xl font-semibold">L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Iste aut commodi officia placeat quas iusto totam incidunt, ex tenetur beatae quo cumque mollitia reiciendis quam neque debitis illum error nulla.
              <div className="w-px h-5 bg-black my-4 animate-pulse"></div>
              <span className="text-7xl font-semibold">V</span>oluptatum voluptates rerum quo dignissimos qui officia aliquid rem iusto fuga illum, libero asperiores et deserunt temporibus molestiae voluptatibus. Magnam impedit debitis dignissimos laboriosam quod? Sed ratione inventore sunt doloremque.
            </div>
            <div className="w-px h-5 bg-black my-4 animate-pulse"></div>
            <Button className="raleway">Continuer à lire</Button>
          </div>
        </div>
      </div>
      <h2 className="text-black text-3xl text-center raleway mt-20 italic">Ils nous ont fait confiance…</h2>
      <div className="w-full overflow-hidden">
        <motion.div
          className='flex items-center w-full py-20'
          animate={{
            x: ['-100%', '0%'],
            transition: {
              ease: 'linear',
              duration: 10,
              repeat: Infinity
            }
          }}
        >
          <div className='flex-shrink-0 py-2' style={{ width: `${100 / 5}%` }}>
            <Image src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Omega_Logo.svg/2560px-Omega_Logo.svg.png'} alt="watch logo" height={100} width={100} />
          </div>
          <div className='flex-shrink-0 py-2' style={{ width: `${100 / 5}%` }}>
            <Image src={'https://upload.wikimedia.org/wikipedia/fr/d/d0/Rolex.svg'} alt="watch logo" height={100} width={100} />
          </div>
          <div className='flex-shrink-0 py-2' style={{ width: `${100 / 5}%` }}>
            <Image src={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Tissot_Logo.svg/2560px-Tissot_Logo.svg.png'} alt="watch logo" height={100} width={100} />
          </div>
          <div className='flex-shrink-0 py-2' style={{ width: `${100 / 5}%` }}>
            <Image src={'https://cdn.worldvectorlogo.com/logos/seiko-2.svg'} alt="watch logo" height={100} width={100} />
          </div>
          <div className='flex-shrink-0 py-2' style={{ width: `${100 / 5}%` }}>
            <Image src={'https://upload.wikimedia.org/wikipedia/fr/thumb/5/5f/Logo_Patek_Philippe.svg/1200px-Logo_Patek_Philippe.svg.png'} alt="watch logo" height={100} width={100} />
          </div>
          <div className='flex-shrink-0 py-2' style={{ width: `${100 / 5}%` }}>
            <Image src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Omega_Logo.svg/2560px-Omega_Logo.svg.png'} alt="watch logo" height={100} width={100} />
          </div>
          <div className='flex-shrink-0 py-2' style={{ width: `${100 / 5}%` }}>
            <Image src={'https://upload.wikimedia.org/wikipedia/fr/d/d0/Rolex.svg'} alt="watch logo" height={100} width={100} />
          </div>
          <div className='flex-shrink-0 py-2' style={{ width: `${100 / 5}%` }}>
            <Image src={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Tissot_Logo.svg/2560px-Tissot_Logo.svg.png'} alt="watch logo" height={100} width={100} />
          </div>
          <div className='flex-shrink-0 py-2' style={{ width: `${100 / 5}%` }}>
            <Image src={'https://cdn.worldvectorlogo.com/logos/seiko-2.svg'} alt="watch logo" height={100} width={100} />
          </div>
          <div className='flex-shrink-0 py-2' style={{ width: `${100 / 5}%` }}>
            <Image src={'https://upload.wikimedia.org/wikipedia/fr/thumb/5/5f/Logo_Patek_Philippe.svg/1200px-Logo_Patek_Philippe.svg.png'} alt="watch logo" height={100} width={100} />
          </div>

        </motion.div>
      </div>
      <footer className="w-full bg-gray-800 text-white raleway text-center py-5">
        <p>Ce site web et tous les élements qu'il contient sont fictifs, si vous souhaitez un site internet de ce type vous pouvez me contacter en cliquant <Link href={'https://killian-colla.com/fr/contact'} target="_blank"><Button className="text-blue-600" variant={'link'}>ici</Button></Link></p>
      </footer>
    </div>
  );
}