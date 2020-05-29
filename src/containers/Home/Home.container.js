import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

import appStyles from '../../theme/appStyles';
import sizes from '../../theme/fonts';

const HomeContainer = () => {
  const { t, i18n } = useTranslation();

  const setLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <View style={[appStyles.flex, appStyles.center]}>
      <Text style={styles.title}>{t('hello')}</Text>

      <TouchableOpacity onPress={setLanguage}>
        <Text>{t('change')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: sizes.h1,
    marginBottom: 20,
  },
});

export default HomeContainer;
