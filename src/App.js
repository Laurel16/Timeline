import "./App.css";
import { FaBirthdayCake  as IdIcon} from 'react-icons/fa';
import { MdGavel as BulletinIcon} from 'react-icons/md';
import { GrUserExpert as ExpertIcon} from 'react-icons/gr';
import { BsPeopleFill as SocialIcon} from 'react-icons/bs';
import { GiInjustice as JapIcon} from 'react-icons/gi';
import { GiPrisoner as SpipIcon} from 'react-icons/gi';




import events from "./events";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function App() {
  let idIconStyles = { background: "#58f" };
  let bulletinIconStyles = { background: "#ff5733"};
  let expertIconStyles = { background: "#f9c74f"};
  let socialIconStyles = { background: "#18b05a"};
  let japIconStyles = { background: " #cd69d1 "};
  let spipIconStyles = { background: "#db626c"};

  return (
    <div>
      <h1 className="title">Exemple de timeline</h1>
      <VerticalTimeline>
        {events.map((element) => {
          let isIdIcon = element.icon === "id";
          let isExpertIcon = element.icon === "expert";
          let isBulletinIcon = element.icon === "bulletin";
          let isSocialIcon = element.icon === "social";
          let isJapIcon = element.icon === "jap";
          let isSpipIcon = element.icon === "spip";


          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isIdIcon ? idIconStyles : isExpertIcon ? expertIconStyles: isBulletinIcon ? bulletinIconStyles: isSocialIcon ? socialIconStyles: isJapIcon ? japIconStyles:  isSpipIcon ? spipIconStyles: expertIconStyles }
              icon={isIdIcon ? <IdIcon /> : isExpertIcon ?  <ExpertIcon />: isBulletinIcon ? <BulletinIcon/>: isSocialIcon ? <SocialIcon />: isJapIcon ? <JapIcon />: isSpipIcon ? <SpipIcon />: <ExpertIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isIdIcon ? "idButton" : isExpertIcon ? "expertButton": isBulletinIcon ? "bulletinbutton" : isSocialIcon ? "socialbutton" : isJapIcon ? "japbutton" : isSpipIcon ? "spipbutton" : "expertButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default App;
