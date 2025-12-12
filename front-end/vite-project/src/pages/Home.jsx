import Hero from "../components/sections/Hero.jsx";
import Skills from "../components/sections/Skills.jsx";
import ProjectPreview from "../components/sections/ProjectPreview.jsx";
import ContactCTA from "../components/sections/ContactCTA.jsx";


function Home() {
    return (
        <main>
            <Hero />
            <Skills />
            <ProjectPreview />
            <ContactCTA />
        </main>


    );
}

export default Home;