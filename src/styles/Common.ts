import {theme} from "styles/Theme";

type FontType = {
  family?: string
  weight?: number
  color?: string
  lineHeight?: number
  Fmin?: number
  Fmax?: number
}
export const font = ({family,weight,color,lineHeight,Fmin,Fmax}:FontType) => `
  font-family:${family || "Poppins"};
  font-weight: ${weight || 400};
  color: ${color || theme.colors.font};
  line-height: ${lineHeight || 1.2};
  font-size: calc( (100vw - 360px)/(1360 - 360) * (${Fmax} - ${Fmin} ) + ${Fmin}px);
`