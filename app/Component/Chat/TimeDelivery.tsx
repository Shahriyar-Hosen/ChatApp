//import liraries
import moment from 'moment';
import {Icon} from 'native-base';
import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../Constant';

export interface ITimeDelivery {
  sender: any;
  item: any;
}

export const TimeDelivery: FC<ITimeDelivery> = ({item, sender}) => {
  return (
    <View
      style={[
        styles.mainView,
        {
          justifyContent: 'flex-end',
        },
      ]}>
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: 7,
          color: sender ? COLORS.white : COLORS.gray,
        }}>
        {moment(item.send_time).format('LLL')}
      </Text>

      <Icon
        name={'checkmark-done'}
        type="Ionicons"
        style={{
          color: item.seen ? COLORS.black : COLORS.white,
          fontSize: 15,
          marginLeft: 5,
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
});
