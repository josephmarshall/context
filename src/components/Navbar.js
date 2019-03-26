import React from 'react'
import { Menu, } from 'semantic-ui-react'

class Navbar extends React.Component {
  render(){
    return(
      <Menu>
        <Menu.Item>
          Home
        </Menu.Item>
        <Menu.Item>
          User Info
        </Menu.Item>
      </Menu>
    )
  }
}

export default Navbar