import {Badge} from '@/components/ui/badge';
import {motion} from 'framer-motion';
import {useTranslation} from 'react-i18next';

export default function Faq() {
  const {t} = useTranslation();

  const getFaqs = () => [
    {
      question: t('faq.topicOne.title'),
      answer: t('faq.topicOne.text'),
    },
    {
      question: t('faq.topicTwo.title'),
      answer: t('faq.topicTwo.text'),
    },
    {
      question: t('faq.topicThree.title'),
      answer: t('faq.topicThree.text'),
    },
    {
      question: t('faq.topicFour.title'),
      answer: t('faq.topicFour.text'),
    },
  ];

  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center">
          <Badge className="text-xs font-medium">FAQ</Badge>
          <h1 className="mt-4 text-4xl font-semibold">{t('faq.title')}</h1>
          <p className="mt-6 font-medium text-muted-foreground">
            {t('faq.text')}
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-screen-sm">
          {getFaqs().map((faq, index) => (
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: index * 0.35}}
              key={faq.question}
              className="mb-8 flex gap-4"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-secondary font-mono text-xs text-primary">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">{faq.question}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
