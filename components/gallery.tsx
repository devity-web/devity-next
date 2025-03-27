'use client';

import {ArrowLeft, ArrowRight} from 'lucide-react';
import {useEffect, useState} from 'react';
import {Button} from '@/components/ui/button';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import {motion} from 'framer-motion';
import {useTranslation} from 'react-i18next';
import Image from 'next/image';

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export default function Gallery() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const {t} = useTranslation();

  const items = [
    {
      id: 'bowsy',
      title: 'Bowsy Platform',
      description: t('portfolio.itemOne'),
      href: 'https://bowsy.com',
      image: '/bowsy.png',
    },
    {
      id: 'timetracking',
      title: 'Timetracking',
      description: t('portfolio.itemTwo'),
      href: 'https://timetracking-de6e4.web.app/',
      image: '/timetracking.png',
    },
    {
      id: 'feitec',
      title: 'Feitec',
      description: t('portfolio.itemThree'),
      href: '/',
      image: '/feitec.png',
    },
  ];

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on('select', updateSelection);
    return () => {
      carouselApi.off('select', updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
              {t('portfolio.our')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                {t('portfolio.portfolio')}
              </span>
            </h2>
            <p className="text-muted-foreground max-w-lg">
              {t('portfolio.text')}
            </p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="container">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              '(max-width: 768px)': {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item, index) => (
              <motion.div
                className="relative z-10"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: index * 0.3}}
                key={item.id}
              >
                <CarouselItem
                  key={item.id}
                  className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
                >
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={item.href}
                    className="group rounded-xl"
                  >
                    <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                      <div className="text-primary-foreground absolute inset-x-0 bottom-0 flex flex-col items-start p-6 md:p-8">
                        <div className="mb-2 pt-4 text-xl text-white font-semibold md:mb-3 md:pt-4 lg:pt-4">
                          {item.title}
                        </div>
                        <div className="mb-8 text-white line-clamp-2 md:mb-12 lg:mb-9">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </a>
                </CarouselItem>
              </motion.div>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
