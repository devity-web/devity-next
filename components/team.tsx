import {Button} from '@/components/ui/button';
import {useTranslation} from 'react-i18next';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';

export default function Team() {
  const {t} = useTranslation();

  return (
    <div className="container py-32">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-3xl font-bold md:text-4xl md:leading-tight">
          {t('team.title')}
        </h2>
        <p className="mt-1 text-lg text-muted-foreground">{t('team.text')}</p>
      </div>
      {/* End Title */}

      {/* Alternating Sections */}
      <div className="space-y-24">
        <div className="grid md:grid-cols-2 items-center gap-8 lg:gap-12">
          <div className={'relative'}>
            <div className="relative aspect-[4/3]">
              <img
                className="rounded-xl object-cover grayscale"
                src="/me.jpeg"
                alt="Matheus Pedroni"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Background Pattern */}
            <div
              className={
                'absolute -z-10 size-48 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] opacity-30'
              }
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold">Matheus Pedroni</h3>
              <p className="text-lg text-muted-foreground mt-1">
                {t('team.role')}
              </p>
            </div>

            <p className="text-muted-foreground">{t('team.description')}</p>

            <div className="flex gap-2">
              <Button asChild size="icon" variant="ghost">
                <a
                  href="https://www.instagram.com/pedr0ni/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconBrandInstagram className="size-4" />
                </a>
              </Button>
              <Button asChild size="icon" variant="ghost">
                <a
                  href="https://github.com/pedr0ni"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconBrandGithub className="size-4" />
                </a>
              </Button>
              <Button asChild size="icon" variant="ghost">
                <a
                  href="https://www.linkedin.com/in/pedr0ni/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconBrandLinkedin className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* End Alternating Sections */}
    </div>
  );
}
