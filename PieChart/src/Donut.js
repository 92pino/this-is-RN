import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Svg from 'react-native-svg';
import { VictoryPie, VictoryLabel } from 'victory-native';

// x : label text, y : value값
const data = [
  { x: 50, y: 10},
  { x: 100, y: 30},
  { x: 3, y: 3},
  { x: 3, y: 9},
  { x: 3, y: 20},
  { x: 3, y: 5},
  { x: 3, y: 5},
  { x: 3, y: 40},
];

const size = 280;
let sum = 0;

// 배열 전체 값 합
data.map(o => {
  sum += o.y;
});

var total = sum - data[data.length - 1].y;
// 전체 합 - 마지막 값 * 100 이후 소수점 버리기
let result = Math.floor((total / sum) * 100);

const Donut = () => {
  return (
    <View style={styles.container}>
      {/* <VictoryPie data={data} x='quarter' y='earnings' /> */}
      <Svg width={size} height={size}>
        <VictoryPie 
          standalone={false}
          width={size}
          height={size}
          data={data}       // 데이터
          innerRadius={size / 2}  // 내부 공백 사이즈
          labelRadius={0}   // 라벨 위치
          colorScale={[
            'red',
            'orange',
            'pink',
            'blue',
            'green',
            'purple',
            'white',
            'gray',
          ]} // 각 데이터별 color값
          style={{
            labels: {display: 'none'},
          }}
        />
        <VictoryLabel
          textAnchor="middle"
          verticalAnchor="middle"
          style={[
            // 배열로 각각 스타일을 줄수 있다.
            {
              fontSize: 20,
              fontWeight: '600',  // 폰트 두께
              fill: 'green',      // 글자 색상
            },
            {
              fontSize: 40,
              color: 'red',
              fontWeight: 'bold',
            },
          ]}
          lineHeight={[1.5, 1.5]}
          // label 중앙 정렬
          x={size * 0.5}
          y={size * 0.5}
          text={['총 예산 대비', `${result}%`]}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});

export default Donut;
