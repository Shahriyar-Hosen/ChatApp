/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
//import liraries
import {Icon} from 'native-base';
import React from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {MsgComponent} from '../../Component/Chat';
import {COLORS} from '../../Component/Constant/Color';
import {ChatHeader} from '../../Component/Header';

// create a component
const Data = [
  {
    massage: 'Yes Ofcourse..',
    type: 'sender',
  },
  {
    massage: 'How are You ?',
    type: 'sender',
  },
  {
    massage: 'How Your Opinion about the one done app ?',
    type: 'sender',
  },
  {
    massage:
      'Well i am not satisfied with this design plzz make design better ',
    type: 'receiver',
  },
  {
    massage: 'could you plz change the design...',
    type: 'receiver',
  },
  {
    massage: 'How are You ?',
    type: 'sender',
  },
  {
    massage: 'How Your Opinion about the one done app ?',
    type: 'sender',
  },
  {
    massage:
      'Well i am not satisfied with this design plzz make design better ',
    type: 'receiver',
  },
  {
    massage: 'could you plz change the design...',
    type: 'receiver',
  },
  {
    massage: 'How are You ?',
    type: 'sender',
  },
  {
    massage: 'How Your Opinion about the one done app ?',
    type: 'sender',
  },
];

const SingleChat = props => {
  const {data} = props.route.params;

  // console.log("token",token)

  const [msg, setMsg] = React.useState('');
  const [disabled] = React.useState(false);
  const [setUpdate] = React.useState(false);
  const [allChat, setAllChat] = React.useState([]);

  return (
    <View style={styles.container}>
      <ChatHeader data={data} />
      <ImageBackground
        source={require('../../Assets/Background.jpg')}
        style={{flex: 1}}>
        <FlatList
          style={{flex: 1}}
          data={Data}
          showsVerticalScrollIndicator={false}
          //   keyExtractor={(item, index) => index}
          inverted
          renderItem={({item}) => {
            return (
              <MsgComponent
                sender={item.type === 'sender'}
                massage={item.massage}
                item={item}
              />
            );
          }}
        />
      </ImageBackground>

      <View
        style={{
          backgroundColor: COLORS.theme,
          elevation: 5,
          // height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 7,
          justifyContent: 'space-evenly',
        }}>
        <TextInput
          style={{
            backgroundColor: COLORS.white,
            width: '80%',
            borderRadius: 25,
            borderWidth: 0.5,
            borderColor: COLORS.white,
            paddingHorizontal: 15,
            color: COLORS.black,
          }}
          placeholder="type a message"
          placeholderTextColor={COLORS.black}
          multiline={true}
          value={msg}
          onChangeText={val => setMsg(val)}
        />

        <TouchableOpacity
          disabled={disabled}
          //    onPress={sendMsg}
        >
          <Icon
            style={{
              // marginHorizontal: 15,
              color: COLORS.white,
            }}
            name="paper-plane-sharp"
            type="Ionicons"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default SingleChat;
