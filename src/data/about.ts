import { AboutMeSection } from '../models';
import * as portrait from '../assets/portrait.jpg';


export const aboutMeData: AboutMeSection = {
    header: 'A little about me',
    portrait: {
        src: portrait.default,
        alt: 'Portrait',
    },
    paragraphs: [
        `
I am a full-stack software engineer based out of Atlanta, GA having particular interests in distributed and parallel systems, machine learning,
and optimization. I am a highly-motivated individual possessing excellent time management skills.
`,
        'I graduated from the University of Wisconsin, Madison, in December 2019 with degrees in computer science and mathematics.',
        `
Shortly after graduation, I joined QGenda as a full-stack software engineer. At QGenda, I work in a scrum team to build and maintain a cloud-based,
automated physician scheduling platform.
`,
        `
In addition to my work at QGenda, I am currently a graduate student at the Georgia Institute of Technology, where I study computer science,
specializing in computing systems.
`,
    ],
};
