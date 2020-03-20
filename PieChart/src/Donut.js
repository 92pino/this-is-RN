import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Svg from 'react-native-svg';
import { VictoryPie, VictoryLabel } from "victory-native";

// x : label text, y : value값
const data = [
  { x: 50, y: 10},
  { x: 100, y: 30},
  { x: 3, y: 3},
  { x: 3, y: 9},
  { x: 3, y: 20},
  { x: 3, y: 5},
  { x: 3, y: 5},
];

const Donut = () => {
  return (
    <View style={styles.container}>
      {/* <VictoryPie data={data} x="quarter" y="earnings" /> */}
      <Svg width={250} height={250}>
        <VictoryPie 
          standalone={false}
          width={250}
          height={250}
          data={data}       // 데이터
          innerRadius={45}  // 내부 공백 사이즈
          labelRadius={0}   // 라벨 위치
          colorScale={["red", "orange", "pink", "blue", "green", "purple", "white"]}  // 각 데이터별 color값
          style={{
            labels: { display: 'none' }
          }}
        />
        <VictoryLabel
          textAnchor="middle"
          verticalAnchor="middle"
          style={[
            {
              fontSize: 15,
              color: "#28323B",
              fontWeight: "600",
              lineHeight: 40
            },
            { fontWeight: "600", fontSize: 16 }
          ]}
          x={250 * 0.5}
          y={250 * 0.5}
          text={["2,717.3", "lbs of credit", "test"]}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});

export default Donut;
