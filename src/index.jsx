import * as React from 'react';

const {
    useState,
    useEffect,
} = React;

var circleCount = 0;


const ExpandingCircle = ({
    fill,
    interval,
    duration,
    id,
}) => {

    const [radius, setRadius] = useState('0');
    
    useEffect(() => {
        var radiusTimeout = setTimeout(() => {
            setRadius('105%');
        }, interval);
        
        return function cleanup() {
            clearTimeout(radiusTimeout);
        };
    })

    return (
        <circle
            id={`circle_${id}`}
            style={{ transition: `r ${duration}s ease-out` }}
            r={radius}
            cx='50%'
            cy='50%'
            fill={fill}
        />
    )
}

export const SplashText = ({
    enterColors,
    exitColors,
    baseColor,
    interval,
    duration,
    text,
    textStyle,
    style,
}) => {
    const [fillColor, setBaseFillColor] = useState(baseColor);
    const [circles, setCircles] = useState([]);

    useEffect(() => {
        document.ontransitionend = () => {
            const color = circles[0].props.fill;
            setBaseFillColor(color);
            circles.shift();
        };
    })


    const mouseEnter = () => {
        var elements = [...circles];

        for(const index in enterColors) {
            const i = parseInt(index);
            const color = enterColors[i];


            elements.push(<ExpandingCircle
                fill={color}
                interval={interval * (i + 1)}
                duration={duration}
                key={`circle_${circleCount}`}
                id={circleCount}
            />);
            circleCount++;
        }

        setCircles(elements);
    };

    const mouseLeave = () => {
        var elements = [...circles];

        const colors = [...exitColors, baseColor];

        for(const index in colors) {
            const i = parseInt(index);
            const color = colors[i];

            elements.push(<ExpandingCircle
                fill={color}
                interval={interval * (i + 1)}
                duration={duration}
                key={`circle_${circleCount}`}
                id={circleCount}
            />);
            circleCount++;
        }

        setCircles(elements);
    }



    return (
        <svg id='container' style={{...style, overflow: 'visible'}}>
            <clipPath id='textClip'>
                <text x='50%' y='50%' textAnchor='middle' fontSize={textStyle.fontSize}>{text}</text>
            </clipPath>
            <g
                clipPath='url(#textClip)'
                onMouseEnter={() => mouseEnter()}
                onMouseLeave={() => mouseLeave()}
            >
                <circle
                    id='baseCircle'
                    r='105%'
                    cx='50%'
                    cy='50%'
                    fill={fillColor}
                />
                { circles }
            </g>
        </svg>
    );
};

SplashText.defaultProps = {
    enterColors: [],
    exitColors: [],
    baseColor: '#FFFFFF',
    interval: 20,
    duration: 2,
    text: '',
    textStyle: {
        fontSize: 20,
    },
    style: null,
}
