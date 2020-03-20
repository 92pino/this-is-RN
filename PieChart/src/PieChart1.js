import React, { useState, useEffect } from 'react';
import { Button, Dimensions, Text, View, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import PieChart from 'react-native-pie-chart';

const PeiChart1 = ({ navigation }) => {
  const [innerWidth, setInnerWidth] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);
  useEffect(() => {
    console.log(chart_wh);
  }, []);
  const chart_wh = 250;
  const series = [15, 25, 15, 40];
  const sliceColor = ['#8c70e6', '#8ce4f1', '#18ca96', '#4c89dc'];
 
  return (
    <ScrollView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={styles.title}>Pie Chart : react-native-pie-chart</Text>
        <View style={{position: 'relative'}}>
          <PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.60}
            coverFill={'#FFF'}
          />
          <View onLayout={e => {
            var {x, y, width, height} = e.nativeEvent.layout;
              setInnerWidth(width);
              setInnerHeight(height);
          }} style={{position: 'absolute', left: (chart_wh / 2) - (innerWidth / 2), top: (chart_wh / 2) - (innerHeight / 2), alignItems: 'center'}}>
            <Text style={{fontSize: 11}}>총 예산 대비</Text>
            <Text style={{fontSize: 30}}>{series[3]}%</Text>
          </View>
        </View>
        <Button title="버튼" onPress={() => navigation.navigate('PieChart2')} />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    margin: 10
  }
});

export default PeiChart1;
