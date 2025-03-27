import {scrollTo} from '@/lib/utils';
import {motion} from 'framer-motion';
import {useTranslation} from 'react-i18next';
import {Button} from './ui/button';
import {FloatingPaper} from './floating-paper';
import {SparklesCore} from './sparkles';

export default function Hero() {
  const {t} = useTranslation();

  return (
    <div className="relative overflow-hidden h-screen flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={6} />
      </div>

      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <motion.div
        className="relative z-10"
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
      >
        <div className="container">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              {t('hero.title')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                {' '}
                {t('hero.aiPower')}
              </span>
            </h1>
            {/* End Title */}
            <div className="mt-5 max-w-3xl">
              <p className="text-xl text-muted-foreground">
                🇵🇹🇧🇷 {t('hero.description')}
              </p>
            </div>
            <div className="mt-8 gap-3 flex justify-center">
              <Button onClick={() => scrollTo('features')} size={'lg'}>
                {t('hero.learnMore')}
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
