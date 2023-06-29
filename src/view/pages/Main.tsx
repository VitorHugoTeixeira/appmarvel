import Transaction from "../../models/Transaction"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import Search from "../components/Search"
import React from 'react'


interface State {

}

let transacao = new Transaction(12, 'skdjflsk', 1)

class Main extends React.Component {

    state: State = {

    }

    render() {
        {console.log(transacao.generateURL(transacao))}
        try {
            return (
                <>
                    <Menu />
                    <Search />
                    <Footer />
                </>
            )
        } catch (error: any) {
            <p>{error.message}</p>
        }
    }
}

export default Main