import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import SkillsPage from "./Pages/SkillsPage";
import ProjectsPage from "./Pages/ProjectsPage";
import EduPage from "./Pages/EduPage"
export default function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="about" element={<AboutPage/>}/>
      <Route path="skills" element={<SkillsPage/>}/>
      <Route path="edu" element={<EduPage/>}/>
      <Route path="projects" element={<ProjectsPage/>}/>
     </Routes>
     </BrowserRouter>
      </div>
  )
}
