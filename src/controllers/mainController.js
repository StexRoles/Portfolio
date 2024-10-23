import fs from 'fs';
import path from 'path';

// SETTINGS TO USE dirname
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function to load JSON files
const loadJSON = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf-8"));

// MODULE FOR THE LOGIC AND PROCESSING OF THE APP
const mainController = {
    index: (req, res) => {

        const lang = res.locals.lang || 'en';
        
        // DATA OF TECHNOLOGIES
        const technologiesPath = path.join(__dirname, '..', 'model', lang, 'technologies.json');
        const technologies = loadJSON(technologiesPath);
        
        // DATA OF EDUCATION
        const educationPath = path.join(__dirname, '..', 'model', lang, 'education.json');
        const education = loadJSON(educationPath);

        res.render('index', { technologies, education, lang });

    },
    about: (req, res) => {

        const lang = res.locals.lang || 'en';

        // DATA OF SERVICES
         const servicesPath = path.join(__dirname, '..', 'model', lang, 'services.json');
         const services = loadJSON(servicesPath);
         
         // DATA OF HOBBIES
         const hobbiesPath = path.join(__dirname, '..', 'model', lang, 'hobbies.json');
         const hobbies = loadJSON(hobbiesPath);
        

         res.render('about', { services, hobbies, lang });
    },
    projects: (req, res) => {
        
        const lang = res.locals.lang || 'en';

        // DATA OF SERVICES
        const projectsPath = path.join(__dirname, '..', 'model', lang,  'projects.json');
        const projects = loadJSON(projectsPath);

        const numberProjects = projects.length;

        res.render('projects', { projects, numberProjects, lang });
    }
}

// EXPORT mainController FOR USE IN THE ROUTER
export default mainController;