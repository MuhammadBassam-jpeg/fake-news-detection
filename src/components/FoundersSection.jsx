import React from "react";
import TiltedCard from './TiltedCard';
import "./FoundersSection.css";

const founders = [
  {
    name: "Ali Nazar",
    initials: "AN",
    role: "Co-Founder",
    bio: "Visionary entrepreneur with a passion for technology and innovation. Ali brings years of experience in product development and leadership.",
    tags: ["Strategy", "Leadership", "Innovation"],
  },
  {
    name: "Muhammad Bassam",
    initials: "MB",
    role: "Co-Founder",
    bio: "Expert in AI and data science, Muhammad is dedicated to building trustworthy technology for news verification and combating misinformation.",
    tags: ["AI", "Data Science", "Research"],
  },
];

export default function FoundersSection() {
  return (
    <section className="founders-section">
      <div className="founders-title">Meet Our Founders</div>
      <div className="founders-grid">
        {founders.map((founder, index) => (
          <div className="founder-card" key={founder.name}>
            <TiltedCard
                                   imageSrc={founder.name === "Muhammad Bassam" ? "/muhammad-bassam.jpg" : "/ali-nazar.jpg"}
              altText={`${founder.name} Avatar`}
              captionText=""
              containerHeight="260px"
              containerWidth="260px"
              imageHeight="260px"
              imageWidth="260px"
              rotateAmplitude={20}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
            />
            <div className="founder-info">
              <h3>{founder.name}</h3>
              <p>{founder.role}</p>
              <div className="founder-bio">
                {founder.bio}
              </div>
              <div className="founder-tags">
                {founder.tags.map((tag) => (
                  <span className="founder-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}