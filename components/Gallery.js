/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { StyleSheet, Text, View, ScrollView, Image, AppRegistry, SafeAreaView, FlatList  } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import ImageCard from './ImageCard'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/Actions';

class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0');
    }

    render() {
        if (this.props.hasErrored) {
            return <Text>Sorry! There was an error loading the items</Text>;
        }
        if(this.props.isLoading){
          return <Spinner
            visible={this.props.isLoading}
            textContent={'Loading...'}
            textStyle={{color: '#FFF'}}
          />
        }

        return (
            <ScrollView>
             <FlatList style={styles.container}
               data={this.props.items}
               numColumns={2}
               renderItem={({item}) =>
                 <ImageCard imgURL={item["urls"]["full"]} authorName={item["user"]["name"]} />
               }
               keyExtractor={item => item["id"] }/>
            </ScrollView>
        );
    }
}

ItemList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display : "flex",
    flexDirection: "column",
    backgroundColor: '#F3F3F3'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
