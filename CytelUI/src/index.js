import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'isomorphic-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './styles.css'
import './styles.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt, faUser, faBell } from '@fortawesome/free-solid-svg-icons'

library.add(faTrashAlt, faUser, faBell)

var mountNode = document.getElementById('app')
ReactDOM.render(<App name="Jane" />, mountNode)
