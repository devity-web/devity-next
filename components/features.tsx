import {BrainCircuit, Zap, ZoomIn} from 'lucide-react';
import {motion} from 'framer-motion';
import {useTranslation} from 'react-i18next';

export default function Features() {
  const {t} = useTranslation();

  const getFeatures = () => [
    {
      icon: BrainCircuit,
      title: t('values.cardOne.title'),
      text: t('values.cardOne.text'),
    },
    {
      icon: ZoomIn,
      title: t('values.cardTwo.title'),
      text: t('values.cardTwo.text'),
    },
    {
      icon: Zap,
      title: t('values.cardThree.title'),
      text: t('values.cardThree.text'),
    },
  ];

  return (
    <section id="features" className="py-32">
      <div className="container">
        <p className="mb-4 text-sm text-muted-foreground lg:text-base">
          {t('values.headline')}
        </p>
        <h1 className="mt-4 text-4xl font-semibold">{t('values.title')}</h1>
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
          {getFeatures().map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: index * 0.2}}
              className="rounded-lg bg-accent p-5"
            >
              <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background">
                <feature.icon className="size-6" />
              </span>
              <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
              <p className="leading-7 text-muted-foreground">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
