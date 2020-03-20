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

const size = 500;

const Donut = () => {
  return (
    <View style={styles.container}>
      {/* <VictoryPie data={data} x="quarter" y="earnings" /> */}
      <Svg width={size} height={size}>
        <VictoryPie 
          standalone={false}
          width={size}
          height={size}
          data={data}       // 데이터
          innerRadius={size / 4}  // 내부 공백 사이즈
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
            // 배열로 각각 스타일을 줄수 있다.
            {
              fontSize: 30,
              color: 'red',
              fontWeight: "600",
              lineHeight: 40
            },
            {
              fontSize: 30,
              color: 'red',
              fontWeight: "bold",
              lineHeight: 40
            }
          ]}
          // label 중앙 정렬
          x={size * 0.5}
          y={size * 0.5}
          text={["2,717.3", "lbs of credit", `${data[0].y + data[1].y + data[2].y}`]}
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
