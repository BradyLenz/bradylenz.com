import { WorkSection } from '../models';


export const workData: WorkSection = {
    header: 'Places I\'ve  worked',
    jobs: [
        {
            company: 'QGenda',
            url: 'https://www.qgenda.com/',
            title: 'Software Engineer',
            duration: 'February 2020 - Current',
            isCurrent: true,
            location: 'Atlanta, GA',
            descriptors: [
                'Work on a scrum team, participating in all aspects of the development process',
                'Build and maintain an automated physician scheduling platform',
                'Develop and enhance features, including changes to the core scheduling algorithm',
                'Utilize the MVC/CQRS architecture pattern',
            ],
            skills: [
                'C#',
                '.NET',
                'Entity Framework',
                'SQL Server',
                'React',
                'Redux',
                'TypeScript',
            ],
        },
        {
            company: 'Sudo.X',
            url: 'https://www.linkedin.com/company/sudo.x/about/',
            title: 'Co-Founder',
            duration: 'April 2017 - Current',
            isCurrent: true,
            location: 'Remote',
            descriptors: [
                'Manage project design and contribute to application development',
                'Explore software solutions in domains ranging from AI to workforce optimization',
            ],
            skills: [
                'AWS',
                'Auth0',
                'React',
                'TypeScript',
                'Node.js',
                'Postgres',
                'Python',
            ],
        },
        {
            company: 'QGenda',
            url: 'https://www.qgenda.com/',
            title: 'Software Engineer Intern',
            duration: 'Summer 2019',
            isCurrent: false,
            location: 'Atlanta, GA',
            descriptors: [
                'Worked on a team of developers, following agile development practices',
                'Developed and maintained code for various aspects of the QGenda dashboard',
            ],
            skills: [
                'C#',
                '.NET',
                'Entity Framework',
                'SQL Server',
                'React',
                'Redux',
                'TypeScript',
            ],
        },
        {
            company: 'TDS Telecom',
            url: 'https://tdstelecom.com/',
            abbreviation: 'TDS',
            title: 'Software Engineer Intern',
            duration: 'April 2018 - January 2020',
            isCurrent: false,
            location: 'Madison, WI',
            descriptors: [
                'Designed and implemented a service to aid in outage detection and response',
                'Engineered a set of implementations in Golang for CloudTV',
                'Gained experience in taking applications through the entire development life cycle',
            ],
            skills: [
                'Python',
                'Django',
                'Flask',
                'Couchbase',
                'Golang',
            ],
        },
    ],
};
