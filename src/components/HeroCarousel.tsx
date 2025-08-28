
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Autoplay from "embla-carousel-autoplay";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const carouselItems = [
  {
    image: "/lovable-uploads/382723f8-f32c-4fa9-abdb-09ffbd64f4e8.png",
    title: "About KCL",
    description: "Discover who we are and what drives us. Explore our vision, mission, and the principles that guide our work with governments, enterprises, and impact organizations.",
    link: "/about",
    bgImage: "url('https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=1932&auto=format&fit=crop')"
  },
  {
    image: "/lovable-uploads/382723f8-f32c-4fa9-abdb-09ffbd64f4e8.png",
    title: "Our Services",
    description: "From research and strategy to execution and evaluation, we deliver end‑to‑end support for lasting impact. Partner with us to solve complex challenges with clarity.",
    link: "/services",
    bgImage: "url('https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=1770&auto=format&fit=crop')"
  },
  {
    image: "/lovable-uploads/382723f8-f32c-4fa9-abdb-09ffbd64f4e8.png",
    title: "Centers of Excellence",
    description: "Deep domain expertise across healthcare, urban rejuvenation, and digital transformation. Purpose‑built teams solving sector‑specific problems at scale.",
    link: "/excellence",
    bgImage: "url('/lovable-uploads/4.png')"
  },
  {
    image: "/lovable-uploads/382723f8-f32c-4fa9-abdb-09ffbd64f4e8.png",
    title: "Humans of KCL",
    description: "Meet the people behind the impact. Stories, voices, and journeys from the team driving real‑world change with empathy and rigor.",
    link: "/humans",
    bgImage: "url('/lovable-uploads/3.jpg')"
  }
];

const HeroCarousel = () => {
  const [api, setApi] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(carouselItems.length);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    setSlideCount(api.scrollSnapList().length);
    onSelect();
    api.on('select', onSelect);
    api.on('reInit', onSelect);
    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  return (
    <div className="text-white py-16 md:py-5">
      {/* container mx-auto */}
      <div className="">
        <div className=" ">
          {/* @ts-ignore */}
          <Carousel className="w-full " opts={{ loop: true }} plugins={[Autoplay({ delay: 5000 })]} setApi={setApi}>
            <CarouselContent>
              {carouselItems.map((item, index) => (
                <CarouselItem key={index}>
                  <div 
                    className="h-[72vh] flex flex-col md:flex-row items-center overflow-hidden"
                    style={{
                      backgroundImage: item.bgImage,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                    }}
                  >
                    {/* Subtle professional gradient overlay for improved legibility */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 md:from-slate-900/60 md:via-slate-900/40 to-transparent pointer-events-none"></div>
                    <div className="w-full p-8 relative z-10 flex flex-col items-center text-center transform -translate-y-4 md:-translate-y-6">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl">{item.title}</h2>
                      <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">{item.description}</p>
                      <Link 
                        to={item.link}
                        className="inline-block bg-white text-kcl-blue px-6 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Overlayed arrows at left/right edges */}
            <CarouselPrevious className="!left-3 md:!left-5 top-1/2 -translate-y-1/2 z-20 bg-white/95 text-kcl-blue border-0 shadow-lg ring-1 ring-black/10 hover:bg-white !h-10 !w-10 md:!h-12 md:!w-12" />
            <CarouselNext className="!right-3 md:!right-5 top-1/2 -translate-y-1/2 z-20 bg-white/95 text-kcl-blue border-0 shadow-lg ring-1 ring-black/10 hover:bg-white !h-10 !w-10 md:!h-12 md:!w-12" />

            {/* Pagination dots */}
            <div className="absolute bottom-4 left-0 right-0 z-20 flex items-center justify-center gap-2">
              {Array.from({ length: slideCount }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => {
                    api?.scrollTo(i);
                    // Pause and resume autoplay briefly, similar to arrows
                    // @ts-ignore
                    api?.plugins()?.autoplay?.stop();
                    setTimeout(() => {
                      // @ts-ignore
                      api?.plugins()?.autoplay?.play();
                    }, 0);
                  }}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    selectedIndex === i ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
