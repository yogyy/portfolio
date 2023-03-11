import CustomLink from '../components/links/customlink';
import UnstyledLink from '../components/links/unstyledlink';
import {
  LogoFacebook,
  LogoGithub,
  MailOutline,
  LogoLinkedin,
  LogoTwitter,
} from '../components/icons/icons';

export default function Footer() {
  return (
    <div className="bg-base-100 transition-colors ">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="py-4 layout ">
        <div className="md:flex md:justify-between">
          <div className="mb-6">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              yogyy
            </span>
          </div>
        </div>
        {/* /taai */}
        <div className="flex flex-col-reverse justify-center place-items-center gap-6 md:flex-row md:justify-between">
          <span className="text-sm text-primary font-semibold sm:text-center dark:text-gray-400 gap-3 flex  ">
            © 2023 Constantine.
            <CustomLink href="https://www.github.com/yogyy">
              got any feedback?.
            </CustomLink>
          </span>
          <div className="relative justify-center flex items-center space-x-3 md:space-x-6 sm:place-content-center">
            <button className="social-footer my-auto flex text-current transition-colors hover:text-sky-500 fill-current hover:fill-sky-500">
              <MailOutline />
            </button>
            {links.map(link => (
              <UnstyledLink key={link.href} href={link.href}>
                <span className="my-auto social-footer h-6 w-6 align-middle transition-colors flex fill-current hover:fill-sky-500">
                  <link.svg />
                </span>
              </UnstyledLink>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="h-2 bg-gradient-to-tr from-green-300 via-sky-500 to-sky-700" /> */}
      <div className="h-2 bg-gradient-to-br from-primary-300 via-primary-500 to-primary-300" />
    </div>
  );
}

const links = [
  {
    href: 'https://github.com/yogyy',
    alt: 'github',
    ion: 'logo-github',
    svg: LogoGithub,
  },
  {
    href: 'https://facebook.com/iogiy',
    alt: 'facebook',
    ion: 'logo-facebook',
    svg: LogoFacebook,
  },
  {
    href: 'https://www.linkedin.com/in/yogyy/',
    alt: 'linkedin',
    ion: 'logo-linkedin',
    svg: LogoLinkedin,
  },
  {
    href: 'https://twitter.com/yogyxx',
    alt: 'twitter',
    ion: 'logo-twitter',
    svg: LogoTwitter,
  },
];
