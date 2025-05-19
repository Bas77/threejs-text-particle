import ParticleText from "./components/ParticleText"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
       <div className="w-full max-w-5xl flex-col flex">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Interactive Particle Text</h1>
        <div className="w-full h-full rounded-lg overflow-hidden">
          <ParticleText />
        </div>
        <div className="flex flex-col justify-center items-center">
        <p className="text-gray-400 mt-4 text-center">Move your mouse over the text to interact with the particles</p>
        <div className="text-6xl bold mt-10">Dominikus Sebastian Ramli</div>
        </div>
      </div>
    </main>
  )
}
