import React from "react";
import "./Endpage.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { IconButton } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

const Endpage = () => {
  return (
    <div className="endpage">
      <div className="profile">
        <img
          src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Wink&eyebrowType=Default&mouthType=Default&skinColor=Light"
          alt="Favour Olowanifemi"
        />
        <h3>Favour Oluwanifemi</h3>
        <p>UI/UX Designer</p>
        <div className="profile-links">
          <a
            href="https://www.linkedin.com/in/favour-oluwanifemi-f-2b8016199/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </a>
          <a
            href="https://www.facebook.com/ayomiposi.nifemi.3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </a>
        </div>
      </div>

      <div className="profile">
        <img
          src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Wink&eyebrowType=Default&mouthType=Default&skinColor=Light"
          alt="David Asaolu"
        />
        <h3>David Asaolu</h3>
        <p>Web Developer</p>
        <div className="profile-links">
          <a
            href="https://www.linkedin.com/in/david-asaolu234/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </a>
          <a
            href="https://www.facebook.com/asaolu.david.9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </a>
          <a
            href="http://github.com/dha-stix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Endpage;
