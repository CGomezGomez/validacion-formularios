import { useState } from "react";
import { StyledContainer , StyledH2 , StyledP , StyledButton , StyledSpan , StyledContainerForm , StyledInput , StyledBtn , StyledText, StyledErrorContainer , StyledError, StyledImage } from "./styles";

const Form = () => {

    const [formValues , setFormValues ] = useState({

            firstName : {

                value : '' ,
                error: null 

            },
            lastName : {

                value : '' ,
                error: null 

            },
            email : {

                value : '' ,
                error: null 

            },
            password : {

                value : '' ,
                error: null 

            }


    });

    const {firstName , lastName , email , password} = formValues

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

                <StyledContainerForm  onSubmit={event => event.preventDefault()}>

                    <div>
                        <StyledInput 
                        type="text" 
                        name="name" 
                        placeholder="First Name"
                        onInput={event => checkName(event.target.value, formValues, setFormValues)}
                        />
                        {firstName.error && (
                       
                            <StyledErrorContainer >
                                <StyledError >
                                    {firstName.error}
                                </StyledError>
                                <StyledImage  src="/public/images/icon-error.svg" alt="" />
                            </StyledErrorContainer>
                         
                        
                        )}
                    </div>
                    <div>
                        <StyledInput 
                        type="text" 
                        name="lastName" 
                        placeholder="Last Name" 
                        onInput={event => checkLastName(event.target.value, formValues, setFormValues)}
                        />
                        {lastName.error && (
                           
                            <StyledErrorContainer >
                                <StyledError >
                                    {lastName.error}
                                </StyledError>
                                <StyledImage  src="/public/images/icon-error.svg" alt="" />
                            </StyledErrorContainer>
                          
                        )}
                        
                    </div>
                    <div>
                        <StyledInput 
                        type="text" 
                        name="email" 
                        placeholder="Email Address" 
                        onInput={event => checkEmail(event.target.value, formValues, setFormValues)}
            
                        />
                        {email.error && (
                           
                            <StyledErrorContainer >
                                <StyledError >
                                    {email.error}
                                </StyledError>
                                <StyledImage  src="/public/images/icon-error.svg" alt="" />
                            </StyledErrorContainer>
                          
                        )}
                    </div>
                    <div>
                       <StyledInput 
                       type="text" 
                       name="password"  
                       placeholder="Password"
                       onInput={event => checkPass(event.target.value, formValues, setFormValues)}
                       />
                           {password.error && (
                          
                            <StyledErrorContainer >
                                <StyledError >
                                    {password.error}
                                </StyledError>
                                <StyledImage  src="/public/images/icon-error.svg" alt="" />
                            </StyledErrorContainer>
                           
                        )}
                    </div>
                        <StyledBtn type='submit' value='CLAIM YOUR FREE TRIAL'></StyledBtn>
                        <StyledText>By clicking the button, you are agreeing to our <StyledSpan>Terms and Services</StyledSpan></StyledText>

                </StyledContainerForm>
                
            </div>

        </StyledContainer>
    </>
  )
};
   

const checkName = ( nameValue , formValues , setFormValues ) => {


    if(!nameValue){
        setFormValues({
            ...formValues , 
            firstName:{
                value: '' , 
                error: 'El campo no puede estar vacio'
            }
        });
    }else if(/[0-9]/.test(nameValue)){
        setFormValues({
            ...formValues , 
            firstName:{
                value: '' , 
                error: 'El campo no puede contener numeros'
            }
        });
    }else {
        setFormValues({
            ...formValues , 
            firstName:{
                value: nameValue , 
                error: null
            }
        });
    }

}

const checkLastName = ( nameValue , formValues , setFormValues ) => {


    if(!nameValue){
        setFormValues({
            ...formValues , 
            lastName:{
                value: '' , 
                error: 'El campo no puede estar vacio'
            }
        });
    }else if(/[0-9]/.test(nameValue)){
        setFormValues({
            ...formValues , 
            lastName:{
                value: '' , 
                error: 'El campo no puede contener numeros'
            }
        });
    }else {
        setFormValues({
            ...formValues , 
            lastName:{
                value: nameValue , 
                error: null
            }
        });
     }
}
const checkEmail = (nameValue, formValues, setFormValues) => {
    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  
    if (!nameValue) {
      setFormValues({
        ...formValues,
        email: {
          value: '',
          error: 'El campo no puede estar vacío',
        },
      });
    } else if (!emailRegex.test(nameValue)) {
      setFormValues({
        ...formValues,
        email: {
          value: nameValue,
          error: 'Por favor, introduce un correo electrónico válido',
        },
      });
    } else {
      setFormValues({
        ...formValues,
        email: {
          value: nameValue,
          error: null,
        },
      });
    }
  };

const checkPass = ( nameValue , formValues , setFormValues ) => {


            if(!nameValue){
                setFormValues({
                    ...formValues , 
                    password:{
                        value: '' , 
                        error: 'El campo no puede estar vacio'
                    }
                });
            }else {
                setFormValues({
                    ...formValues , 
                    password:{
                        value: nameValue , 
                        error: null
                    }
                });
            }
};

export default Form;