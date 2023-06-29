import { Rodape, ListaFooter, ItemFooter, RedesSociais, IconeSocial, ImgFooter } from '../styles/style'


const Footer = () => {
    return(
        <Rodape>
            <ImgFooter />
            <ListaFooter>
                <ItemFooter>Home</ItemFooter>
                <ItemFooter>Listar Heróis</ItemFooter>
                <ItemFooter>Desenvolvedor</ItemFooter>
            </ListaFooter>
            <RedesSociais>
                <IconeSocial>Instagram</IconeSocial>
                <IconeSocial>Linkedin</IconeSocial>
                <IconeSocial>GitHub</IconeSocial>
            </RedesSociais>
        </Rodape>
    )
}

export default Footer