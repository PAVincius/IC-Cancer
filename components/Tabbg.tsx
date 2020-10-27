import React from "react"
import Svg, { Path, SvgProps } from "react-native-svg";

type Props = SvgProps & {
  color?: string;
};

export const TabBg: React.FC<Props> = ({
  color = '#4682B4',
  ...props
}) => {
  return (
    <Svg {...props} width={405} height={108.969} viewBox="0 0 405 108.969">
        <Path
          data-name="Tab Bar"
          d="M390 18v78.969H15V18h130.35c8.687 0 16.38 5.848 19.332 14.552 5.592 16.483 20.418 28.267 37.818 28.267s32.217-11.784 37.808-28.267C243.262 23.848 250.955 18 259.641 18z"
          fill="#4682B4"
        />
    </Svg>
  )
};
