import React from 'react'

import TransparentButton from "../transparent-button/TransparentButton";
import './head-component.css'

const HeadComponent = props => {
    return (
        <div
            className="head"
            style={{
                width: props.width,
                height: props.height
            }}
        >
            <h2 style={{fontSize: props.h2FontSize, margin: props.h2Margin}}>{props.h2}</h2>
            <div
                className="head-options"
                style={{
                    width: props.optionWidth,
                    margin: props.optionMargin,
                    display:props.display
                }}
            >
                {
                    !props.reverse? (
                        <>
                            <p>{props.p}</p>
                            <TransparentButton
                                width={props.btnWidth}
                                height={props.btnHeight}
                                onClick={props.onClick?() => props.onClick(): ()=>{}}
                            >{props.buttonValue}</TransparentButton>
                        </>):(
                        <>
                            <TransparentButton
                                width={props.btnWidth}
                                height={props.btnHeight}
                                onClick={props.onClick?() => props.onClick(): ()=>{}}
                            >{props.buttonValue}</TransparentButton>
                            <p>{props.p}</p>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default HeadComponent