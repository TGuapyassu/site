import { Link } from 'react-router-dom';
import { Container, MenuButton, SocialMediaList, Title } from './styles';
import { FaBars, FaInstagram, FaTiktok, FaFacebook, FaYoutube, FaTimes, FaWhatsapp } from "react-icons/fa";
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    // const rotas = [
    //     { label: 'Home', to: '/' },
    // ];
    const redes = [
        { label: <FaInstagram />, to: 'https://www.instagram.com/lorraynelovely/' },
        { label: <FaTiktok />, to: 'https://www.tiktok.com/@lorraynelovely' },
        { label: <FaFacebook />, to: 'https://www.facebook.com/lorraynelovelyshow' },
        { label: <FaYoutube />, to: 'https://www.youtube.com/channel/UCn67KEAq2dryywOOJ0XRmRA' },
        { label: <FaWhatsapp />, to: 'https://api.whatsapp.com/send?phone=5521972922340' },
    ];

    return (
        <Container isOpen={isOpen}>
            <Title>Lorrayne</Title>
            <MenuButton onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </MenuButton>
            {/* <NavigationList>
                {rotas.map((rota, index) => (
                    <li key={index}>
                        <Link to={rota.to}>
                            {rota.label}
                        </Link>
                    </li>
                ))}
            </NavigationList> */}
            <SocialMediaList>
                {redes.map((rede, index) => (
                    <li key={index}>
                        <Link to={rede.to} target="_blank">
                            {rede.label}
                        </Link>
                    </li>
                ))}
            </SocialMediaList>
        </Container>
    );
};

export default Header;