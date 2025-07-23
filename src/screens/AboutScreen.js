import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

const {width} = Dimensions.get('window');

const AboutScreen = () => {
  const personalInfo = [
    {icon: 'person', label: '姓名', value: '黄晨翔'},
    {icon: 'cake', label: '年龄', value: '20岁'},
    {icon: 'school', label: '专业', value: '工业设计'},
    {icon: 'flag', label: '政治面貌', value: '入党积极分子'},
  ];

  const advantages = [
    {
      icon: 'group',
      title: '团队协作',
      description: '善于与人沟通，具备优秀的团队合作能力，能够在团队中发挥积极作用。',
    },
    {
      icon: 'brush',
      title: '手绘能力',
      description: '具备扎实的手绘基础，能够快速表达设计思路和创意想法。',
    },
    {
      icon: 'computer',
      title: '软件技能',
      description: '熟练掌握多种专业设计软件，包括PS、Blender、Rhino、SolidWorks等。',
    },
    {
      icon: 'lightbulb',
      title: '创新思维',
      description: '热爱设计与创新，具备敏锐的设计洞察力和创造性思维。',
    },
  ];

  const experience = [
    {
      title: '产品建模',
      description: '首先使用Rhino软件进行产品建模，掌握精确的三维建模技术。',
      icon: 'view_in_ar',
    },
    {
      title: '渲染制作',
      description: '通过Blender软件进行渲染并制作动画，呈现专业的视觉效果。',
      icon: 'movie',
    },
    {
      title: '后期处理',
      description: '善用PS进行后期修图，PR和AE进行视频剪辑，完善作品表现。',
      icon: 'edit',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 个人头像和基本信息 */}
      <View style={styles.profileSection}>
        <Animatable.View animation="fadeInDown" style={styles.avatarContainer}>
          <Image
            source={{
              uri: 'https://via.placeholder.com/120x120/6366f1/ffffff?text=HCX',
            }}
            style={styles.avatar}
          />
          <View style={styles.statusBadge}>
            <Icon name="verified" size={16} color="#10b981" />
            <Text style={styles.statusText}>在线</Text>
          </View>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={300} style={styles.nameSection}>
          <Text style={styles.fullName}>黄晨翔</Text>
          <Text style={styles.subtitle}>工业设计专业学生</Text>
          <Text style={styles.university}>武汉科技大学</Text>
        </Animatable.View>
      </View>

      {/* 个人信息卡片 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>个人信息</Text>
        <View style={styles.infoGrid}>
          {personalInfo.map((item, index) => (
            <Animatable.View
              key={index}
              animation="fadeInUp"
              delay={index * 200}
              style={styles.infoCard}>
              <View style={styles.infoIconContainer}>
                <Icon name={item.icon} size={24} color="#6366f1" />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>{item.label}</Text>
                <Text style={styles.infoValue}>{item.value}</Text>
              </View>
            </Animatable.View>
          ))}
        </View>
      </View>

      {/* 个人优势 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>个人优势</Text>
        {advantages.map((advantage, index) => (
          <Animatable.View
            key={index}
            animation="fadeInLeft"
            delay={index * 200}
            style={styles.advantageCard}>
            <View style={styles.advantageIconContainer}>
              <Icon name={advantage.icon} size={28} color="#6366f1" />
            </View>
            <View style={styles.advantageContent}>
              <Text style={styles.advantageTitle}>{advantage.title}</Text>
              <Text style={styles.advantageDescription}>
                {advantage.description}
              </Text>
            </View>
          </Animatable.View>
        ))}
      </View>

      {/* 专业经验 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>专业经验</Text>
        <Text style={styles.sectionSubtitle}>
          从概念到成品的完整设计流程
        </Text>
        {experience.map((exp, index) => (
          <Animatable.View
            key={index}
            animation="fadeInRight"
            delay={index * 300}
            style={styles.experienceCard}>
            <View style={styles.experienceStep}>
              <Text style={styles.stepNumber}>{index + 1}</Text>
            </View>
            <View style={styles.experienceIconContainer}>
              <Icon name={exp.icon} size={24} color="#fff" />
            </View>
            <View style={styles.experienceContent}>
              <Text style={styles.experienceTitle}>{exp.title}</Text>
              <Text style={styles.experienceDescription}>
                {exp.description}
              </Text>
            </View>
          </Animatable.View>
        ))}
      </View>

      {/* 自我评价 */}
      <View style={[styles.section, styles.evaluationSection]}>
        <Text style={styles.sectionTitle}>自我评价</Text>
        <Animatable.View animation="fadeIn" delay={500} style={styles.evaluationCard}>
          <Icon name="format_quote" size={30} color="#6366f1" style={styles.quoteIcon} />
          <Text style={styles.evaluationText}>
            我是一名学习能力强、工作责任心强、热爱设计、具有创造力的工业设计师。
            渴望能加入贵公司，与优秀的团队成员一起，为企业和社会创造价值，共同创造出
            更好的设计。我的个人目标成为优秀的工业设计师，为用户提供更好的设计体验。
          </Text>
          <View style={styles.authorSection}>
            <Text style={styles.authorName}>— 黄晨翔</Text>
          </View>
        </Animatable.View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  profileSection: {
    backgroundColor: '#6366f1',
    paddingTop: 30,
    paddingBottom: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
  },
  statusBadge: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 12,
    color: '#10b981',
    fontWeight: 'bold',
    marginLeft: 4,
  },
  nameSection: {
    alignItems: 'center',
  },
  fullName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#e0e7ff',
    marginBottom: 5,
  },
  university: {
    fontSize: 14,
    color: '#c7d2fe',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15,
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    width: (width - 55) / 2,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  infoIconContainer: {
    marginRight: 12,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  advantageCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  advantageIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e0e7ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  advantageContent: {
    flex: 1,
  },
  advantageTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  advantageDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  experienceCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  experienceStep: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fbbf24',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  stepNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  experienceIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  experienceContent: {
    flex: 1,
  },
  experienceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  experienceDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 18,
  },
  evaluationSection: {
    paddingBottom: 40,
  },
  evaluationCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  quoteIcon: {
    alignSelf: 'center',
    marginBottom: 15,
  },
  evaluationText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  authorSection: {
    alignItems: 'flex-end',
  },
  authorName: {
    fontSize: 14,
    color: '#6366f1',
    fontWeight: 'bold',
  },
});

export default AboutScreen;