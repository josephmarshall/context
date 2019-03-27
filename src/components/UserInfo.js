import React from 'react'
import { UserConsumer, } from '../providers/UserProvider'
import { Card, Image, Icon, Container as Cointainer, Form, Button, Header} from 'semantic-ui-react'

class UserInfo extends React.Component {
  state = { editUser: false,
            email: this.props.email,
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            superPower: this.props.superPower,
            imageUrl: this.props.imageUrl }
  
  toggleEditUser = () => {
    this.setState({editUser: !this.state.editUser})
  }

  handleSubmit = () => {
    this.props.updateUserInfo(this.state)
    this.toggleEditUser()
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    const { email, firstName, lastName, superPower, imageUrl } = this.props
    const { editUser, } = this.state

    return (editUser ? 
      <Cointainer>
        <Form>
          <Card style={{border: "4px solid grey"}}>
            <Image src={imageUrl} />
            <Card.Content>
              <Card.Header>
                <div style={{display: "flex", justifyContent: "flex-start"}}> 
                <input style={{width: this.state.firstName.length + "ch", fontWeight: "bold", height: "100%", padding: 0, border: "white"}}
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  name="firstName"
                  autoFocus
                  />
                <input style={{fontWeight: "bold", height: "100%", padding: 0, width: "50%", border: "white"}}
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  name="lastName"
                  />
                </div>
              </Card.Header>
              <Card.Meta>
                <div style={{display: "flex"}}>
                <div>email: </div>
                <input as={Header} style={{all: "unset", display: "inline", textAlign: "left", height: "100%", padding: 0, width: "100%", border: "white"}}
                  value={this.state.email}
                  onChange={this.handleChange}
                  name="email"
                  /> 
                </div>
              </Card.Meta>
              <Card.Description>
                <div style={{display: "flex"}}>
                <div style={{whiteSpace: "nowrap"}}>Super Power: </div>
                <input style={{all: "unset", textAlign: "left", height: "100%", padding: 0, width: "100%", border: "white"}}
                  value={this.state.superPower}
                  onChange={this.handleChange}
                  name="superPower"
                  />
                  </div>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
              <Icon name='user' />
              22 Friends
              </a>
            </Card.Content>
            <Button style={{color: "grey"}} color="black" inverted onClick={()=>this.handleSubmit()}>Submit</Button>
          </Card>
        </Form>
      </Cointainer>
    :
      <Cointainer>
        <Card style={{border: "4px solid black", borderRadius: 0}}>
          <Image src={imageUrl} />
          <Card.Content onClick={()=>this.toggleEditUser()}>
            <Card.Header>{firstName} {lastName}</Card.Header>
             <Card.Meta>
              <span className='date'>email: {email}</span>
            </Card.Meta>
            <Card.Description>Super Power: {superPower}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
            <Icon name='user' />
            22 Friends
            </a>
          </Card.Content>
          <Button style={{borderRadius: 0}} color="black" onClick={()=>this.toggleEditUser()}>Edit</Button>
        </Card>
      </Cointainer>
    )
  }
}

const ConnectedUserInfo = (props) => (
    <UserConsumer>
    { value => (
      <UserInfo 
      { ...value }
      />
      )}
    </UserConsumer>
)


export default ConnectedUserInfo