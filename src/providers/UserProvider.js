import React from 'react'
import michael from '../components/michaelscott.png'

const UserContext = React.createContext()

export const UserConsumer = UserContext.Consumer

class UserProvider extends React.Component {
  state = { email: "test@test.com", 
            firstName: "Michael", 
            lastName: "Scott", 
            imageUrl: michael, 
            avatar: "", 
            superPower: "Epic Nosebleeds",
            updateUserInfo: (user) => this.updateUser(user) }
  
updateUser = (user) => {
  this.setState({...user})
}

  render(){
    return(
      <UserContext.Provider value={this.state}>
        { this.props.children }
      </UserContext.Provider>
    )
  }
}

export default UserProvider;
