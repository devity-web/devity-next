import {ChevronDown} from 'lucide-react';

import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Button} from './ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const languages = [
  {code: 'gb', i18n: 'en', name: 'English'},
  {code: 'es', i18n: 'es', name: 'Español'},
  {code: 'pt', i18n: 'pt', name: 'Português'},
  {code: 'it', i18n: 'it', name: 'Italiano'},
  {code: 'de', i18n: 'de', name: 'Deutsch'},
  {code: 'fr', i18n: 'fr', name: 'Français'},
  {code: 'jp', i18n: 'ja', name: '日本語'},
];

export function LanguageDropdown() {
  const {i18n} = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  useEffect(() => {
    const lang = localStorage.getItem('lang');

    if (lang) {
      const currentLanguage =
        languages.find(l => l.i18n === lang) ?? languages[0];

      setSelectedLanguage(currentLanguage);
    }
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-fit justify-start gap-2">
          <span>{getFlagEmoji(selectedLanguage.code)}</span>
          {selectedLanguage.name}
          <ChevronDown className="ml-auto h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        {languages.map(language => (
          <DropdownMenuCheckboxItem
            key={language.code}
            checked={selectedLanguage.code === language.code}
            onCheckedChange={() => {
              setSelectedLanguage(language);
              i18n.changeLanguage(language.i18n);
              localStorage.setItem('lang', language.i18n);
            }}
          >
            <span className="mr-2">{getFlagEmoji(language.code)}</span>
            {language.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}
