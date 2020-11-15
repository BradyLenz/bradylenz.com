import { Image } from './elements';


interface Section {
    header: string;
}

export interface LandingSection {
    greeting: string;
    message: string;
}

export interface AboutMeSection extends Section {
    paragraphs: string[];
    portrait: Image;
}

interface University {
    image: Image;
    url: string;
    name: string;
    duration: string;
    degreeText: string;
    specialization?: string;
}

export interface EducationSection extends Section {
    universities: University[];
}

interface Job {
    company: string;
    url: string;
    title: string;
    duration: string;
    isCurrent: boolean;
    location: string;
    descriptors: string[];
    skills: string[];
    abbreviation?: string;
}

export interface WorkSection extends Section {
    jobs: Job[];
}

export interface ContactSection extends Section {
    message: string;
}
