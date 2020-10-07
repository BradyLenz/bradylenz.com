import { WorkSection } from "../models";

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
            logo: {
                src: '',
                alt: 'QGenda Logo'
            },
            descriptors: [],
            skills: [],
        },
        {
            company: 'Sudo.X',
            url: 'https://www.linkedin.com/company/sudo.x/about/',
            title: 'Co-Founder',
            duration: 'April 2017 - Current',
            isCurrent: true,
            location: 'Remote',
            logo: {
                src: '',
                alt: 'Sudo.X Logo'
            },
            descriptors: [],
            skills: [],
        },
        {
            company: 'QGenda',
            url: 'https://www.qgenda.com/',
            title: 'Software Engineer Intern',
            duration: 'Summer 2019',
            isCurrent: false,
            location: 'Atlanta, GA',
            logo: {
                src: '',
                alt: 'QGenda Logo'
            },
            descriptors: [],
            skills: [],
        },
        {
            company: 'TDS Telecom',
            url: 'https://tdstelecom.com/',
            abbreviation: 'TDS',
            title: 'Software Engineer Intern',
            duration: 'April 2018 - January 2020',
            isCurrent: false,
            location: 'Madison, WI',
            logo: {
                src: '',
                alt: 'TDS Logo'
            },
            descriptors: [],
            skills: [],
        },
    ],
}
