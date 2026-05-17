import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import gitlab from '../assets/gitlab.png'

const Hero = ({darkMode}) => {
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
            {socialIcons.map((social, index)=>(
              <a
                href='#'
                target='_blank'
                data-aos-delay={index * 100}
                rel='noopener noreferrer'
                className={`p-2 rounded-full ${theme.decorativeCircle}`}
                aria-label={social.alt}
              >
                <img src={social.icon} alt={social.alt} className='w-6 h-6' />
              </a>
            ))}

          </div>

          </div>

        </div>

      </section>
      
    </div>
  )
}

export default Hero