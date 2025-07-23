import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

const {width} = Dimensions.get('window');

const EducationScreen = () => {
  const educationData = [
    {
      period: '2023-2027',
      school: '武汉科技大学',
      degree: '工业设计（本科）',
      ranking: '专业排名：前30%',
      courses: [
        '产品设计',
        '人机工程学',
        '工业设计',
        '计算机辅助设计',
        '机械设计基础'
      ],
      achievements: [
        '在校期间同主修工业设计专业的同时还辅修了计算机的专业',
        '在校期间多次参加各个学科的竞赛，大一和大二两个学年均获得了全国大学生英语竞赛院级三等奖',
        '目前已提交入党申请书成为了一名入党积极分子',
        '从大一入校开始担任班级的安全委员，并且多次获得学院优秀班干部的称号',
        '积极参加青年志愿者活动，参加爱心暑假等社会实践活动',
        '在校期间参加了乒乓球社团并且担任我们学院的乒乓球院队队长，多次参加乒乓球比赛'
      ],
      color: '#6366f1'
    },
    {
      period: '2024-2027',
      school: '武汉科技大学',
      degree: '计算机（辅修）',
      ranking: '专业排名：前20%',
      courses: [
        '计算机组成原理',
        '数据库系统概论',
        '数据结构',
        '计算机网络',
        '操作系统'
      ],
      achievements: [
        '跨专业学习计算机知识，拓展技术视野',
        '将设计思维与技术实现相结合',
        '为未来数字化设计奠定技术基础'
      ],
      color: '#10b981'
    }
  ];

  const TimelineItem = ({item, index, isLast}) => {
    return (
      <Animatable.View 
        animation="fadeInUp" 
        delay={index * 300}
        style={styles.timelineItemContainer}>
        <View style={styles.timelineLeft}>
          <View style={[styles.periodBadge, {backgroundColor: item.color}]}>
            <Text style={styles.periodText}>{item.period}</Text>
          </View>
          {!isLast && <View style={styles.timelineLine} />}
        </View>
        
        <View style={styles.timelineContent}>
          <View style={styles.educationCard}>
            <View style={styles.cardHeader}>
              <Icon name="school" size={24} color={item.color} />
              <View style={styles.headerText}>
                <Text style={styles.schoolName}>{item.school}</Text>
                <Text style={styles.degreeText}>{item.degree}</Text>
                <Text style={styles.rankingText}>{item.ranking}</Text>
              </View>
            </View>
            
            <View style={styles.coursesSection}>
              <Text style={styles.sectionTitle}>主修课程</Text>
              <View style={styles.coursesGrid}>
                {item.courses.map((course, courseIndex) => (
                  <View key={courseIndex} style={styles.courseTag}>
                    <Text style={styles.courseText}>{course}</Text>
                  </View>
                ))}
              </View>
            </View>
            
            <View style={styles.achievementsSection}>
              <Text style={styles.sectionTitle}>在校成就</Text>
              {item.achievements.map((achievement, achievementIndex) => (
                <Animatable.View
                  key={achievementIndex}
                  animation="fadeInLeft"
                  delay={index * 300 + achievementIndex * 100}
                  style={styles.achievementItem}>
                  <Icon name="check_circle" size={16} color="#10b981" />
                  <Text style={styles.achievementText}>{achievement}</Text>
                </Animatable.View>
              ))}
            </View>
          </View>
        </View>
      </Animatable.View>
    );
  };

  const statsData = [
    {label: '在读年份', value: '4年', icon: 'schedule'},
    {label: '专业排名', value: '前30%', icon: 'trending_up'},
    {label: '获奖次数', value: '多次', icon: 'emoji_events'},
    {label: '社团职务', value: '队长', icon: 'sports_tennis'},
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 统计概览 */}
      <View style={styles.statsContainer}>
        <Text style={styles.mainTitle}>教育背景</Text>
        <Text style={styles.subtitle}>学术成就与综合发展</Text>
        
        <View style={styles.statsGrid}>
          {statsData.map((stat, index) => (
            <Animatable.View
              key={index}
              animation="bounceIn"
              delay={index * 200}
              style={styles.statCard}>
              <Icon name={stat.icon} size={28} color="#6366f1" />
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </Animatable.View>
          ))}
        </View>
      </View>

      {/* 教育时间线 */}
      <View style={styles.timelineContainer}>
        <Text style={styles.timelineTitle}>学习经历</Text>
        {educationData.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            index={index}
            isLast={index === educationData.length - 1}
          />
        ))}
      </View>

      {/* 综合能力展示 */}
      <View style={styles.skillsOverview}>
        <Text style={styles.sectionMainTitle}>综合能力</Text>
        
        <Animatable.View animation="fadeInUp" delay={600} style={styles.skillsCard}>
          <View style={styles.skillCategory}>
            <Icon name="palette" size={24} color="#6366f1" />
            <View style={styles.skillInfo}>
              <Text style={styles.skillTitle}>设计能力</Text>
              <Text style={styles.skillDescription}>
                工业设计专业基础扎实，具备创新思维和美学素养
              </Text>
            </View>
          </View>
          
          <View style={styles.skillCategory}>
            <Icon name="code" size={24} color="#10b981" />
            <View style={styles.skillInfo}>
              <Text style={styles.skillTitle}>技术能力</Text>
              <Text style={styles.skillDescription}>
                辅修计算机专业，掌握编程基础和技术思维
              </Text>
            </View>
          </View>
          
          <View style={styles.skillCategory}>
            <Icon name="groups" size={24} color="#f59e0b" />
            <View style={styles.skillInfo}>
              <Text style={styles.skillTitle}>领导能力</Text>
              <Text style={styles.skillDescription}>
                担任班干部和社团队长，具备团队管理经验
              </Text>
            </View>
          </View>
          
          <View style={styles.skillCategory}>
            <Icon name="volunteer_activism" size={24} color="#ef4444" />
            <View style={styles.skillInfo}>
              <Text style={styles.skillTitle}>社会责任</Text>
              <Text style={styles.skillDescription}>
                积极参与志愿服务，具有强烈的社会责任感
              </Text>
            </View>
          </View>
        </Animatable.View>
      </View>

      {/* 未来规划 */}
      <View style={styles.futureSection}>
        <Text style={styles.sectionMainTitle}>未来规划</Text>
        <Animatable.View animation="fadeIn" delay={800} style={styles.futureCard}>
          <Icon name="rocket_launch" size={30} color="#8b5cf6" style={styles.futureIcon} />
          <Text style={styles.futureTitle}>职业发展目标</Text>
          <Text style={styles.futureDescription}>
            继续深化专业学习，将设计思维与技术能力相结合，
            成为优秀的工业设计师，为用户创造更好的产品体验，
            为企业和社会创造价值。
          </Text>
          
          <View style={styles.goalsList}>
            <View style={styles.goalItem}>
              <Icon name="school" size={16} color="#6366f1" />
              <Text style={styles.goalText}>完成本科学业，保持专业前列</Text>
            </View>
            <View style={styles.goalItem}>
              <Icon name="work" size={16} color="#6366f1" />
              <Text style={styles.goalText}>积累实习经验，提升实践能力</Text>
            </View>
            <View style={styles.goalItem}>
              <Icon name="trending_up" size={16} color="#6366f1" />
              <Text style={styles.goalText}>持续学习新技术，紧跟行业发展</Text>
            </View>
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
  statsContainer: {
    backgroundColor: '#fff',
    padding: 20,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 25,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15,
  },
  statCard: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 20,
    width: (width - 55) / 2,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6366f1',
    marginTop: 10,
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  timelineContainer: {
    padding: 20,
  },
  timelineTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 25,
    textAlign: 'center',
  },
  timelineItemContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  timelineLeft: {
    alignItems: 'center',
    marginRight: 20,
  },
  periodBadge: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 10,
  },
  periodText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  timelineLine: {
    width: 2,
    height: 100,
    backgroundColor: '#e5e7eb',
  },
  timelineContent: {
    flex: 1,
  },
  educationCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  headerText: {
    marginLeft: 15,
    flex: 1,
  },
  schoolName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  degreeText: {
    fontSize: 16,
    color: '#6366f1',
    fontWeight: '600',
    marginBottom: 3,
  },
  rankingText: {
    fontSize: 14,
    color: '#10b981',
    fontWeight: '500',
  },
  coursesSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  coursesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  courseTag: {
    backgroundColor: '#e0e7ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  courseText: {
    fontSize: 12,
    color: '#6366f1',
    fontWeight: '500',
  },
  achievementsSection: {
    marginTop: 10,
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  achievementText: {
    flex: 1,
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginLeft: 8,
  },
  skillsOverview: {
    padding: 20,
  },
  sectionMainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  skillsCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  skillCategory: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  skillInfo: {
    marginLeft: 15,
    flex: 1,
  },
  skillTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  skillDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  futureSection: {
    padding: 20,
    paddingBottom: 40,
  },
  futureCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  futureIcon: {
    marginBottom: 15,
  },
  futureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  futureDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 20,
  },
  goalsList: {
    width: '100%',
  },
  goalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingLeft: 20,
  },
  goalText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
  },
});

export default EducationScreen;