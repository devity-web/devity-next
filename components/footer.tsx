import {IconBrandInstagram, IconBrandLinkedin} from '@tabler/icons-react';
import {CodeXml} from 'lucide-react';

export default function Footer() {
  return (
    <section className="pt-32 pb-8">
      <div className="container">
        <footer>
          <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
              <div>
                <div className="flex items-center gap-2">
                  <CodeXml className="w-6 h-6 text-brand" />
                  <span className="text-xl font-bold bg-gradient-to-r from-brand to-brandSecondary bg-clip-text text-transparent">
                    DEVITY
                  </span>
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
                  Portugal & Brazil-based experts providing website consulting
                  and development powered by AI.
                </p>
              </div>
            </div>
            <div>
              <ul className="flex items-center space-x-6 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <a
                    target="_blank"
                    href="https://instagram.com/devity.pt"
                    rel="noreferrer"
                  >
                    <IconBrandInstagram className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a href="/">
                    <IconBrandLinkedin className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
            <p>© 2025 Devity. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </section>
  );
}
