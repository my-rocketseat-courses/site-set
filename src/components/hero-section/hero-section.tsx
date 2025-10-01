import { ArrowRight, Clock, Store } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

export const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center mt-16 py-2">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[20rem] md:h-[36rem] items-center">
        <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
          <h1 className="text-gray-100 text-heading-hg">
            Sell your products as an affiliate in one place.
          </h1>

          <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
            <div>
              <div className="flex items-center gap-2">
                <Clock className="text-cyan-100 h-4 w-4" />
                <span className="text-gray-200">
                  Create your website in less than 5 minutes
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Store className="text-cyan-100 h-4 w-4" />
                <span className="text-gray-200">
                  Follow and optimize your business online
                </span>
              </div>
            </div>

            <div className="text-white flex flex-col gap-2 mt-5 items-center md:items-start ls:items-start">
              <Button className="rounded-full w-fit" asChild>
                <Link href="/create-store">
                  Create store for free
                  <ArrowRight />
                </Link>
              </Button>

              <p className="text-gray-300 text-body-xs">
                Don't need credit card
              </p>
            </div>
          </div>
        </div>
        <div className="absolute right-0 h-[20rem] hidden md:h-full order-first md:order-last items-center justify-center md:flex lg:flex">
          <Image
            src="/hero-section-bg.svg"
            alt="Ilustration with store icons, tag, and bag."
            width={200}
            height={400}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}