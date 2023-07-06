import { StyledContainer , StyledH2 , StyledP , StyledButton , StyledSpan , StyledContainerForm , StyledInput , StyledBtn , StyledText } from "./styles";

const Form = () => {

  return (

    <>
        <StyledContainer>
            <div>
                <StyledH2>Learn to code by watching others</StyledH2>
                <StyledP>See how experienced developers solve problems in real-time.<br/>
                Watching scripted tutorials is grat, but understanding how developers think is invaluable</StyledP>
            </div>
            <div>
                <StyledButton>Try is free 7 days <span>then $20/mo. thereafter</span></StyledButton>
                <StyledContainerForm>

                    
                        <StyledInput type="text" name="name" placeholder="First Name" />
                        <StyledInput type="text" name="surname" placeholder="Last Name" />
                        <StyledInput type="text" name="email" placeholder="Email Address" />
                        <StyledInput type="text" name="password"  placeholder="Password" />
                        <StyledBtn>CLAIM YOUR FREE TRIAL</StyledBtn>
                        <StyledText>By clicking the button, you are agreeing to our <StyledSpan>Terms and Services</StyledSpan></StyledText>
                   

                </StyledContainerForm>
            </div>
        </StyledContainer>
    </>
  )
}

export default Form;