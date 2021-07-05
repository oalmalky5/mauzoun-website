import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useIntersection } from "react-use";

export const IntersectionContext = React.createContext({ inView: true });

export const IntersectionObserver = ({
    children,
    reset = false // if value set to true - observed element will reappear every time it shows up on the screen
}) => {
    const [inView, setInView] = useState(false);
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0
    });

    useEffect(() => {
        const inViewNow = intersection && intersection.intersectionRatio > 0;
        if (inViewNow) {
            return setInView(inViewNow);
        } else if (reset) {
            return setInView(false);
        }
    }, [intersection, reset]);

    return (
        <IntersectionContext.Provider value={{ inView }}>
            <div ref={intersectionRef}>{children}</div>
        </IntersectionContext.Provider>
    );
};

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/

import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

export function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}


const ProgressCircle = ({
    percents,
    stroke = 'black',
    // emptyStroke = "#e2e2e2",
    emptyStroke = stroke,
    emptyStrokeOpacity = 0.25,
    // emptyStrokeOpacity = 1,
    duration = 1,
    delay = 0.2,
    size = 100,
    strokeWidth = 1,
    content
}) => {
    const { inView } = useContext(IntersectionContext);
    const radius = 45;
    const circumference = Math.ceil(2 * Math.PI * radius);
    const fillPercents = Math.abs(
        Math.ceil((circumference / 100) * (percents - 100))
    );
    const locale = useRouter().locale

    const transition = {
        duration: duration,
        delay: delay,
        ease: "easeIn"
    };
    const circlePostion = locale === 'ar' ? {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    } : { }

    const variants = {
        hidden: {
            strokeDashoffset: circumference,
            transition
        },
        show: {
            strokeDashoffset: fillPercents,
            transition
        }
    };

    return (
        <>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div height={size} style={{
                    position: 'relative'
                }}>
                    <svg
                        viewBox="0 0 100 100"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width={size}
                        height={size}
                    >
                        <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            className="circle"
                            strokeWidth={strokeWidth}
                            stroke={emptyStroke}
                            strokeOpacity={emptyStrokeOpacity}
                            fill="transparent"
                        />
                    </svg>

                    <svg
                        viewBox="0 0 100 100"
                        width={size}
                        height={size}
                        style={{
                            position: "absolute",
                            transform: "rotate(-90deg)",
                            overflow: "visible",
                            marginLeft: -size,
                            ...circlePostion
                        }}
                    >

                        <motion.circle
                            cx="50"
                            cy="50"
                            r={radius}
                            strokeWidth={strokeWidth}
                            stroke={stroke}
                            fill="transparent"
                            strokeDashoffset={fillPercents}
                            strokeDasharray={circumference}
                            variants={variants}
                            initial="hidden"
                            animate={inView ? "show" : "hidden"}
                        />
                    </svg>
                </div>
                <div style={{
                    position: 'absolute',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    top: '20%',
                    left: '20%',
                    right: '20%',
                    bottom: '20%',
                }}>
                    {content}
                </div>
            </div>
        </>
    );
};

export default ProgressCircle;
