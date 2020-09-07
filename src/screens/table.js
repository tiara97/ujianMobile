import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Text, DataTable } from 'react-native-paper'
import Axios from 'axios'

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        Axios.get('https://api.covid19api.com/summary')
            .then(res => {
                console.log(res.data.Countries)
                this.setState({data: res.data.Countries})
            })
            .catch(err => console.log(err))
    }
    table = () => {
        return this.state.data.map((item, index)=> {
            return (
                <DataTable.Row key={index}>
                    <DataTable.Cell>{item.Country}</DataTable.Cell>
                    <DataTable.Cell>{item.NewConfirmed}</DataTable.Cell>
                    <DataTable.Cell>{item.TotalConfirmed}</DataTable.Cell>
                    <DataTable.Cell>{item.TotalDeaths}</DataTable.Cell>
                    <DataTable.Cell>{item.TotalRecovered}</DataTable.Cell>
                </DataTable.Row>
        )
        })
    }
    render() {
        return (
            <View>
                <Text style={styles.title}>Live Update</Text>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Country</DataTable.Title>
                        <DataTable.Title numeric>New case</DataTable.Title>
                        <DataTable.Title numeric>Total Case</DataTable.Title>
                        <DataTable.Title numeric>Death</DataTable.Title>
                        <DataTable.Title numeric>Recovered</DataTable.Title>
                    </DataTable.Header>
                    <ScrollView>
                    {this.table()}
                    </ScrollView>
                </DataTable>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    title: {
        fontSize: 30
    }
})
export default Table