import Link from "next/link"
import Image from 'next/image'
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

export function FeatureSection() {
  return (

    <section className="container bg-gray-700 grid gap-6 md:grid-cols-2 pb-32 pt-24 md:py-10">
      <div className="flex flex-col gap-4 rounded-lg p-6 bg-gray-500 md:p-12">
        <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm uppercase">
          Simple
        </span>
        <h2 className="text-gray-100 text-heading-lg">
          Create an online product catalog in just a few minutes
        </h2>
      </div>

      <div className="flex flex-col gap-4 rounded-lg p-6 bg-gray-500 md:p-12">
        <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm uppercase">
          Practical
        </span>
        <h2 className="text-gray-100 text-heading-lg">
          Sell to your audience through a single platform
        </h2>
      </div>

      <div className="col-span-full flex flex-col gap-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 rounded-lg bg-gray-500 p-6 md:p-12">
          <div className="flex flex-col gap-4">
            <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm uppercase">
              Customisable
            </span>

            <h2 className="text-gray-100 text-heading-lg">
              Have a personalized online store that reflects your brand
            </h2>

            <Button
              asChild
              className="w-fit rounded-full hidden mt-4 md:mt-auto md:flex"
            >
              <Link href="/create-store">
                Create store for free
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full max-w-md overflow-hidden">
              <Image
                src="/feature-section.svg"
                alt="Features"
                width={440}
                height={330}
                className="object-contain w-full"
              />
            </div>
            <Button
              asChild
              className="w-full gap-2 rounded-full mt-4 md:mt-auto md:hidden"
            >
              <Link href="/create-store">
                Create store for free
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}