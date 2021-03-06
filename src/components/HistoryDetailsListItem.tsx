import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from "../theme/Colors";
import { Card } from "react-native-paper";


const HistoryDetailsListItem = ({ name, item }) => {

    const data = item.item;
    console.log('props: ' + data);
    const getLocaleNumber = (val: String) => {
        if (val === undefined)
            return 0;
        val = val.toString();
        var lastThree = val.substring(val.length - 3);
        var otherNumbers = val.substring(0, val.length - 3);
        if (otherNumbers != '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        return res;
    }

    return (
        <Card style={styles.card} mode='elevated' elevation={10}>
            <Card.Content>
                <View >
                    <Text style={styles.date}>{data.loc}</Text>
                    <Text style={styles.header}>Total Cases: {getLocaleNumber(data.totalConfirmed)}</Text>
                    <View style={styles.row}>
                        <Text style={styles.recovered}>Recovered:{'\n'}{getLocaleNumber(data.discharged)}</Text>
                        <Text style={styles.deceased}>Deceased:{'\n'}{getLocaleNumber(data.deaths)}</Text>
                    </View>
                </View>
            </Card.Content>
        </Card>
    )
};

const styles = StyleSheet.create({
    card: {
        borderColor: COLORS.primaryDark,
        borderWidth: 3,
        marginVertical: 10,
        marginHorizontal: 15,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    date: {
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
        alignSelf: 'center',
        textAlign: 'center'
    },
    header: {
        fontSize: 17,
        fontWeight: '700',
        color: COLORS.primaryDark,
        marginTop: 5,
        textAlign: 'center',
        alignSelf: 'center',
    },
    row: {
        marginHorizontal: 20,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    recovered: {
        fontSize: 15,
        color: COLORS.pieGreen,
        textAlign: 'center'
    },
    deceased: {
        fontSize: 15,
        color: COLORS.pieRed,
        textAlign: 'center'
    }
});

export default HistoryDetailsListItem;