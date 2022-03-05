import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react';
import { Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {
    LineChart,
} from "react-native-chart-kit";

const { width, height } = Dimensions.get("window");

export default function Bitcoin() {
    const [period, setPeriod] = useState('1D');
    const activePeriodColor = '#e26a00';
    const [clicked, setClicked] = useState('1D');
    const [toggleIW, setToggleIW] = useState('Invest');
    return (
      <SafeAreaView style={styles.screen}>
            <ScrollView><View style={{
                width: '100%', height: '100%',
            }}>
          <View style={styles.logonameprice}>
              <View style={styles.logoname}>
                  <View>
                      <Image style={{width:60, height:60}} source={require('../images/icons8-bitcoin-480.png')}/>
                  </View>
                  <View style={{marginLeft: 7}}>
                      <Text style={{fontSize:20, fontWeight:'700', color:'black'}}>BTC</Text>
                      <Text style={{ color:'#c4c4c4'}}>Bitcoin</Text>
                  </View>
              </View>
              <View>
                  <View style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                  }}>
                  <Image style={{ width: 20, height: 19, justifyContent:'center', alignItems:'center' }} source={require('../images/icons8-rupee-96.png')} />
                  <View style={{ }}>
                          <Text style={{ fontSize: 20, fontWeight: '700', color: 'black', textAlign: 'right' }}>29,850.15</Text></View>
                  </View>
                      <Text style={{ color: '#c4c4c4', textAlign:'right' }}>1.00 BTC</Text>
              </View>
          </View>
          <View>
              <LineChart
                  data={{
                      labels: 
                          period === '1D' ? ['15.00', '16.00', '17.00', '18.00', '19.00', '20.00', '21.00', '22.00']
                              :
                              period === '1W' ? ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat']
                                  :
                                  period === '1M' ? ['1-8', '9-16', '17-24', '25-31']
                                      : period === '1Y' ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                                          : period==='4Y'?['4th yr', '3rd yr', '2nd yr', 'this yr']:[],
                      datasets: [
                          {
                              data: period === '1D' ?
                                  [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                  ] : period === '1W' ?
                                  [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                      ] : period === '1M' ?
                                          [
                                              Math.random() * 100,
                                              Math.random() * 100,
                                              Math.random() * 100,
                                              Math.random() * 100,
                                          ] : period === '1Y' ?
                                              [
                                                  Math.random() * 100,
                                                  Math.random() * 100,
                                                  Math.random() * 100,
                                                  Math.random() * 100,
                                                  Math.random() * 100,
                                                  Math.random() * 100,
                                                  Math.random() * 100,
                                                  Math.random() * 100,
                                                  Math.random() * 100,
                                                  Math.random() * 100,
                                                  Math.random() * 100,
                                                  Math.random() * 100,
                                              ] : period === '4Y' ?
                                                  [
                                                      Math.random() * 100,
                                                      Math.random() * 100,
                                                      Math.random() * 100,
                                                      Math.random() * 100,
                                                  ]:[]
                              
                          }
                      ]
                  }}
                  width={width*0.95} // from react-native
                  height={220}
                //   yAxisLabel="$"
                  yAxisSuffix="k"
                  yAxisInterval={1} // optional, defaults to 1
                  chartConfig={{
                      backgroundColor: "#e26a00",
                      backgroundGradientFrom: "#fb8c00",
                      backgroundGradientTo: "#ffa726",
                      decimalPlaces: 2, // optional, defaults to 2dp
                      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      style: {
                          borderRadius: 16
                      },
                      propsForDots: {
                          r: "6",
                          strokeWidth: "2",
                          stroke: "#ffa726"
                      }
                  }}
                  bezier
                  legend
                  style={{
                      marginVertical: 8,
                      borderRadius: 16
                  }}
              />
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginVertical: 15 }}>
              {
                  ['4Y', '1Y', '1M', '1W', '1D'].map(period => {
                      return <TouchableOpacity
                          key={period}
                                onPress={() => {
                                    setPeriod(period)
                                    setClicked(period)
                                }}
                                style={styles.periodbuttons}
                      >
                          <Text style={{ color: clicked === period ? activePeriodColor :'#919191'}}>{period}</Text>
                      </TouchableOpacity>
                  })
              }
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width:'100%'}}>
              {
                  ['Invest', 'Withdraw'].map(item => {
                      return <TouchableOpacity
                          onPress={() => {
                              setToggleIW(item)
                          }}
                          key={item}
                          style={{
                              width: '46%', justifyContent: 'center', alignItems: 'center', paddingVertical: 10, borderRadius: 6, borderColor: '#428bff', borderWidth:1,
                              backgroundColor: item === toggleIW ?'#428bff':'white'
                          }}
                      ><Text style={{ fontSize: 20, color: item === toggleIW ? 'white' :'#428bff'}}>{item}</Text></TouchableOpacity>
                  })
              }
          </View>
          <View style={{ height: 2, width: '100%', backgroundColor: '#d4d4d4', marginVertical: 15 }}></View>
          <View style={{width:'100%'}}>
              <Text style={{ color: 'black', fontSize: 20, fontWeight: '700', textAlign: 'left' }}>Stats</Text>
              {
                  [['Market Rank', '#1'], ['Market Dominance', '41.83%'], ['Market Cap', '$883,051,690,178.76'], ['Total Supply', '18,811,043 BTC']].map(item => {
                      return <View style={{marginTop:10}}>
                          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Text style={{ color:'#707070', fontSize:17, fontWeight:'600'}}>{item[0]}</Text>
                              <Text style={{ color: '#428bff', fontSize: 17, fontWeight: '600'}}>{item[1]}</Text>
                          </View>
                          <View style={{ height: 1, width: '100%', backgroundColor: '#ebebeb', marginVertical:10 }}></View>
                      </View>
                  })
              }
          </View>
                <View style={{ height: 2, width: '100%', backgroundColor: '#d4d4d4', marginVertical: 15 }}></View>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: '700', textAlign: 'left', marginVertical:7 }}>About Bitcoin</Text>
                <Text style={{ color: '#707070', fontSize: 17, fontWeight: '600' }}>
                    Bitcoin (B) is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaies.{'\n'}Transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain. Lorem ipsum dolor sit amet, consectetur elit. Transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain.Lorem ipsum dolor sit amet, consectetur elit.Transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain.Lorem ipsum dolor sit amet, consectetur elit.
                </Text>
                              </View></ScrollView>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // width: width,
        // height: height,
        padding: 10,
        // justifyContent: 'center',
        // alignItems:'center'
    },
    logonameprice: {
        width: '100%',
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0
    },
    logoname: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    periodbuttons: {
        borderColor: '#919191',
        borderWidth:1,
        borderRadius: 6,
        paddingHorizontal: 15,
        paddingVertical: 5,
        // backgroundColor:'red'
    }
})