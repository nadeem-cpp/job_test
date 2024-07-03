export default class Job {
    title: string;
    description: string;
    jobType: string;
    skills: string[];
    education: string;
    experience: string;
    jobLocation:string;
    postedTime: number;
    constructor(title: string, description: string, skills: string[],
        jobType: string, education: string, experience: string, location:string) {
        this.title = title;
        this.description = description;
        this.jobType = jobType;
        this.skills = skills;
        this.education = education;
        this.experience = experience;
        this.jobLocation = location;
        this.postedTime = new Date().getTime();
    }
    getSummary() {
        return {
            title: this.title,
            description: this.description,
            skills: this.skills,
            jobType: this.jobType,
            education: this.education,
            experienceLevel: this.experience,
        };
    }
}