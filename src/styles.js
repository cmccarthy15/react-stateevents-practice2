import styled from 'styled-components'

const CardStyle = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    margin-bottom: 10px;
    color: white;
    width: 45vw;

    h3 {
        transition: font-size 1s;
        max-width: 90%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &:hover > h3 {
        font-size: 1.75em;
        text-align: center;
    } 

    &:hover > img {
        opacity: 0.5;
    }
`

const BeyImage = styled.img`
    max-height: 200px;
    max-width: 100%;
    transition: opacity 1s;
`

export { CardStyle, BeyImage }
