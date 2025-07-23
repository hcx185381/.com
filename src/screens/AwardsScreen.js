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

const AwardsScreen = () => {
  const awards = [
    {
      title: '全国大学生英语竞赛院级三等奖',
      year: '2023~2024学年',
      description: '在全国大学生英语竞赛中表现优异，获得院级三等奖',
      icon: 'emoji_events',
      color: '#f59e0b',
      category: '学术竞赛'
    },
    {
      title: '全国大学生英语竞赛院级三等奖',
      year: '2024~2025学年',
      description: '连续两年在全国大学生英语竞赛中获得优异成绩',
      icon: 'emoji_events',
      color: '#f59e0b',
      category: '学术竞赛'
    },
    {
      title: '学院优秀班干部称号',
      year: '多次获得',
      description: '担任班级安全委员期间，多次获得学院优秀班干部称号',
      icon: 'star',
      color: '#6366f1',
      category: '学生工作'
    },
    {
      title: '青年志愿者活动积极参与者',
      year: '持续参与',
      description: '积极参加青年志愿者活动和爱心暑假等社会实践活动',
      icon: 'volunteer_activism',
      color: '#ef4444',
      category: '社会实践'
    },
    {
      title: '学院乒乓球队队长',
      year: '在校期间',
      description: '担任学院乒乓球队队长，多次参加乒乓球比赛并取得优异成绩',
      icon: 'sports_tennis',
      color: '#10b981',
      category: '体育成就'
    },
    {
      title: '入党积极分子',
      year: '2024年',
      description: '已提交入党申请书，成为入党积极分子',
      icon: 'flag',
      color: '#8b5cf6',
      category: '政治面貌'
    }
  ];

  const categories = [
    {name: '学术竞赛', count: 2, icon: 'school', color: '#f59e0b'},
    {name: '学生工作', count: 1, icon: 'star', color: '#6366f1'},
    {name: '社会实践', count: 1, icon: 'volunteer_activism', color: '#ef4444'},
    {name: '体育成就', count: 1, icon: 'sports_tennis', color: '#10b981'},
    {name: '政治面貌', count: 1, icon: 'flag', color: '#8b5cf6'},
  ];

  const AwardCard = ({award, index}) => {
    return (
      <Animatable.View
        animation="fadeInUp"
        delay={index * 200}
        style={styles.awardCard}>
        <View style={[styles.awardIconContainer, {backgroundColor: award.color}]}>
          <Icon name={award.icon} size={30} color="#fff" />
        </View>
        
        <View style={styles.awardContent}>
          <View style={styles.awardHeader}>
            <Text style={styles.awardTitle}>{award.title}</Text>
            <View style={[styles.categoryBadge, {backgroundColor: `${award.color}20`}]}>
              <Text style={[styles.categoryText, {color: award.color}]}>
                {award.category}
              </Text>
            </View>
          </View>
          
          <Text style={styles.awardYear}>{award.year}</Text>
          <Text style={styles.awardDescription}>{award.description}</Text>
        </View>
      </Animatable.View>
    );
  };

  const CategoryCard = ({category, index}) => {
    return (
      <Animatable.View
        animation="bounceIn"
        delay={index * 100}
        style={styles.categoryCard}>
        <View style={[styles.categoryIconContainer, {backgroundColor: category.color}]}>
          <Icon name={category.icon} size={24} color="#fff" />
        </View>
        <Text style={styles.categoryName}>{category.name}</Text>
        <Text style={styles.categoryCount}>{category.count}项</Text>
      </Animatable.View>
    );
  };

  const stats = [
    {label: '总获奖数', value: '6', icon: 'emoji_events'},
    {label: '竞赛奖项', value: '2', icon: 'school'},
    {label: '学生工作', value: '多次', icon: 'star'},
    {label: '社会活动', value: '积极', icon: 'volunteer_activism'},
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 统计概览 */}
      <View style={styles.statsSection}>
        <Text style={styles.mainTitle}>荣誉成就</Text>
        <Text style={styles.subtitle}>学术与综合素质并重发展</Text>
        
        <View style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <Animatable.View
              key={index}
              animation="bounceIn"
              delay={index * 150}
              style={styles.statCard}>
              <Icon name={stat.icon} size={28} color="#6366f1" />
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </Animatable.View>
          ))}
        </View>
      </View>

      {/* 奖项分类 */}
      <View style={styles.categoriesSection}>
        <Text style={styles.sectionTitle}>奖项分类</Text>
        <View style={styles.categoriesGrid}>
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </View>
      </View>

      {/* 详细奖项列表 */}
      <View style={styles.awardsSection}>
        <Text style={styles.sectionTitle}>详细奖项</Text>
        {awards.map((award, index) => (
          <AwardCard key={index} award={award} index={index} />
        ))}
      </View>

      {/* 成长轨迹 */}
      <View style={styles.growthSection}>
        <Text style={styles.sectionTitle}>成长轨迹</Text>
        <Animatable.View animation="fadeIn" delay={1000} style={styles.growthCard}>
          <View style={styles.growthTimeline}>
            <View style={styles.timelineItem}>
              <View style={[styles.timelineDot, {backgroundColor: '#6366f1'}]} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineYear}>2023年</Text>
                <Text style={styles.timelineEvent}>入学并担任班级安全委员</Text>
              </View>
            </View>
            
            <View style={styles.timelineLine} />
            
            <View style={styles.timelineItem}>
              <View style={[styles.timelineDot, {backgroundColor: '#f59e0b'}]} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineYear}>2023-2024</Text>
                <Text style={styles.timelineEvent}>获得全国大学生英语竞赛奖项</Text>
              </View>
            </View>
            
            <View style={styles.timelineLine} />
            
            <View style={styles.timelineItem}>
              <View style={[styles.timelineDot, {backgroundColor: '#8b5cf6'}]} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineYear}>2024年</Text>
                <Text style={styles.timelineEvent}>成为入党积极分子</Text>
              </View>
            </View>
            
            <View style={styles.timelineLine} />
            
            <View style={styles.timelineItem}>
              <View style={[styles.timelineDot, {backgroundColor: '#10b981'}]} />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineYear}>持续发展</Text>
                <Text style={styles.timelineEvent}>担任乒乓球队队长，积极参与社会实践</Text>
              </View>
            </View>
          </View>
        </Animatable.View>
      </View>

      {/* 未来目标 */}
      <View style={styles.goalsSection}>
        <Text style={styles.sectionTitle}>未来目标</Text>
        <Animatable.View animation="fadeInUp" delay={1200} style={styles.goalsCard}>
          <Icon name="flag" size={30} color="#6366f1" style={styles.goalsIcon} />
          <Text style={styles.goalsTitle}>继续追求卓越</Text>
          <Text style={styles.goalsDescription}>
            在已有成就的基础上，我将继续努力提升自己，
            在学术、工作和社会实践各个方面都争取更好的成绩。
          </Text>
          
          <View style={styles.goalsList}>
            <View style={styles.goalItem}>
              <Icon name="trending_up" size={16} color="#6366f1" />
              <Text style={styles.goalText}>提高专业技能，争取更高的学术成就</Text>
            </View>
            <View style={styles.goalItem}>
              <Icon name="group_work" size={16} color="#6366f1" />
              <Text style={styles.goalText}>加强团队合作，提升领导能力</Text>
            </View>
            <View style={styles.goalItem}>
              <Icon name="public" size={16} color="#6366f1" />
              <Text style={styles.goalText}>扩大社会实践，增强社会责任感</Text>
            </View>
            <View style={styles.goalItem}>
              <Icon name="emoji_events" size={16} color="#6366f1" />
              <Text style={styles.goalText}>参与更多竞赛，挑战自我极限</Text>
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
  statsSection: {
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
    fontSize: 24,
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
  categoriesSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  categoryCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    width: (width - 64) / 3,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  categoryIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  categoryCount: {
    fontSize: 10,
    color: '#666',
  },
  awardsSection: {
    padding: 20,
  },
  awardCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  awardIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  awardContent: {
    flex: 1,
  },
  awardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  awardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  categoryBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  categoryText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  awardYear: {
    fontSize: 14,
    color: '#6366f1',
    fontWeight: '600',
    marginBottom: 5,
  },
  awardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  growthSection: {
    padding: 20,
  },
  growthCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  growthTimeline: {
    paddingLeft: 10,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 15,
  },
  timelineContent: {
    flex: 1,
    paddingVertical: 10,
  },
  timelineYear: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },
  timelineEvent: {
    fontSize: 13,
    color: '#666',
  },
  timelineLine: {
    width: 2,
    height: 20,
    backgroundColor: '#e5e7eb',
    marginLeft: 5,
    marginRight: 15,
  },
  goalsSection: {
    padding: 20,
    paddingBottom: 40,
  },
  goalsCard: {
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
  goalsIcon: {
    marginBottom: 15,
  },
  goalsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  goalsDescription: {
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
    paddingLeft: 10,
  },
  goalText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
    flex: 1,
  },
});

export default AwardsScreen;