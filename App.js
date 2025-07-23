import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StatusBar, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// 导入页面组件
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import EducationScreen from './src/screens/EducationScreen';
import SkillsScreen from './src/screens/SkillsScreen';
import AwardsScreen from './src/screens/AwardsScreen';
import ContactScreen from './src/screens/ContactScreen';

// 创建底部导航
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="#6366f1" 
        translucent={false}
      />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'About':
                iconName = 'person';
                break;
              case 'Education':
                iconName = 'school';
                break;
              case 'Skills':
                iconName = 'build';
                break;
              case 'Awards':
                iconName = 'star';
                break;
              case 'Contact':
                iconName = 'contact-mail';
                break;
              default:
                iconName = 'help';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6366f1',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: styles.tabBar,
          headerStyle: styles.header,
          headerTintColor: '#fff',
          headerTitleStyle: styles.headerTitle,
        })}>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{title: '首页'}}
        />
        <Tab.Screen 
          name="About" 
          component={AboutScreen} 
          options={{title: '关于我'}}
        />
        <Tab.Screen 
          name="Education" 
          component={EducationScreen} 
          options={{title: '教育经历'}}
        />
        <Tab.Screen 
          name="Skills" 
          component={SkillsScreen} 
          options={{title: '专业技能'}}
        />
        <Tab.Screen 
          name="Awards" 
          component={AwardsScreen} 
          options={{title: '荣誉奖项'}}
        />
        <Tab.Screen 
          name="Contact" 
          component={ContactScreen} 
          options={{title: '联系方式'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingBottom: 5,
    paddingTop: 5,
    height: 60,
  },
  header: {
    backgroundColor: '#6366f1',
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default App;