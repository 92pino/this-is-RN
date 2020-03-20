import React, { useState, useEffect } from 'react';
import { Button, Dimensions, Text, View, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import {PieChart} from 'react-native-chart-kit';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [{
    data: [
      50,
      20,
      2,
      86,
      71,
      100
    ],
    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
  },{
    data: [
      20,
      10,
      4,
      56,
      87,
      90
    ]
  },{
    data: [
      30,
      90,
      67,
      54,
      10,
      2
    ]
  }]
}

const pieChartData = [
  { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
]

const chartConfigs = [
  {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  }
]

const PieChart2 = ({ navigation }) => {
  const width = Dimensions.get('window').width;
  const height = 220;

  return (
    <View>
      <StatusBar hidden={true} />
      <Text>&nbsp;</Text>
      <Text>Pie Chart : Use react-native-chart</Text>
      
      <View>
        {chartConfigs.map(chartConfig => {
          console.log(chartConfig)
          const graphStyle = {
            marginVertical: 8,
            ...chartConfig.style,
          };

          return (
            <PieChart
              data={pieChartData}
              height={height}
              width={width}
              chartConfig={chartConfig}
              accessor="population"
              style={graphStyle}
            />
          );
        })}
      </View>
      <Button title="버튼" onPress={() => navigation.navigate('Donut')} />
    </View>
  );
};

export default PieChart2;
