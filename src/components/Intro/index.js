import React, {useEffect, useState} from "react";
import InitialHome from "../Intro/InitialHome";
import Header from "../Intro/Header";
import Model from "./Model";

const Intro = ({ history }) => {
    const [layer, setLayer] = useState(0);
    let element =  document.getElementsByClassName("anc")[0];
    let renderLayer = null;

    const handleSwitch = (num) => {
        setLayer(num)
    };

    switch (layer) {
        case 1: {
            renderLayer = <Model />;
            break;
        }
        default: {
            renderLayer = <InitialHome handleSwitch={handleSwitch} />
        }
    }

    window.onscroll = () => {
        let offset = element?.getBoundingClientRect().top - element?.offsetParent.getBoundingClientRect().top;
        const top = window.pageYOffset + window.innerHeight - offset;
        if (top === element?.scrollHeight) {
            window.onscroll = null;
            history.push('/login');
        }
    };

    return (
        <div className="anc">
            <Header />
            {renderLayer}
        </div>
    )
};

export default Intro