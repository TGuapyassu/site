import { Button, Container, Img, SubTitulo, Titulo } from './styles'

const Inicio = () => {
    return (
        <>
            <Img>Suas fotos aqui</Img>
            <Container>
                <Titulo>Lorrayne Lovely</Titulo>
                <SubTitulo>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra aliquam sollicitudin. Morbi suscipit quam eu ultrices faucibus. Phasellus sollicitudin, velit in bibendum feugiat, mauris lorem consequat arcu, pellentesque pretium sapien risus eu augue. Ut volutpat nibh vel diam viverra, a feugiat mauris faucibus. Maecenas at tortor erat. Duis semper, ex at aliquam cursus, enim justo dictum arcu, consequat porta nisi orci et nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec consequat neque non neque tincidunt suscipit. Mauris laoreet eu felis dictum consectetur.
                </SubTitulo>
                <Button to={'https://api.whatsapp.com/send?phone=5521972922340'} target='_blank'>
                    Entre Em Contato
                </Button>
            </Container>
        </>
    )
}

export default Inicio