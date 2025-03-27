import {Check} from 'lucide-react';
import {motion} from 'framer-motion';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Card, CardContent, CardFooter} from './ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import {Input} from './ui/input';
import {PhoneInput} from './phone-input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {Button} from './ui/button';

const contactSchema = z.object({
  name: z.string().min(4, 'contact.errors.name'),
  company: z.string().min(4, 'contact.errors.company'),
  email: z.string().email('contact.errors.email'),
  phone: z.string().min(1, 'contact.errors.phone'),
  source: z.string().min(1, 'contact.errors.source'),
});

export default function Contact() {
  const {t} = useTranslation();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      source: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof contactSchema>) => {
    setLoading(true);
  };

  return (
    <div className="container py-32 grid w-full grid-cols-1 gap-x-32 overflow-hidden lg:grid-cols-2">
      <div className="w-full">
        <div className="space-y-4 md:max-w-[40rem]">
          <h1 className="text-4xl font-medium lg:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
              {t('contact.title')}
            </span>
          </h1>
          <div className="text-muted-foreground md:text-base lg:text-lg lg:leading-7">
            {t('contact.text')}
          </div>
        </div>

        <div className="space-y-4 mt-8">
          <p className="text-sm font-semibold">{t('contact.expect')}</p>

          {[
            t('contact.expectOne'),
            t('contact.expectTwo'),
            t('contact.expectThree'),
          ].map((text, index) => (
            <motion.div
              initial={{opacity: 0, x: 20}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.6, delay: index * 0.3}}
              className="flex items-center space-x-2.5"
              key={text}
            >
              <Check className="size-5 shrink-0 text-muted-foreground" />
              <p className="text-sm">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{opacity: 0, x: 35}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 0.6}}
        className="flex w-full justify-center"
      >
        <Card className="relative w-full max-w-[30rem] min-w-[20rem] md:min-w-[24rem]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.name')}</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.company')}</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Corp" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.phone')}</FormLabel>
                          <FormControl>
                            {/* <Input placeholder="123 456 789" {...field} /> */}
                            <PhoneInput {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.email')}</FormLabel>
                          <FormControl>
                            <Input placeholder="name@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <FormField
                      control={form.control}
                      name="source"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>
                            {t('contact.form.source')}{' '}
                            <span className="text-muted-foreground text-xs">
                              ({t('contact.form.optional')})
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={v => field.onChange(v)}
                              value={field.value}
                            >
                              <SelectTrigger id="how-hear" className="w-full">
                                <SelectValue
                                  placeholder={t('contact.form.select')}
                                />
                              </SelectTrigger>
                              <SelectContent position="popper">
                                <SelectItem value="Google">Google</SelectItem>
                                <SelectItem value="Instagram">
                                  Instagram
                                </SelectItem>
                                <SelectItem value="Facebook">
                                  Facebook
                                </SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex mt-4">
                <Button isLoading={loading} type="submit" className="w-full">
                  {t('contact.form.send')}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </motion.div>
    </div>
  );
}
