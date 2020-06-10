import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';

import styled from 'styled-components/native';

import appStyles from '../../theme/appStyles';
import sizes from '../../theme/fonts';

const Text = styled.Text`
  font-size: ${sizes.h1};
  margin-bottom: 20px;
`;

const HomeScreen = () => {
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

export default HomeScreen;
