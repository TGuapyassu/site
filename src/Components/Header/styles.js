import styled from 'styled-components'

export const Container = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #333;
    padding: 15px 20px;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: grid;
        height:${({ isOpen }) => isOpen ? '160px' : '65px'};
        grid-template-columns: repeat(2, 25%);
        justify-items: center;
        gap: 15px;
        overflow: hidden;
        transition: all 0.8s;
        justify-content: space-between;
    }
`


export const Title = styled.h1`
    font-size: 24px;
`;

export const NavigationList = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        grid-column: span 2;
    }

    li {
        font-size: 18px;
    }
           
    a {
        color: #fff;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
            color: #ff6347;
        }
    }
`;

export const SocialMediaList = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;

    @media screen and (max-width: 768px) {
        overflow: hidden;
        grid-column: span 2;
        padding: 25px;
    }

    li {
        font-size: 24px;
    }

    a {
        color: #fff;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
            color: #ff6347;
        }
    }
`;

export const MenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        display: block;
    }
`;

