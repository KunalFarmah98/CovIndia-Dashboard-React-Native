import React from "react";
import {View, Text } from 'react-native';
import Details from "../components/Details";

const Detail = ({route}) => {
    const data = route.params.data;
    console.info(data);
    return(
        <View>
            <Details active = {data.active} recovered = {data.recovered} deceased = {data.deaths} total = {data.confirmed}/>
            {data.deltaconfirmed>0 || data.deltarecovered>0 || data.deltadeaths>0?
                <Details active = {data.deltaconfirmed} recovered = {data.deltarecovered} deceased = {data.deltadeaths} total = {0} isRecent/>
                :
                null
            }
        </View>
    )
}

export default Detail;