import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../theme/Colors";
import { Card } from "react-native-paper";


const HistoryListItem = ({ item }) => {

    const data = item.item;
    const navigation = useNavigation();
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
                <TouchableOpacity onPress={() => { navigation.navigate('HistoryDetail', { title: data.date, date: data.date, summary: data }) }}>
                    <View>
                        <Text style={styles.date}>{data.date}</Text>
                        <Text style={styles.header}>Daily Report:</Text>
                        <View style={styles.row}>
                            <Text style={styles.active}>Cases:{'\n'}{getLocaleNumber(data.dailyconfirmed)}</Text>
                            <Text style={styles.recovered}>Recovered:{'\n'}{getLocaleNumber(data.dailyrecovered)}</Text>
                            <Text style={styles.deceased}>Deceased:{'\n'}{getLocaleNumber(data.dailydeceased)}</Text>
                        </View>
                        <Text style={styles.header}>Total Statistics:</Text>
                        <View style={styles.row}>
                            <Text style={styles.active}>Total:{'\n'}{getLocaleNumber(data.totalconfirmed)}</Text>
                            <Text style={styles.recovered}>Recovered:{'\n'}{getLocaleNumber(data.totalrecovered)}</Text>
                            <Text style={styles.deceased}>Deceased:{'\n'}{getLocaleNumber(data.toatldeceased)}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Card.Content>
        </Card>
    )
};

const styles = StyleSheet.create({
    card: {
        borderColor: COLORS.primaryDark,
        borderWidth: 2,
        marginVertical: 10,
        marginHorizontal: 15,
        backgroundColor: 'white',
        borderRadius: 10
    },
    date: {
        fontSize: 22,
        fontWeight: '700',
        color: 'black',
        alignSelf: 'center'
    },
    header: {
        fontSize: 16,
        fontWeight: '500',
        color: COLORS.primary,
        padding: 5,
        marginTop:10,
        alignSelf: 'center',
    },
    row: {
        marginHorizontal: 20,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    active: {
        fontSize: 17,
        color: COLORS.pieBlue,
        textAlign: 'center'
    },
    recovered: {
        fontSize: 17,
        color: COLORS.pieGreen,
        textAlign: 'center'
    },
    deceased: {
        fontSize: 17,
        color: COLORS.pieRed,
        textAlign: 'center'
    }
});

export default HistoryListItem;