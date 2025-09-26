import { Footer } from "../footer/footer";
import { Header } from "../header/header";

type LayoutProps = {
  children: React.ReactNode
}

export function Layout({children}: LayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-gray-700">
      <Header />
      <main className="flex-1 flex flex-col mb-12">
        {children}
      </main>
      <Footer />
    </div>
  )
}