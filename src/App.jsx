
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import ProjectSection from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import CodingProfile from './components/CodingProfile';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Skills />
      <ProjectSection />
      <CodingProfile />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
