import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from "../theme/Colors";
import Statistics from "./Statistics";
import { Card } from "react-native-paper";


const ListItem = (item, format) => {

    const navigation = useNavigation();
    const data = item.item.item
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
                <TouchableOpacity onPress={() => { navigation.navigate('Detail', { title: data.state, data: data }) }}>
                    <View>
                        <Text style={styles.header}>{data.state}</Text>
                        <Text style={styles.total}>Total Cases: {getLocaleNumber(data.confirmed)}</Text>
                        {data.deltaconfirmed > 0 || data.deltarecovered > 0 || data.deltadeaths > 0 ?
                            <View>
                                <Statistics name="Recently Reported" active={data.deltaconfirmed} recovered={data.deltarecovered} deceased={data.deltadeaths} format={format} isRecent />
                                <Statistics name="Total Statistics" active={data.active} recovered={data.recovered} deceased={data.deaths} format={format} />
                            </View>
                            :
                            <Statistics name="" active={data.active} recovered={data.recovered} deceased={data.deaths} format={format} />
                        }

                    </View>
                </TouchableOpacity>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 15,
        marginVertical: 10,
        borderColor: COLORS.primaryDark,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 2
    },
    header: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: '700',
    },
    total: {
        color: COLORS.primary,
        fontSize: 17,
        textAlign: 'center',
        marginBottom: 10,
    }
})
export default ListItem;