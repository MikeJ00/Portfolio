import React from 'react';
import iconsSprite from '../../assets/images/icon-sprite.svg'

type IconPropType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    opacity?: string
    href?: string
}
export const Icon: React.FC<IconPropType> = (props: IconPropType) => {
    return (
        <>
            <svg width={props.width || "50"}
                 height={props.height || "50"}
                 viewBox={props.viewBox || "0 0 50 50"}
                 fill="none"
                 opacity={props.opacity || "1"}
                 xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
            </svg>
        </>
    );
};



