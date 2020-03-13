import React, {useEffect, useCallback } from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getMaskRequest} from './Mask.Action';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const SecondScreen = ({ navigation }) => {

  const listMask = useSelector(state => state.getMask);
  const dispatch = useDispatch();
  const getMask = () => dispatch(getMaskRequest());
  
  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log(getMask())
    })
  }, [navigation]);
  
  const renderDataView = useCallback(() => {
    console.log(listMask);
    if (listMask.data) {
      return (
        <FlatList
          style={{flex: 1, paddingLeft: 10, paddingRight: 10}}
          data={listMask.data.stores}
          renderItem={({item}) => {
            if (item.remain_stat === 'some'){
              return (
                <View>
                  <Button title={item.name} onPress={() => console.log(1111)} />
                  <Text>{item.addr}</Text>
                  <Text>-------------------------------------------------------------</Text>
                </View>
              )
            }
          }}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <View style={{height: 10}} />}
          ListFooterComponent={() => <View style={{height: 10}} />}
        />
      );
    } else if (listMask.err) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Message err</Text>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Message err2</Text>
        </View>
      );
    }
  });
  
  return (
    <>
      {renderDataView()}
    </>
  )
};

export default SecondScreen;
