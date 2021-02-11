import React from 'react'
import {NavPageContainer,AvatarView,
    Dialog,Alert,Button,ListItem} from '../../../../lib'
import AvatarImg from '../../../img/anim_avatar.jpeg'
import Img3 from '../../../img/illustration/3.jpg'
import Img2 from '../../../img/illustration/2.jpg'

class Lists extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showDialog :false,
            showAlert :false
        }
      }

    toggleDialog = () => {
        if(this.state.showDialog){
            this.setState({showDialog: false});
        }
        else {
            this.setState({showDialog: true}); 
        } 
    }

    toggleAlert = () => {
        if(this.state.showAlert){
            this.setState({showAlert: false});
        }
        else {
            this.setState({showAlert: true}); 
        } 
    }
    render() {
      return (
        <NavPageContainer 
            hasPadding>
                
        <h1>Dialogs</h1>

        <br/>
        <div className="app-flex-center">
        <AvatarView
            size="large" 
            src={AvatarImg}
            showDropShadow/>
            &nbsp;&nbsp;
            <div className="app-grid">
                <AvatarView
                    size="small" 
                    src={Img2}
                    showDropShadow/>
                &nbsp;
                <AvatarView
                    size="small" 
                    src={Img3}
                    showDropShadow/>
            </div>
        </div>


        <br/>
        <h3 className="m-b-15">Alert</h3>
        <Button value="Open Alert" 
            onClick={this.toggleAlert}
        />
        <br></br>

        <h3 className="m-b-15">Dialog</h3>
        <Button 
            value="Open Dialog" 
            onClick={this.toggleDialog}/>
  
        <Dialog 
          isVisible={this.state.showDialog}
          onBackdropPress={this.toggleDialog}>
            <ListItem 
                icon={<i className="icons10-contact-book bg-accent"></i>}
                title="Contacts"
                subtitle="5.6 MB"/>
            <ListItem 
                icon={<i className="icons10-news bg-accent"></i>}
                title="News"
                subtitle="12.0 MB"/>
            <ListItem 
                icon={<i className="icons10-paypal bg-accent"></i>}
                title="Payments"
                subtitle="24 MB"/>
               
            <div style={{padding:'10px',float:'right'}}>
                <button className="app-button" 
                    onClick={this.toggleDialog}>
                    <span>Close</span>
                </button>    
            </div>
        </Dialog>
  
        <Alert 
          isVisible={this.state.showAlert}
          onBackdropPress={this.toggleAlert}
          title="Alert"
          message="This is alert demo">
            <button className="app-alert-button" 
                onClick={this.toggleAlert}>OK
            </button>
        </Alert>

        <br/><br/>
  
        </NavPageContainer>
      );
    }
  }


export default Lists