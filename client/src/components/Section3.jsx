import React from 'react';
import styled from 'styled-components';


const data = [
    {
        type: 'merge',
        detail: 'merge lorem lorem lorem',
        color: '207'
    },
    {
        type: 'merge',
        detail: 'merge test lorem lorem',
        color: '207'

    },
    {
        type: 'commit',
        detail: 'commit lorem lorem lorem',
        color: '66'

    },
    {
        type: 'commit',
        detail: 'commit lorem lorem ',
        color: '66'

    },
    {
        type: 'merge',
        detail: 'merge lorem lorem lorem',
        color: '207'

    },
    {
        type: 'commit',
        detail: 'commit lorem lorem lorem',
        color: '66'
    },
    {
        type: 'merge',
        detail: 'merge lorem lorem lorem',
        color: '207'
    },
    {
        type: 'merge',
        detail: 'merge test lorem lorem',
        color: '207'
    },
    {
        type: 'commit',
        detail: 'commit lorem lorem lorem',
        color: '66'
    },
    {
        type: 'commit',
        detail: 'commit lorem lorem ',
        color: '66'
    },
    {
        type: 'merge',
        detail: 'merge lorem lorem lorem',
        color: '207'
    },
    {
        type: 'commit',
        detail: 'commit lorem lorem lorem',
        color: '340'
    },
    {
        type: 'merge',
        detail: 'merge lorem lorem lorem',
        color: '340'
    },
    {
        type: 'merge',
        detail: 'merge test lorem lorem',
        color: '340'
    },
    {
        type: 'commit',
        detail: 'commit lorem lorem lorem',
        color: '340'
    },
    {
        type: 'commit',
        detail: 'commit lorem lorem ',
        color: '340'
    },
    {
        type: 'merge',
        detail: 'merge lorem lorem lorem',
        color: '207'
    },
    {
        type: 'commit',
        detail: 'commit lorem lorem lorem',
        color: '207'
    },

]


const Bars = styled.div`
    margin: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    span{
        background: hsla(${props => props.color},100%,50%,0.1);
        width: ${props => `${props.width}px`};
        height:40px;
        display:flex;
        align-items: center;
        justify-self: right;
        border-right: 3px solid hsla(${props => props.color},100%,50%,1);
;
        .dot{
            width:16px;
            height:16px;
            background: hsla(${props => props.color},100%,50%,1);
            transform: translateX(-50%);
            border-radius:50%;
        }
        .circle{
            transform: translateX(-50%);
            background:hsla(${props => props.color},100%,50%,1);
            width:40px;
            height:40px;
            box-sizing:border-box;
            border:4px solid hsla(${props => props.color},100%,50%,1);
            border-radius:50%;
        }
    }
    div{
        text-align:left;
    }


`

const Section3 = () => {
    return (
        <>
            {
                data.map(({ type, detail, color }) => {
                    return <Bars width={type === 'merge' ? '400' : '300'} color={color}>
                        <span>
                            <div className={type === 'merge' ? 'dot' : 'circle'}></div>
                        </span>
                        <div style={{ color: `hsla(${color},100%,50%,1)` }}>{detail}</div>
                    </Bars>

                })
            }
        </>
    )
}


export default Section3
