import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

const {width} = Dimensions.get('window');

const SkillsScreen = () => {
  const skillCategories = [
    {
      title: '设计软件',
      icon: 'brush',
      color: '#6366f1',
      skills: [
        {name: 'Figma', level: 90, description: '移动端和Web界面设计'},
        {name: 'Photoshop', level: 85, description: '图像处理和后期制作'},
        {name: 'Blender', level: 80, description: '3D建模和渲染'},
        {name: 'Keyshot', level: 75, description: '产品渲染和展示'},
      ],
    },
    {
      title: '3D建模',
      icon: 'view_in_ar',
      color: '#10b981',
      skills: [
        {name: 'Rhino', level: 85, description: '精密工业设计建模'},
        {name: 'SolidWorks', level: 80, description: '机械设计和工程制图'},
        {name: 'AutoCAD', level: 75, description: '技术制图和设计'},
      ],
    },
    {
      title: '影视制作',
      icon: 'movie',
      color: '#f59e0b',
      skills: [
        {name: 'Premiere Pro', level: 80, description: '视频剪辑和后期'},
        {name: 'After Effects', level: 75, description: '动画和特效制作'},
      ],
    },
    {
      title: '编程技能',
      icon: 'code',
      color: '#ef4444',
      skills: [
        {name: 'C++', level: 70, description: '面向对象编程'},
        {name: 'MySQL', level: 65, description: '数据库设计和管理'},
      ],
    },
    {
      title: 'AI工具',
      icon: 'psychology',
      color: '#8b5cf6',
      skills: [
        {name: 'Midjourney', level: 85, description: 'AI图像生成和设计'},
        {name: 'Stable Diffusion', level: 80, description: '图像生成和编辑'},
        {name: 'ChatGPT', level: 90, description: '辅助设计和内容创作'},
      ],
    },
  ];

  const SkillBar = ({skill, delay = 0}) => {
    const progressAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      const timer = setTimeout(() => {
        Animated.timing(progressAnim, {
          toValue: skill.level,
          duration: 1500,
          useNativeDriver: false,
        }).start();
      }, delay);

      return () => clearTimeout(timer);
    }, [skill.level, delay]);

    return (
      <Animatable.View 
        animation="fadeInUp" 
        delay={delay}
        style={styles.skillItem}>
        <View style={styles.skillHeader}>
          <Text style={styles.skillName}>{skill.name}</Text>
          <Text style={styles.skillPercentage}>{skill.level}%</Text>
        </View>
        <Text style={styles.skillDescription}>{skill.description}</Text>
        <View style={styles.skillBarContainer}>
          <Animated.View
            style={[
              styles.skillBarFill,
              {
                width: progressAnim.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0%', '100%'],
                }),
              },
            ]}
          />
        </View>
      </Animatable.View>
    );
  };

  const SkillCategory = ({category, index}) => {
    return (
      <Animatable.View 
        animation="fadeInLeft" 
        delay={index * 200}
        style={styles.categoryContainer}>
        <View style={[styles.categoryHeader, {backgroundColor: category.color}]}>
          <View style={styles.categoryIconContainer}>
            <Icon name={category.icon} size={28} color="#fff" />
          </View>
          <Text style={styles.categoryTitle}>{category.title}</Text>
          <View style={styles.skillCount}>
            <Text style={styles.skillCountText}>{category.skills.length}</Text>
          </View>
        </View>
        <View style={styles.skillsContainer}>
          {category.skills.map((skill, skillIndex) => (
            <SkillBar
              key={skillIndex}
              skill={skill}
              delay={index * 200 + skillIndex * 300}
            />
          ))}
        </View>
      </Animatable.View>
    );
  };

  const overallStats = [
    {label: '设计软件', value: '82%', icon: 'brush'},
    {label: '3D建模', value: '80%', icon: 'view_in_ar'},
    {label: '影视制作', value: '78%', icon: 'movie'},
    {label: 'AI工具', value: '85%', icon: 'psychology'},
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 顶部统计 */}
      <View style={styles.statsSection}>
        <Text style={styles.sectionTitle}>技能概览</Text>
        <View style={styles.statsGrid}>
          {overallStats.map((stat, index) => (
            <Animatable.View
              key={index}
              animation="bounceIn"
              delay={index * 200}
              style={styles.statCard}>
              <Icon name={stat.icon} size={30} color="#6366f1" />
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </Animatable.View>
          ))}
        </View>
      </View>

      {/* 技能分类 */}
      <View style={styles.skillsSection}>
        <Text style={styles.sectionTitle}>详细技能</Text>
        <Text style={styles.sectionSubtitle}>
          熟练掌握的专业技术和工具
        </Text>
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} category={category} index={index} />
        ))}
      </View>

      {/* 学习计划 */}
      <View style={styles.learningSection}>
        <Text style={styles.sectionTitle}>持续学习</Text>
        <Animatable.View animation="fadeIn" delay={1000} style={styles.learningCard}>
          <View style={styles.learningHeader}>
            <Icon name="trending_up" size={24} color="#10b981" />
            <Text style={styles.learningTitle}>正在提升的技能</Text>
          </View>
          <View style={styles.learningItems}>
            <View style={styles.learningItem}>
              <Text style={styles.learningItemText}>• React Native 移动开发</Text>
            </View>
            <View style={styles.learningItem}>
              <Text style={styles.learningItemText}>• Unity 3D 游戏引擎</Text>
            </View>
            <View style={styles.learningItem}>
              <Text style={styles.learningItemText}>• Cinema 4D 三维动画</Text>
            </View>
            <View style={styles.learningItem}>
              <Text style={styles.learningItemText}>• VR/AR 设计技术</Text>
            </View>
          </View>
        </Animatable.View>
      </View>

      {/* 软件工具箱 */}
      <View style={styles.toolboxSection}>
        <Text style={styles.sectionTitle}>常用工具</Text>
        <Animatable.View animation="fadeInUp" delay={800} style={styles.toolboxCard}>
          <Text style={styles.toolboxDescription}>
            除了上述专业软件外，我还熟练使用以下辅助工具：
          </Text>
          <View style={styles.toolsList}>
            <Text style={styles.toolItem}>📊 Excel - 数据分析和项目管理</Text>
            <Text style={styles.toolItem}>📝 Word - 文档编写和报告制作</Text>
            <Text style={styles.toolItem}>📋 PowerPoint - 演示文稿设计</Text>
            <Text style={styles.toolItem}>🗺️ Xmind - 思维导图和流程图</Text>
            <Text style={styles.toolItem}>📄 WPS - 办公软件套件</Text>
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
    padding: 20,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
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
  skillsSection: {
    padding: 20,
  },
  categoryContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  categoryIconContainer: {
    marginRight: 15,
  },
  categoryTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  skillCount: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  skillCountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  skillsContainer: {
    padding: 20,
  },
  skillItem: {
    marginBottom: 20,
  },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  skillName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  skillPercentage: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6366f1',
  },
  skillDescription: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
  },
  skillBarContainer: {
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    overflow: 'hidden',
  },
  skillBarFill: {
    height: '100%',
    backgroundColor: '#6366f1',
    borderRadius: 4,
  },
  learningSection: {
    padding: 20,
  },
  learningCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  learningHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  learningTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  learningItems: {
    marginLeft: 15,
  },
  learningItem: {
    marginBottom: 8,
  },
  learningItemText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  toolboxSection: {
    padding: 20,
    paddingBottom: 40,
  },
  toolboxCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  toolboxDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    lineHeight: 20,
  },
  toolsList: {
    marginLeft: 10,
  },
  toolItem: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    lineHeight: 20,
  },
});

export default SkillsScreen;