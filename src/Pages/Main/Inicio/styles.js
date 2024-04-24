import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Img = styled.div`
    display: flex;
    min-height: 70vh;
    background-color: black;
    color: white;
    align-items: center;
    justify-content: center;
    font-size: 24px;
`

export const Container = styled.div`
    display: flex;
    background-color: cadetblue;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 25px;
`

export const Titulo = styled.h1`
    margin: 5px;
`

export const SubTitulo = styled.p`
    width: 75%;
`

export const Button = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #333;
    width: 35%;
    height: 40px;
    border: 3px solid gray;
    transition: background 0.3s;
    margin: 15px;
    text-decoration: none;
    color: white;

  &:hover {
    background: black;
  }
`;