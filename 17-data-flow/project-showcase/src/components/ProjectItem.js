import React, { useState } from "react";

function ProjectItem({ project }) {
  const { image, name, about, link, phase, claps } = project;
  const [newClaps, setNewClaps] = useState(claps);

  function handleClapClick() {
    setNewClaps((newClaps) => newClaps + 1);
  }

  return (
    <li className="card">
      <div className="image">
        <img src={image} alt={name} />
        <button onClick={handleClapClick} className="claps">
          👏{newClaps}
        </button>
      </div>

      <div className="details">
        <h4>{name}</h4>
        {about && <p>{about}</p>}
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </div>

      <div className="extra">
        <span className="badge blue">Phase {phase}</span>
      </div>
    </li>
  );
}

export default ProjectItem;
