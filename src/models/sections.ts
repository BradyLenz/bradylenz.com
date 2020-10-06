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

export interface EducationSection extends Section {

}

export interface WorkSection extends Section {

}

export interface ContactSection extends Section {
    message: string;
}
