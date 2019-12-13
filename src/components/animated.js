import React from "react";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";

const Animated = props => {
  const [spring, setSpring] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40, clamp: true }
  }));

  const calc = (x, y, element) => {
    const rect = element.getBoundingClientRect();
    const left = x - rect.x;
    const top = y - rect.y;
    return [
      -(top - rect.height / 2) / props.dampingFactor,
      (left - rect.width / 2) / props.dampingFactor,
      props.scaleFactor
    ];
  };

  const trans = (x, y, s) =>
    `perspective(${props.perspective}) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const _updateSpring = (x, y, element) =>
    setSpring({ xys: calc(x, y, element) });

  const _resetSpring = () => setSpring({ xys: [0, 0, 1] });

  return (
    <animated.div
      className={`animated ${props.className}`}
      onMouseMove={({ clientX: x, clientY: y, currentTarget }) =>
        _updateSpring(x, y, currentTarget)
      }
      onMouseLeave={_resetSpring}
      onTouchMove={({ touches, currentTarget }) => {
        _updateSpring(touches[0].clientX, touches[0].clientY, currentTarget);
      }}
      onTouchEnd={_resetSpring}
      style={{ transform: spring.xys.interpolate(trans) }}
    >
      {props.children}
    </animated.div>
  );
};

Animated.defaultProps = {
  dampingFactor: 20,
  perspective: "1200px",
  scaleFactor: 1.04
};

Animated.propTypes = {
  dampingFactor: PropTypes.number,
  perspective: PropTypes.string,
  scaleFactor: PropTypes.number
};

export default Animated;
