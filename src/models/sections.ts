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

export interface WorkSection extends Section {

}

export interface ContactSection extends Section {
    message: string;
}
