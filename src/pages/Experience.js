import React from 'react';
import { 
    VerticalTimeline, VerticalTimelineElement, 
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";

function Experience() {
    return(
        <div className="experience">
            <VerticalTimeline lineColor="#333333">
                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="2017-2019"
                iconStyle={{background: "#333333", color: "#ffff"}}
                icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Classe Préparatoire Lycée Blaise Pascal MPSI - MP*
                    </h3>

                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience;