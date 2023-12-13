import {Icon} from 'native-base';
import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-elements/dist/avatar/Avatar';
import {COLORS} from '../Constant/Color';
import {FONTS} from '../Constant/Font';

export const HomeHeader: FC = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        paddingHorizontal: 15,
        backgroundColor: COLORS.white,
        elevation: 2,
        paddingVertical: 15,
      }}>
      <Text style={styles.logo}>DEVELOPERS' SIN</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name="notifications"
          type="Ionicons"
          style={{color: COLORS.theme, marginRight: 7}}
        />
        <Avatar
          source={{
            uri: 'https://i.pinimg.com/originals/8e/21/29/8e2129f44804db65316ed3db92cf8552.jpg',
          }}
          rounded
          size="small"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    fontFamily: FONTS.Bold,
    color: COLORS.theme,
    fontSize: 22,
  },
});
