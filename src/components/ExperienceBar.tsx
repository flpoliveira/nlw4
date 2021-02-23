import * as React from "react";

interface ExperienceBarProps {
    maximun?: number;
    minimun?: number;
    experience?: number;
}
export default function ExperienceBar(props: ExperienceBarProps) {

    const maximun = props.maximun || 600;
    const minimun = props.minimun || 0;
    const experience = props.experience !== undefined ? props.experience : 300;
    
    return (
        <header className="experience-bar">
            <span>{minimun || 0} xp</span>
            <div>
                <div style={{ width: `${(100*experience) / maximun}%` }}/>
                <span className="current-experience" style={{ left: `${(100*experience) / maximun}%` }}>
                    {experience}
                </span>
            </div>
            <span>{maximun || 600} xp</span>
        </header>        
    );
}