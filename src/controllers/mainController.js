import fs from 'fs';
import path from 'path';

// SETTINGS TO USE dirname
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// MODULE FOR THE LOGIC AND PROCESSING OF THE APP
const mainController = {
    index: (req, res) => {

        // DATA OF TECHNOLOGIES
        let technologiesPath = path.join(__dirname, '..', 'model', 'technologies.json');
        let technologies = JSON.parse(fs.readFileSync(technologiesPath, "utf-8"));

        // DATA OF EDUCATION
        let educationPath = path.join(__dirname, '..', 'model', 'education.json');
        let education = JSON.parse(fs.readFileSync(educationPath, "utf-8"));

        res.render('index', {technologies, education});

    },
    about: (req, res) => {

        // DATA OF SERVICES
        let servicesPath = path.join(__dirname, '..', 'model', 'services.json');
        let services = JSON.parse(fs.readFileSync(servicesPath, "utf-8"));

        // DATA OF HOBBIES
        let hobbiesPath = path.join(__dirname, '..', 'model', 'hobbies.json');
        let hobbies = JSON.parse(fs.readFileSync(hobbiesPath, "utf-8"));

        res.render('about', {services, hobbies});
    },
    projects: (req, res) => {
        
        // DATA OF SERVICES
        let projectsPath = path.join(__dirname, '..', 'model', 'projects.json');
        let projects = JSON.parse(fs.readFileSync(projectsPath, "utf-8"));

        let numberProjects = projects.length;

        res.render('projects', {projects, numberProjects});
    }
}

// EXPORT mainController FOR USE IN THE ROUTER
export default mainController;