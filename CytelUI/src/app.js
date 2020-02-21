import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'
import { store } from './store'
import Layout from './containers/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'

const configureStore = store()

class App extends React.Component {
    render() {
        return (
            <Provider store={configureStore}>
                <Layout></Layout>
            </Provider>
        )
    }
}

export default hot(App)
