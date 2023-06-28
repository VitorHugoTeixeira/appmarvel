import Footer from "../components/Footer"
import Menu from "../components/Menu"
import Search from "../components/Search"
import React from 'react'

interface State {

}


class Main extends React.Component {

    state: State = {

    }

    render() {
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