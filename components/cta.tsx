import {Button} from '@/components/ui/button';
import {Mail} from 'lucide-react';
import {useTranslation} from 'react-i18next';

export default function Cta() {
  const {t} = useTranslation();

  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center rounded-lg bg-accent p-8 text-center md:rounded-xl lg:p-16">
          <h3 className="mb-3 max-w-3xl text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            <span className="bg-gradient-to-r from-brand to-brandSecondary bg-clip-text text-transparent">
              {t('cta.title')}
            </span>
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
            {t('cta.text')}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button className="w-full sm:w-auto" asChild>
              <a href="mailto:devitysoftware@gmail.com">
                <Mail />
                {t('cta.button')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
