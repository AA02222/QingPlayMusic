import { Component, CSSProperties } from 'react';
import { IconName } from "./type.ts";

interface IconProps {
  name: IconName,
  className?: string;
  style?: CSSProperties;
}

class Icon extends Component< IconProps > {
  constructor(props: IconProps) {
    super(props);
  }
  render() {
    const { name, className ,style} = this.props;
    return (
      <svg
        aria-hidden='true'
        className={className}
        style={style}
      >
        <use href={`#icon-${name}`} fill='currentColor' />
      </svg>
    );
  }
}

export default Icon;