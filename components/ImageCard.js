/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import { Text, View, Image, TouchableOpacity, Modal, Dimensions } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

class ImageCard extends Component {
constructor(props) {
  super(props)
 }
 state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
 render() {
    return (
        <View>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
            >
             <View>
                <TouchableOpacity
                  onPress={e =>
                    this.setModalVisible(!this.state.modalVisible)
                  }>
                  <Image
                     source={{uri: this.props.imgURL}}
                     style={{width: "100%", height: "100%"}}
                   />
                </TouchableOpacity>
              </View>
            </Modal>
           <TouchableOpacity onPress={e =>
                   this.setModalVisible(true)
                 }>
              <Image
                 source={{uri: this.props.imgURL}}
                 style={{width: (Dimensions.get('window').width / 2) - 20,
                   height: 150,
                   margin: 10}}
              />
           </TouchableOpacity>
          <Text>{this.props.authorName}</Text>
        </View>
    )
  }
}
export default ImageCard;
