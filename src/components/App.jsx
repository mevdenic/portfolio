import { Welcome } from "./Welcome";
import { MainWrapper } from "./MainWrapper";
import { NavBar } from "./NavBar";
import { SideLinks } from "./SideLinks";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

function App() {
    return (
        <>
            <SideLinks />
            <MainWrapper>
                <NavBar />
                <Welcome />
                <About />
                <Projects />
                <Contact />
            </MainWrapper>
        </>
    );
}

export default App;
