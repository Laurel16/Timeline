import "./App.css";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaBirthdayCake  as IdIcon} from 'react-icons/fa';
import { MdGavel as BulletinIcon} from 'react-icons/md';
import { VscFileSubmodule as ProcedureIcon} from 'react-icons/vsc';
import { GrUserExpert as ExpertIcon} from 'react-icons/gr';
import { BsPeopleFill as SocialIcon} from 'react-icons/bs';
import { GiInjustice as JapIcon} from 'react-icons/gi';
import { GiPrisoner as SpipIcon} from 'react-icons/gi';
import { BiCheck} from 'react-icons/bi';
import { FaRegAddressCard} from 'react-icons/fa';
import { ImProfile} from 'react-icons/im';






import events from "./events";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function App() {
  let idIconStyles = { background: "#58f" };
  let bulletinIconStyles = { background: "#ff5733"};
  let procedureIconStyles = { background: "#f9c74f"};
  let expertIconStyles = { background: "#18b05a"};
  let socialIconStyles = { background: "#18b05a"};
  let japIconStyles = { background: " #db626c "};
  let spipIconStyles = { background: "#db626c"};

  return (
    <div>
      <h1 className="title">Dossier de personnalité</h1>
      <VerticalTimeline>
        {events.map((element) => {
          let isIdIcon = element.icon === "id";
          let isExpertIcon = element.icon === "expert";
          let isBulletinIcon = element.icon === "bulletin";
          let isProcedureIcon = element.icon === "procedures";
          let isSocialIcon = element.icon === "social";
          let isJapIcon = element.icon === "jap";
          let isSpipIcon = element.icon === "spip";


          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          let showListe =
            element.liste !== undefined &&
            element.liste !== null &&
            element.liste !== "";

          let showTag2 =
            element.tag2 !== undefined &&
            element.tag2 !== null &&
            element.tag2 !== "";

          let showAddress =
            element.address !== undefined &&
            element.address !== null &&
            element.address !== "";

           let showNumber =
            element.number !== undefined &&
            element.number !== null &&
            element.number !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isIdIcon ? idIconStyles : isExpertIcon ? expertIconStyles: isBulletinIcon ? bulletinIconStyles: isSocialIcon ? socialIconStyles: isJapIcon ? japIconStyles:  isSpipIcon ? spipIconStyles: isProcedureIcon ? procedureIconStyles: expertIconStyles }
              icon={isIdIcon ? <IdIcon /> : isExpertIcon ?  <ExpertIcon />: isBulletinIcon ? <BulletinIcon/>: isSocialIcon ? <SocialIcon />: isJapIcon ? <JapIcon />: isSpipIcon ? <SpipIcon />: isProcedureIcon ? <ProcedureIcon />: <ExpertIcon />}
            >
            <Button variant="outline-dark" className="tag"> {element.tag}</Button>
            {showTag2 && (
              <Button variant="outline-dark" className="tag2"> {element.tag2}</Button>
              )}
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <h5 className="vertical-timeline-element-subtitle">
                {element.tribunal}
              </h5>
              {showListe && (
                <ListGroup>
                  <ListGroup.Item className="list" id="liste"><BiCheck /> {element.liste}</ListGroup.Item>
                   <ListGroup.Item className="list" id="liste"><BiCheck /> {element.liste}</ListGroup.Item>
                </ListGroup>

                   )}
              { showAddress && (
                 <p className= "identity" id="address"><FaRegAddressCard size={22} style={{ marginBottom: '-5px', marginRight: "5px" }}/>  {element.address}</p>
                )
              }
              { showNumber && (
                 <p className= "identity" id="number"><ImProfile size={20} style={{ marginBottom: '-5px', marginRight: "5px" }}/>  {element.number}</p>
                )
              }

              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isIdIcon ? "idButton" : isExpertIcon ? "expertButton": isBulletinIcon ? "bulletinbutton" : isSocialIcon ? "socialbutton" : isSpipIcon ? "spipbutton" : isJapIcon ? "japbutton" : isProcedureIcon ? "proceduresbutton" : "expertButton"
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
