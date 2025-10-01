import { PT_Sans_Caption } from 'next/font/google'
import Image from 'next/image'

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: '700',
})

const customerStories = [
  {
    content:
      'Creating my store with site.set was the best decision for my business. The platform is super intuitive, and I was able to put my products on sale in just a few minutes.',
    author: {
      name: 'Annete Bones',
      role: 'CEO at Anne Corp',
      avatar: '/customer-01.png',
    },
  },
  {
    content:
      'Turning my idea into an online store was easy and fast. I loved the customization options and the simplicity of managing orders. I can already see my products reaching more people!',
    author: {
      name: 'Jacob Jones',
      role: 'CEO at JJ Corp',
      avatar: '/customer-02.png',
    },
  },
]

export const CustomerStorySection = () => {
  return (
    <section className="container py-20 md:py-[128px]">
      <div className="flex flex-col items-center gap-12">
        <h2
          className={`${ptSansCaption.className} text-heading-xl text-gray-100`}
        >
          Those who use it, approve it!
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {customerStories.map((customerStory) => (
            <div
              key={customerStory.author.name}
              className="flex flex-col gap-6 rounded-lg bg-gray-500 p-6 md:p-12 justify-between"
            >
              <p className="text-gray-200 text-balance text-left italic">
                {customerStory.content}
              </p>

              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={customerStory.author.avatar}
                    alt={customerStory.author.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <strong className="text-gray-200 text-sm">
                    {customerStory.author.name}
                  </strong>
                  <span className="text-xs text-gray-300">
                    {customerStory.author.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}