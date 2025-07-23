import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

const {width, height} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const navigateToSection = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.heroSection}>
        <Animated.View
          style={[
            styles.heroContent,
            {
              opacity: fadeAnim,
              transform: [{translateY: slideAnim}],
            },
          ]}>
          {/* 头像部分 */}
          <Animatable.View 
            animation="bounceIn" 
            delay={500}
            style={styles.avatarContainer}>
            <Image
              source={{
                uri: 'https://via.placeholder.com/150x150/6366f1/ffffff?text=HCX',
              }}
              style={styles.avatar}
            />
          </Animatable.View>

          {/* 个人信息 */}
          <Animatable.View 
            animation="fadeInUp" 
            delay={800}
            style={styles.infoContainer}>
            <Text style={styles.greeting}>你好，我是</Text>
            <Text style={styles.name}>黄晨翔</Text>
            <Text style={styles.title}>工业设计专业学生 | 热爱设计与创新</Text>
            <Text style={styles.description}>
              一名充满创意和热情的工业设计师，专注于产品设计、用户界面设计和3D建模。
              具备多种设计软件技能，致力于创造优秀的设计作品。
            </Text>
          </Animatable.View>

          {/* 快速导航按钮 */}
          <Animatable.View 
            animation="fadeInUp" 
            delay={1200}
            style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.button, styles.primaryButton]}
              onPress={() => navigateToSection('About')}>
              <Text style={styles.primaryButtonText}>了解更多</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.secondaryButton]}
              onPress={() => navigateToSection('Contact')}>
              <Text style={styles.secondaryButtonText}>联系我</Text>
            </TouchableOpacity>
          </Animatable.View>
        </Animated.View>

        {/* 滚动指示器 */}
        <Animatable.View 
          animation="bounce" 
          iterationCount="infinite"
          style={styles.scrollIndicator}>
          <Icon name="keyboard-arrow-down" size={30} color="#fff" />
        </Animatable.View>
      </LinearGradient>

      {/* 快速信息卡片 */}
      <View style={styles.quickInfoSection}>
        <Text style={styles.sectionTitle}>快速了解</Text>
        <View style={styles.quickInfoGrid}>
          <Animatable.View 
            animation="fadeInLeft" 
            delay={300}
            style={styles.quickInfoCard}>
            <Icon name="person" size={30} color="#6366f1" />
            <Text style={styles.quickInfoTitle}>个人信息</Text>
            <Text style={styles.quickInfoText}>20岁 | 工业设计专业</Text>
            <Text style={styles.quickInfoText}>入党积极分子</Text>
          </Animatable.View>

          <Animatable.View 
            animation="fadeInRight" 
            delay={500}
            style={styles.quickInfoCard}>
            <Icon name="school" size={30} color="#6366f1" />
            <Text style={styles.quickInfoTitle}>教育背景</Text>
            <Text style={styles.quickInfoText}>武汉科技大学</Text>
            <Text style={styles.quickInfoText}>专业排名前30%</Text>
          </Animatable.View>

          <Animatable.View 
            animation="fadeInLeft" 
            delay={700}
            style={styles.quickInfoCard}>
            <Icon name="build" size={30} color="#6366f1" />
            <Text style={styles.quickInfoTitle}>核心技能</Text>
            <Text style={styles.quickInfoText}>设计软件专家</Text>
            <Text style={styles.quickInfoText}>3D建模 | AI工具</Text>
          </Animatable.View>

          <Animatable.View 
            animation="fadeInRight" 
            delay={900}
            style={styles.quickInfoCard}>
            <Icon name="star" size={30} color="#6366f1" />
            <Text style={styles.quickInfoTitle}>荣誉成就</Text>
            <Text style={styles.quickInfoText}>英语竞赛获奖</Text>
            <Text style={styles.quickInfoText}>优秀班干部</Text>
          </Animatable.View>
        </View>
      </View>

      {/* 联系信息预览 */}
      <View style={styles.contactPreview}>
        <Text style={styles.sectionTitle}>联系方式</Text>
        <View style={styles.contactInfo}>
          <View style={styles.contactItem}>
            <Icon name="phone" size={20} color="#6366f1" />
            <Text style={styles.contactText}>13720317900</Text>
          </View>
          <View style={styles.contactItem}>
            <Icon name="email" size={20} color="#6366f1" />
            <Text style={styles.contactText}>2607007440@qq.com</Text>
          </View>
          <View style={styles.contactItem}>
            <Icon name="chat" size={20} color="#6366f1" />
            <Text style={styles.contactText}>微信: hcx185381</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => navigateToSection('Contact')}>
          <Text style={styles.contactButtonText}>查看更多联系方式</Text>
          <Icon name="arrow-forward" size={16} color="#6366f1" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  heroSection: {
    height: height * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heroContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  avatarContainer: {
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  greeting: {
    fontSize: 18,
    color: '#fff',
    opacity: 0.9,
    marginBottom: 5,
  },
  name: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fbbf24',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  button: {
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 25,
    minWidth: 120,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#fbbf24',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#fff',
  },
  primaryButtonText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: 20,
  },
  quickInfoSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  quickInfoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15,
  },
  quickInfoCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    width: (width - 55) / 2,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  quickInfoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    marginBottom: 5,
  },
  quickInfoText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 16,
  },
  contactPreview: {
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 15,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  contactInfo: {
    marginBottom: 15,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    marginTop: 10,
  },
  contactButtonText: {
    color: '#6366f1',
    fontWeight: 'bold',
    marginRight: 5,
  },
});

export default HomeScreen;