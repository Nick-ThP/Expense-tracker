import React from 'react'
import ReactDOM from 'react-dom'
import { SpeechProvider } from '@speechly/react-client'
import App from './App'
import './index.css'
import { Provider } from './context/context'

ReactDOM.render(
    <SpeechProvider appId="89527d23-a924-47aa-8548-db4343112443" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>, 
    document.getElementById('root')
)