// fetch('https://www.alphavantage.co/query?', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     function: 'TIME_SERIES_INTRADAY',
//     symbol: 'IBM',
//     interval: '1min',
//     apikey: 'VIK3UBASKVMF56SM'
//   })
// });

import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export function Singlestockapi (props:any) {

    const[isLoading,setLoading] = useState(true);
    const[dataSource,setData] = useState();

    useEffect(() => {
        async function getData() {
            await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo')
                .then ( (response) => response.json() )
                .then( (responseJson) => {

                console.log(responseJson)

                setData(responseJson);
                setLoading(false);
                console.log(dataSource);
            });
        }

        getData();
    },[isLoading]);

    return (
        <View>
            {dataSource && <View>
                <Text> Hello </Text>
                <Text> {dataSource["Meta Data"]["2. Symbol"]} </Text>
            </View>}
        </View>
    );

}