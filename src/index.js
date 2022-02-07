

import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    content: 'Artos Hellas',

  }

]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)

