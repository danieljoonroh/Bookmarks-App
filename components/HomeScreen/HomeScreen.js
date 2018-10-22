import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ContactList from './ContactList';

const url_contacts = 'http://localhost:3000/contact';

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            contacts: ""
        }
    }
    componentDidMount() {
        fetch(url_contacts, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            this.setState({ contacts: json})
        })
    }

  render() {
    //   console.log(this.state.contacts);
    return (
      <ScrollView style={styles.container}>
        <ContactList 
            allContacts={this.state.contacts}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
