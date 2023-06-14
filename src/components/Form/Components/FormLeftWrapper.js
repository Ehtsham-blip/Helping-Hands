import React from 'react'
import styled from 'styled-components'
import { FormState } from '../Form'
import { useContext } from 'react'

const FormLeftWrapper = () => {

  const Handler = useContext(FormState);
  return (
    <FormLeft>
        <FormInput>
            <label>Campaign Title</label>
            <Input placeholder='Campaign Title' onChange={Handler.FormHandler} value={Handler.form.campaignTitle}  name= 'campaignTitle'>
            </Input>
        </FormInput>
        <FormInput>
            <label>Camapign Story</label>
            <TextArea placeholder='Describe Your Campaign Story'  onChange={Handler.FormHandler} value={Handler.form.story}  name= 'story'>

            </TextArea>
        </FormInput>
    </FormLeft>
  )
}

const FormLeft = styled.div`
width: 48%;
`
const FormInput = styled.div`
display: flex;
flex-direction: column;
font-family: 'poppins';
margin-top: 10px;
`
const Input = styled.input`
padding: 15px;
background-color: ${(props)=> props.theme.bgDiv};
color:${(props)=> props.theme.color};
margin-top: 6px;
border: none;
border-radius: 10px;
outline: none;
font-size: large;
width: 100%;
border: 1px solid black;
`

const TextArea = styled.textarea`
padding: 15px;
background-color: ${(props)=> props.theme.bgDiv};
color:${(props)=> props.theme.color};
margin-top: 6px;
border: none;
border-radius: 10px;
outline: none;
font-size: large;
border: 1px solid black;
max-width: 100%;
min-width: 100%;
overflow-x:hidden;

`

export default FormLeftWrapper
