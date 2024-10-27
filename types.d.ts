interface ExperienceData {
    _id: string;
    from: string;
    to: string;
    role: string;
    company: string;
    description: string;
    userID: string;
}

interface EducationData {
    _id: string;
    from: string;
    to: string;
    institution: string;
    level: string;
    description: string;
}

interface ImageData {
    height: number;
    width: number;
    format: string;
    folder: string;
    secure_url: string;
    publicID: string;
    _id: string;
}

interface SkillsData {
    _id: string;
    title: string;
    strength: number;
    category: string;
    userID: string;
}

interface WorksData {
    _id: string;
    banner: any;
    title: string;
    description: string;
    socials: { name: string; link: string }[];
}

interface ServicesData {
    _id: string;
    title: string;
    description: string;
    userID: string;
}

interface UserData {
    firstName: string;
    surname: string;
    email: string;
    contact: string;
    description: string;
    profile: any;
    occupation: string;
    services: ServicesData[];
    works: WorksData[];
    github: string;
    twitter: string;
    linkedIn: string;
}