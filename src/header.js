import React from "react"

class Header extends React.Component {
  render() {
    return (
      <header>
       <h1> Crop Swap</h1>
       <div>{this.props.children}

       </div>
      </header>
    )
  }
}

export default Header