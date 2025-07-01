import NavBar from '@/components/NavBar'

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4 text-slate-900">Welcome to my website 👋</h1>
        <p className="text-red-500">
          I'm Zack!
        </p>
        <p className="test-bg">
          testing background
        </p>

        

      </div>
    </>
  )
}
