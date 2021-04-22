import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../styles/colors';

import userImg from '../assets/paulo.png';
import fonts from '../styles/fonts';

export function Header() {
  return (
    <View style={styles.container}>
        <View>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.userName}>Paulo Cabral</Text>
        </View>
        <Image source={userImg} style={styles.userImg}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40
  },
  userImg: {
    width: 70,
    height: 70,
    borderRadius: 35
  }
})