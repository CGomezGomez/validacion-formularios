import { styled } from "styled-components";

const StyledContainer = styled.section`

    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10rem ;
`


const StyledH2 = styled.h2`

    color: #FFF;
    font-family: Poppins;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 55px;
    letter-spacing: -0.521px;

`

const StyledP = styled.p`

    color: #FFF;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    line-height: 26px;

`

const StyledButton = styled.button`

    width: 540px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #5E54A4;
    box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
    color: #FFF;
    text-align: center;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0.268px;
    border: none;
    margin: 0 0 2rem 0;
    cursor: pointer;
    
`

const StyledSpan = styled.a`

    color: rgba(255, 121, 121, 1);
    font-weight: 600;
    cursor: pointer;
 
`

const StyledText = styled.p`

    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    color: rgba(94, 84, 164, 1);

`
const StyledContainerForm = styled.form`

    padding:1rem 2rem;
    width: 540px;
    height: 474px;
    background: #FFF;

`


const StyledInput = styled.input`

  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  width: 460px;
  height: 56px;
  border-radius: 5px;
  border: 1px solid #5E54A4;
  background: #FFF;
  margin-bottom: 2rem;
  text-indent: 20px;
  padding-right: 28px;
 

`

const StyledErrorContainer = styled.div`

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
    position: relative;
    bottom: 30px;
    right: 20px;

`;

const StyledError = styled.h4`
   
    font-size: 12px;
    font-weight: 400;
    text-align: end;
    color: red;
    

`;

const StyledImage = styled.img`
    position: absolute;
    right: 30px;
    top: -100%;
 
`;

const StyledBtn = styled.input`

    width: 460px;
    height: 56px;
    border-radius: 5px;
    background: #38CC8B;
    box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.09) inset;
    color: #FFF;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 1px;
    cursor: pointer;
    border: none;

`


export {StyledContainer , StyledH2 , StyledP , StyledButton , StyledSpan ,  StyledInput , StyledBtn , StyledText , StyledContainerForm , StyledErrorContainer , StyledError , StyledImage }