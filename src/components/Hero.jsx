import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import gitlab from '../assets/gitlab.png'
import CV from '../assets/CV.pdf'
import hero from '../assets/hero.png'
import hi from '../assets/hi.jpg'
import { DownloadIcon, Mail } from 'lucide-react'

const Hero = ({ darkMode }) => {
  const socialIcons = [
    { icon: linkedin, alt: 'linkedin' },
    { icon: github, alt: 'github' },
    { icon: gitlab, alt: 'gitlab' },
  ];

  const darkTheme = {
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    buttonSecondary: 'text-white border-2 border-orange-500 hover:bg-orange-600',
    decorativeCircle: 'bg-orange-500 opacity-50'
  };

  const lightTheme = {
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-700',
    buttonSecondary: 'text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white',
    decorativeCircle: 'bg-orange-400 opacity-20'
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className='relative overflow-hidden min-h-screen flex flex-col'>
      <section
        id='home'
        data-aos='fade-up'
        data-aos-delay='250'
        className='body-font z-10'
      >
        <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-32 flex-col lg:flex-row items-center justify-between lg:mt-0 mt-14'>
          <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0'>
            <div className='flex justify-center lg:justify-start gap-4 sm:gap-6 sm:mb-7 w-full'>
              {socialIcons.map((social, index) => (
                <a
                  href='#'
                  target='_blank'
                  data-aos-delay={`${400 + index * 100}`}
                  rel='noopener noreferrer'
                  className='transform hover:scale-110 transition-transform duration-300'
                  aria-label={social.alt}
                >
                  <img src={social.icon} alt={social.alt} className={`w-8 h-8 sm:w-10 object-contain ${darkMode ? '' : 'invert'}`} />
                </a>
              ))}

            </div>

            <div className='mt-6'>
              <h1 className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
                data-aos='fade-up'
                data-a0s-delay='500'>
                Hi, I'm Jasir
              </h1>
              <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
                data-aos='fade-up'
                data-aos-delay='600'
              >
                a passionate and self-taught Flutter developer from Malappuram, Kerala. I hold a Bachelor's degree in English from Annamalai University and completed a diploma in DEOA, which sparked my interest in technology and led me to specialize in mobile app development.
              </p>
              {/* buttons */}
              <div className='w-full pt-4 sm:pt-6'>
                <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4'
                  data-aos='fade-up'
                  data-aos-delay='700'
                >
                  <a href={CV} download className='w-full sm:w-auto'>
                    <button className='w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform'>
                      <DownloadIcon className='w-4 h-4 sm:h-5 sm:w-5 mr-2' /> Download CV
                    </button>
                  </a>
                  <a href='#contact' className='w-full sm:w-auto'>
                    <button className={`w-full sm:w-auto inline-flex items-center justify-center ${theme.buttonSecondary} py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold transition-colors duration-300`}>
                      <Mail className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />
                      Contact Me
                    </button>
                  </a>
                </div>

              </div>
            </div>
            {/* image */}

            <div
              className='lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center'
              data-aos='fade-up'
              data-aos-delay='400'
            >
              <div className='relative w-4/5 sm:w-3/4 lg:w-full overflow-hidden'>
                <img
                  src={hero}
                  alt='hero image'
                  className='relative z-10 w-full max-w-xs sm:max-w-md rounded-full object-cover shadow-xl'
                />
              </div>
              <div
                className='absolute top-4 sm:top-4 left-15 sm:left-16
  text-3xl sm:text-5xl font-extrabold
  text-yellow-300
  animate-bounce z-20'
                style={{
                  WebkitTextStroke: '2px black',
                  textShadow: '0 0 10px rgba(255,0,0,0.6)'
                }}
              >
                Hi!
              </div>
            </div>
          </div>

        </div>

      </section>

    </div>
  )
}

export default Hero