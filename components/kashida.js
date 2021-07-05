import React from 'react'
import styles from "../styles/landingPage.module.scss";

const kashidas = [
    { top: "15%", left: "11%" },
    { top: "14%", right: "11%" },
    { top: "25%", left: "35%" },
    { top: "30%", right: "24%" },
    { top: "65%", left: "18%" },
    { top: "65%", right: "20%" },
    { top: "80%", left: "6%" },
    { top: "85%", right: "32%" },
];

export default function Kashida() {

    const updateKashidaHoverState = (e, isHovered) => {

        if (!e || !e.target.id)
            return;
        const id = e.target.id;
        if (isHovered) {
            e.target.src = `/landingPage/${id}.png`;
            e.target.style.transform = 'scale(0.1, 0.1)'
            e.target.style.marginTop =
                ((e.target.clientHeight / 2) * -0.1).toString() + "px";

            if (e.target.style.left) {
                e.target.style.marginLeft =
                    ((e.target.clientWidth / 2) * -0.1).toString() + "px";
            } else {
                e.target.style.marginRight =
                    ((e.target.clientWidth / 2) * -0.1).toString() + "px";
            }
        } else {
            e.target.src = `/landingPage/Kashida ${id}.png`;
            e.target.style.transform = 'scale(0.5, 0.5)'
            e.target.style.marginTop = 0;
            e.target.style.marginLeft = 0;
            e.target.style.marginRight = 0;
        }
    };

    return (

        <div>
            {kashidas.map((position, index) => {
                return (
                    <div key={index}>
                        <img
                            src={`/landingPage/${index + 1}.png`}
                            style={{ display: "none", position: "absolute" }}
                        />
                        <img
                            id={index + 1}
                            className={styles.kashida}
                            style={{
                                position: 'absolute',
                                transformOrigin: position.left ? "left top" : "right top",
                                ...position,
                            }}
                            src={`/landingPage/Kashida ${index + 1}.png`}
                            onMouseEnter={(e) => updateKashidaHoverState(e, true)}
                            onMouseLeave={(e) => updateKashidaHoverState(e, false)}
                        />
                    </div>
                )
            })}
        </div>

    )
}
