import { ReactElement } from 'react';

interface Section {
    header: string;
}

export interface LandingSection {
    greeting: string;
    message: string;
}

export interface AboutMeSection extends Section {
    paragraphs: (string | ReactElement)[];
}

export interface EducationSection extends Section {

}

export interface WorkSection extends Section {

}

export interface ContactSection extends Section {

}
