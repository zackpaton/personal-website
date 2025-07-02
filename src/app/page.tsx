import NavBar from '@/components/NavBar'
import Image from 'next/image'
import headshot from '../../public/images/headshot.webp'

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background-second">
        <NavBar />

        <div className="flex items-center justify-center mt-[2vh] lg:mt-[15vh]">
          <div className="flex flex-col lg:flex-row items-center gap-[5vh] lg:gap-[5vw] p-[3vh]">
            <div className="text-center lg:text-left max-w-xs">
              <div className="text-sm md:text-base lg:text-lg font-small text-foreground">
                <p>
                  Hi! My name is Zack Paton, and I&apos;m a rising senior at Rensselaer Polytechnic Institute pursuing a bachelor&apos;s degree in Computer Science and Information Technology & Web Science.
                </p>
                <br />
                <p>
                  I built this website to showcase some of the skills I&apos;ve learned along the way. Besides this Home page, there&apos;s my Resume, Portfolio, and Contact information. Feel free to check out the rest of the site!
                </p>
                <br />
                <p>
                  -Zack
                </p>
              </div>
            </div>

            <Image
              src={headshot}
              alt="Headshot"
              width={400}
              height={400}
              priority
              className="rounded-lg shadow-2xl shadow-primary"
            />
          </div>
        </div>
      </div>
    </>
  )
}
