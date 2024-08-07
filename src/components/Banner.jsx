
import ParticleBackground from '../utility/ParticleBackground';

const Banner = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden m-12">
      <ParticleBackground />
      <div className="relative z-10 text-center text-white p-12 bg-[#875F9A] bg-opacity-80 rounded-lg shadow-lg max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-bold">Hello, I'm Mridula Chowdhary</h2>
        <p className="mt-4 text-xl md:text-2xl">Frontend Developer</p>
       
      </div>
    </section>
  );
};

export default Banner;
