import { Nav, ItemLista, Lista } from '../../styles/style'

const Menu = () => {
    return(
        <Nav>
            <Lista>
                <ItemLista>Home</ItemLista>
                <ItemLista>Lista de Heróis</ItemLista>
                <ItemLista>Desenvolvedor</ItemLista>
            </Lista>
        </Nav>
    )
}

export default Menu