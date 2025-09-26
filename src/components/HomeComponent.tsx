import waves from '../assets/waves.png'
import b777x from '../assets/b777-9x_wh001.jpg'
import ninety8point6 from '../assets/ninety8point6.jpg'
import mcw from '../assets/mcw.png'
import aws from '../assets/aws.png'
import typescript from '../assets/typescript.png'
import kotlin from '../assets/kotlin.png'
import react from '../assets/react.png'
import gql from '../assets/gql.png'
import cdk from '../assets/cdk.png'
import nineLogo from '../assets/nineLogo.png'
import inception from '../assets/inception.png'
import boeing from '../assets/boeing.png'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import gitmatch from '../assets/gitmatch.png'
import pglang from '../assets/pglang.png'
import resume from '../assets/resume.svg'
import down from '../assets/down.png'
import Typewriter from 'typewriter-effect'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


export function HomeComponent() {

  
  useEffect(() => {
    Aos.init({
      duration: 3000,
      once: true,
    })
  }, [])


  return (
    <>
      <div className='w-screen h-screen bg-indigo-950' id='screen'>
        <div style={{backgroundImage: `url(${waves})`}}
             className='bg-center bg-repeat h-full w-full flex justify-center items-center' id='background'>
          <div
            className='w-full h-full rounded-xl bg-white/12 bg-clip-padding backdrop-filter flex flex-col items-center justify-center backdrop-contrast-125'>
            <div className='flex items-center w-11/12 h-full justify-center flex-col space-y-4 p-2' id='typewriter'>
              <h1 className='text-white text-center font-primary text-4xl'>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString('Hello, my name is Abhi!')
                      .start()
                  }}
                />
              </h1>
            </div>
            <div className='flex items-center animate-bounce justify-center'>
              <img className='mx-3 w-15 h-15' src={down}/>
            </div>
          </div>
        </div>
      </div>
      <div
        className='w-screen flex items-center flex-col text-center text-white font-primary justify-center bg-violet-800'
        id='about-section'>
        <div className='w-10/12 h-7/12 justify-start flex-col py-10 space-y-6 flex'>
          <h1 className='text-white font-primary text-3xl'>
            About me
          </h1>
          <h3 className='text-white font-primary text-lg'>
            I'm abhi, a full stack engineer based in Seattle, Washington
          </h3>
          <h3 className='text-white font-primary text-lg'>
            I've been developing different types of software professionally for around 3 years and in different
            industries, mostly being healthcare and aerospace. I have experience developing in several domains like web,
            embedded, mobile, and cloud (my favorite).
          </h3>
          <h3 className='text-white font-primary text-lg'>
            I went to the University of Washington and graduated with a Bachelors of Science in Computer Science
          </h3>
          <h3 className='text-white font-primary text-lg mt-3'>
            I have a passion for engineering as a whole and I love to learn new things. I'm constantly looking for a new
            challenge.
          </h3>
          <h3 className='text-white font-primary italic text-xl font-semibold mt-15 mb-8'>
            "Abhi is one of the best engineers I've ever worked with" - Every manager I've ever had
          </h3>
        </div>
      </div>
      <div
        className='w-screen flex items-center flex-col text-center text-white font-primary justify-center bg-violet-500'
        id='about-section'>
        <div className='h-7/12 items-center my-10 flex-col space-y-5 flex max-w-[1800px]' id='Experience Div'>
          <h1 className='text-white mx-4 pb-4 font-primary text-3xl'>
            Experience (places i've worked)
          </h1>
          <div
            className='h-full rounded-3xl mt-1 w-11/12 bg-clip-padding flex lg:flex-row flex-col items-start justify-center'
            data-aos='fade-right'
          >
            <div className='w-full h-full bg-white/40 rounded-3xl flex lg:flex-row shadow-lg md:items-center flex-col items-start justify-center transition ease-in-out hover:-translate-y-2 hover:scale-105'>
              <div className='lg:w-4/12 md:w-3/6  h-11/12 m-4 border-white bg-white border-10 rounded-3xl'>
                <img src={b777x} className='rounded-2xl' alt='Boeing 777X with olympic mountain range background'/>
              </div>
              <div className='flex flex-col lg:mt-5 space-y-5 lg:w-8/12'>
                <div className='flex justify-center mt-3 items-center'>
                  <img src={boeing} className='lg:w-3/12 w-7/12' alt='Boeing Logo'/>
                </div>
                <h3 className='m-3 lg:mr-5'>
                  As a software engineer, I worked in the Integrated Modular Avionics team on the Common Core System,
                  which is the brains of the airplane.
                  I helped to design and develop tools to aid in the process of DO-178 and DO-330 software certification
                  of the 777X and
                  787 Dreamliner. For these tools, I migrated the tech stack to use modern frameworks to ease the
                  maintenance costs and
                  speed up development.
                  Additionally, I automated verification processes of aircraft system configuration files used by the
                  Common Core System
                  improving efficiency and lowering error rates.
                </h3>
              </div>
            </div>
          </div>
          <div
            className='h-full rounded-3xl mt-1 w-11/12 bg-clip-padding flex lg:flex-row flex-col items-start justify-center'
            data-aos='fade-left'
          >
            <div
              className='w-full h-full bg-white/40 rounded-3xl flex lg:flex-row md:items-center shadow-lg flex-col items-start justify-center transition ease-in-out hover:-translate-y-2 hover:scale-105'>
              <div className='lg:w-4/12 md:w-3/6  h-11/12 m-4 border-white bg-white border-10 rounded-3xl'>
                <img src={ninety8point6} className='rounded-2xl'
                     alt='98point6 App'/>
              </div>
              <div className='flex flex-col lg:mt-5 space-y-5 lg:w-8/12'>
                <div className='flex justify-center mt-3 items-center'>
                  <img src={nineLogo} className='lg:w-3/12 w-7/12'
                       alt='98point6 Logo'/>
                </div>
                {/*<h1 className='text-2xl'>98point6 Technologies</h1>*/}
                <h3 className='m-3 lg:mr-5'>
                  I started out at 98point6 as a backend engineer focused on creating health data integrations in a
                  microservice architecture
                  to support the virtual clinic which served over 35,000 patients a day. We created services to enable
                  features such as in app lab results, outbound health
                  data messaging for health systems, heart health monitoring, and a fully custom patient intake AI bot.
                  I
                  moved to a fullstack role later on where I worked
                  on the clinician console and the app used by patients. I also helped to create custom features for our
                  partner Transcarent who consumed our services.
                </h3>
              </div>
            </div>
          </div>
          <div
            className='h-full rounded-3xl mt-1 w-11/12 bg-clip-padding flex lg:flex-row flex-col items-start justify-center'
            data-aos='fade-right'
          >
            <div className='w-full h-full bg-white/40 rounded-3xl flex lg:flex-row shadow-lg flex-col md:items-center items-start justify-center transition ease-in-out hover:-translate-y-2 hover:scale-105'>
              <div className='lg:w-4/12 md:w-3/6  h-11/12 m-4 border-white bg-white border-10 rounded-3xl'>
                <img src={mcw} className='rounded-2xl' alt='Inception Health Logo'/>
              </div>
              <div className='flex flex-col lg:mt-5 space-y-5 lg:w-8/12'>
                <div className='flex justify-center mt-3 items-center'>
                  <img src={inception} className='lg:w-4/12 w-9/12'
                       alt='Inception Health App'/>
                </div>
                {/*<h1 className='text-2xl'>Inception Health</h1>*/}
                <h3 className='m-4 lg:mr-5'>
                  After working at Boeing for sometime, I realized I missed working in healthcare so I took a role as a
                  software engineer at Inception Health.
                  I work as fullstack engineer, to create features and support the Froedert & MCW App which provides
                  telehealth care to over 6,000 patients a day.
                  I have worked on the AI bot which is responsible for patient information intake, case prioritization,
                  and visit summaries.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='w-screen flex items-center flex-col text-center text-white font-primary justify-center bg-indigo-600'
        id='about-section'>
        <div className='w-11/12 h-7/12 max-w-[1500px] items-center my-10 flex-col space-y-4 flex' id='Experience Div'>
          <h1 className='text-white mb-8 font-primary text-2xl'>
            Stuff I know how to use (im really good at these things)
          </h1>
          <h1 className='text-white mb-8 font-primary text-md'>
            If something is not listed here, I can learn it pretty fast (im good at learning things and enjoy it)
          </h1>
          <div className='grid lg:grid-cols-4 text-xl md:grid-cols-2 grid-cols-1 gap-6'>
            <div className='flex flex-col space-y-7 justify-center items-center'>
              <img src={aws} alt='Amazon Web' className='w-7/12 mt-4'/>
              <h1>Amazon Web Services</h1>
            </div>
            <div className='flex flex-col space-y-7 justify-center items-center'>
              <img src={typescript} alt='Typescript' className='w-5/12 mt-4'/>
              <h1>TypeScript (and JavaScript)</h1>
            </div>
            <div className='flex flex-col space-y-7 justify-center items-center'>
              <img src={kotlin} alt='Kotlin' className='w-5/12 mt-4'/>
              <h1>Kotlin</h1>
            </div>
            <div className='flex flex-col space-y-7 justify-center items-center'>
              <img src={react} alt='React' className='w-1/2 mt-4'/>
              <h1>React</h1>
            </div>
            <div className='flex flex-col space-y-7 justify-center items-center'>
              <img src={gql} alt='GraphQL' className='w-1/2 mt-4'/>
              <h1>GraphQL</h1>
            </div>
            <div className='flex flex-col space-y-7 justify-center items-center'>
              <img src={cdk} alt='Amazon Web Service CDK' className='w-1/2 mt-4'/>
              <h1>AWS Cloud Development Kit</h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className='w-screen flex items-center flex-col text-center pt-5 text-white font-primary justify-center bg-teal-600'
        id='Projects'>
        <div className='w-11/12 h-7/12 max-w-[1500px] items-center my-10 flex-col space-y-4 flex' id='Experience Div'>
          <h1 className='mb-8 font-primary text-white text-2xl'>
            Projects (stuff i've made that I think is cool)
          </h1>
          <div className='grid lg:grid-cols-2 place-items-center md:grid-cols-2 grid-cols-1 gap-6'>
            <div
              className='h-full rounded-3xl p-3 lg:w-8/12 items-center bg-white/40 transition ease-in-out hover:-translate-y-2
            hover:scale-105 bg-clip-padding shadow-lg flex flex-col justify-center'
            >
              <div className='lg:w-10/12 md:w-5/6 border-white bg-white border-10 rounded-3xl'>
                <img src={gitmatch} className='rounded-2xl' alt='Inception Health Logo'/>
              </div>
              <div className='flex flex-col space-y-5 mt-3 items-center lg:w-11/12'>
                <h1 className='text-2xl'>gitmatch.io</h1>
                <h3 className='text-md'>
                  Our team was inspired by our university’s CS community.
                  Being surrounded by talented developers, and as developers ourselves,
                  we wanted to have a resource that would allow us to find projects we were passionate about.
                  The application connects the user with projects submitted by other developers that align with their
                  values and background through our matching algorithm.
                </h3>
                <a href='https://github.com/akumar282/Matchbox' target='_blank'
                   className='font-primary text-md text-center flex-col justify-center'>
                  <img className='mx-7 w-12 h-12 mb-3' src={github}/>repo
                </a>
              </div>
            </div>
            <div
              className='h-full rounded-3xl p-3 lg:w-8/12 items-center bg-white/40 transition ease-in-out hover:-translate-y-2
            hover:scale-105 bg-clip-padding shadow-lg flex flex-col justify-center'
            >
              <div className='lg:w-10/12 md:w-5/6 border-white bg-white border-10 rounded-3xl'>
                <img src={pglang} className='rounded-2xl' alt='Inception Health app'/>
              </div>
              <div className='flex flex-col items-center space-y-5 mt-3 lg:w-11/12'>
                <h1 className='text-2xl'>spin-service</h1>
                <h3 className='text-md'>
                  As a vinyl collector, I was fueled by hate whenever I missed an exclusive drop. I made this real-time
                  notification service to let me know whenever new vinyls drop based on what I want. Im still working on
                  this.
                </h3>
                <a href='https://github.com/akumar282/spin-service' target='_blank'
                   className='font-primary text-md text-center flex-col justify-center'>
                  <img className='mx-7 w-12 h-12 mb-3' src={github}/>repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='w-screen flex items-center flex-col text-center font-primary justify-center bg-teal-800'
        id='Other Info'>
        <div className='w-11/12 h-7/12 items-center my-10 flex-col space-y-4 flex' id='Experience Div'>
          <h1 className='mb-8 font-primary text-white text-2xl'>
            Heres my resume...
          </h1>
          <div className='flex flex-row items-center lg:space-x-7'>
            <a href='https://drive.google.com/file/d/1_GFYsQ-Fm_MwqjT7Sk__fPG74JJnjHSu/view?usp=sharing' target='_blank'
               className='font-primary text-md text-center text-white flex-col space-y-2 justify-center'>
              <img className='mx-7 w-12 h-12 font-bold' src={resume}/><h3 className='text-lg'>Resume</h3>
            </a>
          </div>
        </div>
      </div>
      <div
        className='w-screen flex items-center flex-col text-center font-primary justify-center bg-blue-600'
        id='Other Info'>
          <div className='flex-row my-10'>
            <h1 className='font-primary text-xl mb-3 px-4 text-white text-center'>Further Questions? Send me an email! (I will
              respond immediately)</h1>
            <button className='bg-indigo-800 shadow-2xl transition ease-in-out hover:-translate-y-2
            hover:scale-105 hover:bg-indigo-400 p-3 m-3 text-white rounded-2xl' onClick={() => window.location.href = 'mailto:abhi.kumar@outlook.com'}>Contact Me (abhi.kumar@outlook.com)</button>
          </div>
      </div>
      <div
        className='w-screen flex items-center flex-col text-white text-center font-primary justify-center bg-orange-500'
        id='Other Info'>
        <div className='w-11/12 h-7/12 items-center my-10 flex-col space-y-4 flex' id='Experience Div'>
          <h1 className='mb-8 font-primary text-white text-2xl'>
            You can also find me here...
          </h1>
          <div className='flex mt-10 mb-10 flex-row items-center lg:space-x-7'>
            <a href='https://www.linkedin.com/in/k-abhi/' target='_blank'
               className='font-primary text-md text-center flex-col justify-center'>
              <img className='mx-7 w-12 h-12' src={linkedin}/>linkedin
            </a>
            <a href='https://github.com/akumar282' target='_blank'
               className='font-primary text-md text-center flex-col justify-center'>
              <img className='mx-7 w-12 h-12' src={github}/>github
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
