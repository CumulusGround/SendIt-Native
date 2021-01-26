/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten TypeScript template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React from 'react';
import {
  ImageProps,
  SafeAreaView,
  SectionList,
  StyleSheet,
  View,
} from 'react-native';
import {
  ApplicationProvider,
  Avatar,
  Button,
  Card,
  Icon,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

const HeartIcon = (
  props?: Partial<ImageProps>,
): React.ReactElement<ImageProps> => <Icon {...props} name="plus-outline" />;

const SectionListListItem = ({
  location,
  difficulty,
  time,
}: {
  location: string;
  difficulty: string;
  time: string;
}) => (
  <Layout level="2" style={styles.listItem}>
    <View>
      <View style={styles.listItemText}>
        <Text category="h5" appearance="hint">
          {time}
        </Text>
        <Text
          category="h6"
          style={{marginLeft: 8, textTransform: 'capitalize'}}>
          {location}
        </Text>
      </View>
      <View style={styles.badge}>
        <Text>{difficulty}</Text>
      </View>
    </View>
    <Button
      style={styles.listItemButton}
      accessoryLeft={HeartIcon}
      appearance="outline"
      // size="tiny"
    />
  </Layout>
);

export default (): React.ReactFragment => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.dark}>
      {/* <SafeAreaView> */}
      <Layout style={styles.container}>
        <Layout level="4" style={styles.mainHeader}>
          <Text style={[styles.text, styles.mainHeaderTitle]} category="h1">
            SendIt
          </Text>
          <Avatar
            size="small"
            source={require('./assets/placeholders/avatar-placeholder.gif')}
          />
        </Layout>

        <Layout style={styles.main}>
          <SectionList
            sections={[
              {
                title: 'Today',
                data: [
                  {location: 'upper', difficulty: 'hard', time: '14.00'},
                  {location: 'upper', difficulty: 'hard', time: '14.00'},
                ],
              },
              {
                title: 'Tomorrow',
                data: [
                  {location: 'upper', difficulty: 'hard', time: '14.00'},
                  {location: 'upper', difficulty: 'hard', time: '14.00'},
                ],
              },
              {
                title: 'Tursd 12th',
                data: [
                  {location: 'upper', difficulty: 'hard', time: '14.00'},
                  {location: 'upper', difficulty: 'hard', time: '14.00'},
                ],
              },
            ]}
            renderItem={({item}) => <SectionListListItem {...item} />}
            renderSectionHeader={({section}) => (
              <Text category="h5" style={styles.listHeader}>
                {section.title}
              </Text>
            )}
            keyExtractor={(item, index) => index}
          />
        </Layout>

        <Button style={styles.likeButton} accessoryLeft={HeartIcon} />
      </Layout>
      {/* </SafeAreaView> */}
    </ApplicationProvider>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainHeader: {
    alignSelf: 'stretch',
    paddingVertical: 2,
    marginBottom: 16,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16, // gutters NOTE:
  },
  mainHeaderTitle: {},
  main: {paddingHorizontal: 16, alignSelf: 'stretch'},
  text: {
    textAlign: 'center',
  },
  listHeader: {marginVertical: 16},
  listItem: {
    marginBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    // border: 'color-primary-default-border',
    borderRadius: 16,
  },
  listItemText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  badge: {
    backgroundColor: 'red',
    borderRadius: 100,
    paddingVertical: 4,
    paddingHorizontal: 16,
    textAlign: 'center',
    alignSelf: 'flex-start',
  },
  listItemButton: {
    borderRadius: 1000,
    height: 16,
    width: 16,
  },
  likeButton: {
    margin: 16,
    height: 64,
    width: 64,
    borderRadius: 1000,
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 10,
    shadowColor: '#353535',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});
