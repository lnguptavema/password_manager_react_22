import {Component} from 'react'

import {v4} from 'uuid'

import Password from './Password'

import './App.css'

class App extends Component {
  state = {
    inputWebsiteText: '',
    inputPasswordText: '',
    inputUsernameText: '',
    newlist: [],
    searchInput: '',
    isShowClicked: false,
  }

  onAdd = event => {
    event.preventDefault()
  }

  inputWebsite = event => {
    this.setState({inputWebsiteText: event.target.value})
  }

  inputUsername = event => {
    this.setState({inputUsernameText: event.target.value})
  }

  inputPassword = event => {
    this.setState({inputPasswordText: event.target.value})
  }

  filterListFunction = () => {
    const {newlist, searchInput} = this.state
    const filteredList = newlist.filter(eachItem =>
      eachItem.inputWebsiteText
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return filteredList
  }

  onchangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  clickedButtonBin = id => {
    const {newlist} = this.state
    const newListClick = newlist.filter(eachItem => eachItem.id !== id)
    this.setState({newlist: newListClick})
  }

  onchangecheck = () => {
    const {isShowClicked} = this.state
    this.setState({isShowClicked: !isShowClicked})
  }

  addOnclick = () => {
    const {inputPasswordText, inputUsernameText, inputWebsiteText} = this.state
    const newItem = {
      id: v4(),
      inputPasswordText,
      inputUsernameText,
      inputWebsiteText,
    }
    this.setState(prevState => ({
      newlist: [...prevState.newlist, newItem],
      inputWebsiteText: '',
      inputPasswordText: '',
      inputUsernameText: '',
    }))
  }

  render() {
    const {
      isShowClicked,
      newlist,
      inputWebsiteText,
      inputUsernameText,
      inputPasswordText,
    } = this.state
    const filterListNew = this.filterListFunction()
    return (
      <div className="mainContainer">
        <img
          className="passwordmgrImg"
          alt="app logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
        />
        <div className="containerInput">
          <div className="addNewContainer">
            <h1>Add New Password</h1>
            <form onSubmit={this.onAdd}>
              <div className="globeContainer">
                {' '}
                <img
                  className="globeImg"
                  alt="website"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                />
                <hr />
                <input
                  type="input"
                  value={inputWebsiteText}
                  onChange={this.inputWebsite}
                  className="inputGlobe"
                  placeholder="Enter Website"
                />
              </div>
              <div className="globeContainer">
                {' '}
                <img
                  className="globeImg"
                  alt="username"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png  "
                />
                <hr />
                <input
                  type="input"
                  className="inputGlobe"
                  value={inputUsernameText}
                  onChange={this.inputUsername}
                  placeholder="Enter Username"
                />
              </div>
              <div className="globeContainer">
                {' '}
                <img
                  className="globeImg"
                  alt="password"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                />
                <hr />
                <input
                  type="password"
                  className="inputGlobe"
                  value={inputPasswordText}
                  onChange={this.inputPassword}
                  placeholder="Enter Password"
                />
              </div>{' '}
              <div className="buttonContainer">
                <button
                  type="submit"
                  className="addButton"
                  onClick={this.addOnclick}
                >
                  Add
                </button>{' '}
              </div>
            </form>{' '}
          </div>
          <div>
            <img
              className="passwordImg"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
          </div>
        </div>
        <div className="passwordContaier">
          {' '}
          <div className="countContaier">
            <div className="countContaiercard1">
              {' '}
              <h1 className="yourPasswordHead">Your Passwords</h1>
              <p className="lengthText">{newlist.length}</p>
            </div>
            <div className="searchContainer">
              {' '}
              <img
                alt="search"
                className="searchImg"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
              />
              <hr className="hrTag" />
              <input
                type="search"
                className="searchInput"
                placeholder="Search"
                onChange={this.onchangeSearch}
              />
            </div>{' '}
          </div>{' '}
          <hr className="hrTagline" />
          <div className="checkboxContainer">
            <input
              type="checkbox"
              className="checkbox"
              id="input"
              onChange={this.onchangecheck}
            />
            <label htmlFor="input" className="passwordText">
              Show passwords
            </label>
          </div>{' '}
          <div className="containernoPass">
            {' '}
            {filterListNew.length > 0 ? (
              <ul>
                {' '}
                {filterListNew.map(eachItem => (
                  <Password
                    eachItem={eachItem}
                    clickedButtonBin={this.clickedButtonBin}
                    key={eachItem.id}
                    length={newlist.length}
                    isShowClicked={isShowClicked}
                  />
                ))}{' '}
              </ul>
            ) : (
              <div>
                <img
                  className="nopasswordImgs"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                  alt="no passwords"
                />
                <p className="nopasswordText">No Passwords</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App

// {newlist.map(eachItem => (
//                 <Password eachItem={eachItem} length={newlist.length} />
//               ))}
