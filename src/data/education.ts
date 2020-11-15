import { EducationSection } from '../models';
import * as uwmadison from '../assets/uwmadison.png';
import * as gatech from '../assets/gatech.png';


export const educationData: EducationSection = {
    header: 'Where I\'ve studied',
    universities: [
        {
            name: 'Georgia Institute of Technology',
            url: 'https://www.gatech.edu/',
            image: {
                src: gatech.default,
                alt: 'Georgia Tech Logo',
            },
            degreeText: 'M.S. in Computer Science',
            specialization: 'Computing Systems',
            duration: 'August 2020 - Current',
        },
        {
            name: 'University of Wisconsin, Madison',
            url: 'https://www.wisc.edu/',
            image: {
                src: uwmadison.default,
                alt: 'UW Madison Logo',
            },
            degreeText: 'B.S. in Computer Science and Mathematics',
            duration: 'September 2016 - December 2019',
        },
    ],
};
