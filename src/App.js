import './App.css'

import {Component} from 'react'

import Greetings from './components/Greetings'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    onActiveTab: {
      imgUrl: languageGreetingsList[0].imageUrl,
      imgAltTxt: languageGreetingsList[0].imageAltText,
    },
  }

  onChangeTabId = (imageUrl, txt) => {
    this.setState({onActiveTab: {imgUrl: imageUrl, imgAltTxt: txt}})
  }

  render() {
    const {onActiveTab} = this.state
    console.log(onActiveTab.imgAltTxt)
    return (
      <div className="main-app-container">
        <div className="app-container">
          <h1>Multilingual Greetings</h1>
          <ul>
            {languageGreetingsList.map(eachItem => (
              <Greetings
                greetingsList={eachItem}
                key={eachItem.id}
                onChangeTabId={this.onChangeTabId}
                activeStatus={onActiveTab.imgUrl === eachItem.imageUrl}
              />
            ))}
          </ul>
          <img src={onActiveTab.imgUrl} alt={onActiveTab.imgAltTxt} />
        </div>
      </div>
    )
  }
}

export default App
