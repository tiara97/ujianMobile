import React from 'react'
import Axios from 'axios'
import { View, StyleSheet } from 'react-native'
import { Text, Card, Title, Paragraph, Button } from 'react-native-paper'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            confirmed: '',
            death: '',
            recovered: '',
        }
    }
    componentDidMount() {
        Axios.get('https://api.covid19api.com/summary')
            .then(res => {
                console.log(res.data.Global)
                this.setState({ confirmed: res.data.Global.TotalConfirmed, death: res.data.Global.TotalDeaths, recovered: res.data.Global.TotalRecovered })
            })
            .catch(err => console.log(err))
    }
    
    render() {
        return (
            <View style={styles.root}>
                <View style={styles.container}>
                    <Text style={styles.title}>Coronavirus live update</Text>
                    <View>
                        <Card style={styles.card}>
                            <Card.Title title="Confirmed Case" />
                            <Card.Content>
                                <Text>{this.state.confirmed}</Text>
                            </Card.Content>
                        </Card>
                        <Card style={styles.card}>
                            <Card.Title title="Total Death" />
                            <Card.Content>
                                <Text>{this.state.death}</Text>
                            </Card.Content>
                        </Card>
                        <Card style={styles.card}>
                            <Card.Title title="Total Recovered" />
                            <Card.Content>
                                <Text>{this.state.recovered}</Text>
                            </Card.Content>
                        </Card>
                    </View>
                </View>
                <View>
                    <Text>Health Tips</Text>
                    <Card>
                        <Card.Cover source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fthenounproject.com%2Fterm%2Fhand-wash%2F8138%2F&psig=AOvVaw0pv4bj4QBQpyw6ylId4DUH&ust=1599553075835000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDAzdrN1usCFQAAAAAdAAAAABAO' }} style={styles.cover} />
                    </Card>
                    <Card>
                        <Card.Cover source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fface-mask_2833278&psig=AOvVaw2UlSEwM0_xzBaUfhgvFQbl&ust=1599553185687000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjCk4_O1usCFQAAAAAdAAAAABAD' }} style={styles.cover} />
                    </Card>
                    <Card>
                        <Card.Cover source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fhome_25694&psig=AOvVaw0PNMtL_JtDFHSEspkJptT0&ust=1599553227254000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjv_6HO1usCFQAAAAAdAAAAABAD' }} style={styles.cover} />
                    </Card>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 5
    },
    container: {
        backgroundColor: 'red'
    },
    card: {
        borderRadius: 20
    },
    title: {
        fontSize: 28
    },
    cover : {
        height: 20,
        width: 20
    }
})
export default Home