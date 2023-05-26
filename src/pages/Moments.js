import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../components/Particle";

// Components import ...
import MomentCard from "../components/MomentCard";

// Images import ...
import moment1 from "../assets/moments/moment1.jpg";
import moment2 from "../assets/moments/moment2.jpg";
import moment3 from "../assets/moments/moment3.jpg";
import moment4 from "../assets/moments/moment4.jpg";


function Moments() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    <strong className="purple">Memorable Moments </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are some of my memorable moments.
                </p>

                {/* Moment 1 */}
                <MomentCard imgPath={moment1} title="Prestigious Awards: Celebrating Excellence with Dr. Mustafa Akbor and Pro Vice Chancellor" 
                para1="Being honored by two eminent figures in academia at Sonargaon University was an extraordinary privilege. Professor Dr. Mustafa Akbor, a distinguished luminary from BUET, graciously presented me with a distinguished award for my exceptional achievements. Additionally, the esteemed Pro Vice Chancellor of Sonargaon University bestowed upon me another noteworthy accolade, embodying wisdom and grace."
                para2=" I am delighted to announce that my esteemed colleague, Sajib Adhikary, and I were honored as the 2nd Runner-up in the highly competitive project showcase during SU CSE Day-23. This prestigious title is a testament to our unwavering dedication, tireless efforts, and groundbreaking innovation in the field of computer science and engineering. Receiving these distinguished awards was a moment of exultation and profound gratitude, further validating our commitment to excellence and the invaluable support and guidance provided by Sonargaon University, a renowned institution dedicated to academic distinction."
                />

                {/* Moment 2 */}
                <MomentCard imgPath={moment2} title="Explaining the Project: Presenting PTMS to the Esteemed Judges"
                para1="Judge Panel: Dr. Mustafa Akbor, Professor, BUET; Bulbul Ahmed, Head and Associate Professor, CSE, Sonargaon University; MD Naderuzzaman, Assistant Professor, CSE, Sonargaon University; MD Ashfaqur Rahman, Lecturer, CSE, Sonargaon University"
                para2="I am delighted to announce that my esteemed colleague, Sajib Adhikary, and I were honored as the 2nd Runner-up in the highly competitive project showcase during SU CSE Day-23. This prestigious title is a testament to our unwavering dedication, tireless efforts, and groundbreaking innovation in the field of computer science and engineering. Receiving these distinguished awards was a moment of exultation and profound gratitude, further validating our commitment to excellence and the invaluable support and guidance provided by Sonargaon University, a renowned institution dedicated to academic distinction."
                />

                {/* Moment 3 */}
                <MomentCard imgPath={moment3} title="Prestigious ICT Division Certificate in Mobile Game and Application Development(Flutter)"
                para1="In February 2022, the ICT division of Bangladesh hosted an unforgettable ceremony at the prestigious Bangabandhu International Conference Center. Among the fortunate attendees, I had the honor of receiving a distinguished certificate for my accomplishment in completing the Mobile Game and Application Development course using Flutter."
                para2="The event was a grand celebration of technological achievements, bringing together industry professionals, government officials, and aspiring developers. The certificate not only symbolized my dedication and hard work but also recognized the significance of advanced digital skills in driving innovation and economic growth in Bangladesh. This recognition has further motivated me to continue my journey in the exciting world of mobile app development and contribute to the thriving ICT sector of the nation."
                />

                {/* Moment 4 */}
                <MomentCard imgPath={moment4} title="" />
            </Container>
        </Container>
    );
}

export default Moments;