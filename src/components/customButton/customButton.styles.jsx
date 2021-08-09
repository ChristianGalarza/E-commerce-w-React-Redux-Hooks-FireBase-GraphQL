import styled,{css} from "styled-components";

const buttonStyles = css`
background-color: black;
color: white;
border: none;

&:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
}
`;

const invertedButtonStyles=css`
    background-color: black;
    color: white;
    border: 1px solid black;
    transition:  .5s cubic-bezier(0.47, 0, 0.745, 0.715);

    &:hover{
      background-color: #15181b;
      color: white;
      border: none;
    }
`;

const googleSignInStyles=css`
    background-color: #2596f3;
    color: white;
    // border: none;
    transition: .25s cubic-bezier(0.47, 0, 0.745, 0.715);

    &:hover{
    background-color: #0d71bd;
    border: 1px solid black;
    }
`; 

const getButtonStyles = props => {
    if(props.isGoogleSignIn){
        return googleSignInStyles
    }
    return props.inverted ? invertedButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    // font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    transition: .25s cubic-bezier(0.47, 0, 0.745, 0.715);
    display: flex;
    justify-content: center;  
    
    ${getButtonStyles}
`;