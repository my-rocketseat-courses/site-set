import { PT_Sans_Caption } from 'next/font/google'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ArrowRight, Store } from 'lucide-react'

export const CallToAction = () => {
  return (
    <section className="relative py-[88px] bg-[url(/call-to-action-bg.svg)] bg-no-repeat bg-cover mt-9">
      <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 p-4 bg-cyan-300 w-fit rounded-full">
        <Store className="text-cyan-100" />
      </div>
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">

          <h2
            className="font-sans text-gray-100 text-balance text-heading-xl"
          >
            Create a online store and start to sell today
          </h2>

          <Button variant="primary" asChild className="mt-6">
            <Link href="/create-store">
              Create store for free
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}