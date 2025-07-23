import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Linking,
  Alert,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

const {width} = Dimensions.get('window');

const ContactScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: 'phone',
      title: '电话',
      value: '13720317900',
      action: () => Linking.openURL('tel:13720317900'),
      color: '#10b981',
    },
    {
      icon: 'email',
      title: '邮箱',
      value: '2607007440@qq.com',
      action: () => Linking.openURL('mailto:2607007440@qq.com'),
      color: '#6366f1',
    },
    {
      icon: 'chat',
      title: '微信',
      value: 'hcx185381',
      action: () => Alert.alert('微信号', 'hcx185381\n\n请添加微信好友进行联系'),
      color: '#10b981',
    },
    {
      icon: 'location_on',
      title: '位置',
      value: '武汉科技大学',
      action: () => Alert.alert('位置信息', '武汉科技大学\n湖北省武汉市'),
      color: '#ef4444',
    },
  ];

  const socialLinks = [
    {
      icon: 'code',
      name: 'GitHub',
      color: '#333',
      action: () => Alert.alert('GitHub', '暂未设置GitHub链接'),
    },
    {
      icon: 'work',
      name: 'LinkedIn',
      color: '#0077b5',
      action: () => Alert.alert('LinkedIn', '暂未设置LinkedIn链接'),
    },
    {
      icon: 'camera_alt',
      name: 'Instagram',
      color: '#e4405f',
      action: () => Alert.alert('Instagram', '暂未设置Instagram链接'),
    },
    {
      icon: 'language',
      name: '个人网站',
      color: '#6366f1',
      action: () => Alert.alert('个人网站', '暂未设置个人网站链接'),
    },
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({...prev, [field]: value}));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      Alert.alert('提示', '请填写必填字段（姓名、邮箱、留言内容）');
      return;
    }

    // 模拟发送邮件
    const emailBody = `姓名: ${formData.name}\n邮箱: ${formData.email}\n主题: ${formData.subject}\n\n留言内容:\n${formData.message}`;
    const emailUrl = `mailto:2607007440@qq.com?subject=${encodeURIComponent(
      formData.subject || '来自个人简历App的留言'
    )}&body=${encodeURIComponent(emailBody)}`;

    Linking.openURL(emailUrl)
      .then(() => {
        Alert.alert('成功', '邮件应用已打开，请发送邮件');
        setFormData({name: '', email: '', subject: '', message: ''});
      })
      .catch(() => {
        Alert.alert('错误', '无法打开邮件应用，请直接发送邮件至：2607007440@qq.com');
      });
  };

  const ContactCard = ({contact, index}) => {
    return (
      <Animatable.View
        animation="fadeInUp"
        delay={index * 200}
        style={styles.contactCard}>
        <TouchableOpacity onPress={contact.action} style={styles.contactButton}>
          <View style={[styles.contactIconContainer, {backgroundColor: contact.color}]}>
            <Icon name={contact.icon} size={24} color="#fff" />
          </View>
          <View style={styles.contactDetails}>
            <Text style={styles.contactTitle}>{contact.title}</Text>
            <Text style={styles.contactValue}>{contact.value}</Text>
          </View>
          <Icon name="arrow_forward_ios" size={16} color="#666" />
        </TouchableOpacity>
      </Animatable.View>
    );
  };

  const SocialButton = ({social, index}) => {
    return (
      <Animatable.View
        animation="bounceIn"
        delay={index * 150}
        style={styles.socialButton}>
        <TouchableOpacity onPress={social.action} style={styles.socialTouchable}>
          <View style={[styles.socialIconContainer, {backgroundColor: social.color}]}>
            <Icon name={social.icon} size={20} color="#fff" />
          </View>
          <Text style={styles.socialName}>{social.name}</Text>
        </TouchableOpacity>
      </Animatable.View>
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 头部信息 */}
      <View style={styles.headerSection}>
        <Animatable.View animation="fadeInDown" style={styles.headerContent}>
          <Text style={styles.mainTitle}>联系我</Text>
          <Text style={styles.subtitle}>
            欢迎与我建立联系，期待我们的交流与合作
          </Text>
        </Animatable.View>
      </View>

      {/* 联系方式卡片 */}
      <View style={styles.contactSection}>
        <Text style={styles.sectionTitle}>联系方式</Text>
        {contactInfo.map((contact, index) => (
          <ContactCard key={index} contact={contact} index={index} />
        ))}
      </View>

      {/* 联系表单 */}
      <View style={styles.formSection}>
        <Text style={styles.sectionTitle}>发送留言</Text>
        <Animatable.View animation="fadeInUp" delay={800} style={styles.formCard}>
          <Text style={styles.formDescription}>
            如果您有任何问题或合作意向，请填写下面的表单，我会尽快回复您。
          </Text>

          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>姓名 *</Text>
            <TextInput
              style={styles.formInput}
              placeholder="请输入您的姓名"
              value={formData.name}
              onChangeText={value => handleInputChange('name', value)}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>邮箱 *</Text>
            <TextInput
              style={styles.formInput}
              placeholder="请输入您的邮箱"
              value={formData.email}
              onChangeText={value => handleInputChange('email', value)}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>主题</Text>
            <TextInput
              style={styles.formInput}
              placeholder="请输入邮件主题"
              value={formData.subject}
              onChangeText={value => handleInputChange('subject', value)}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>留言内容 *</Text>
            <TextInput
              style={[styles.formInput, styles.textArea]}
              placeholder="请输入您想说的话..."
              value={formData.message}
              onChangeText={value => handleInputChange('message', value)}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Icon name="send" size={20} color="#fff" style={styles.submitIcon} />
            <Text style={styles.submitButtonText}>发送留言</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>

      {/* 社交媒体 */}
      <View style={styles.socialSection}>
        <Text style={styles.sectionTitle}>社交媒体</Text>
        <Text style={styles.socialDescription}>
          通过以下平台与我建立联系
        </Text>
        <View style={styles.socialGrid}>
          {socialLinks.map((social, index) => (
            <SocialButton key={index} social={social} index={index} />
          ))}
        </View>
      </View>

      {/* 可用性状态 */}
      <View style={styles.availabilitySection}>
        <Animatable.View animation="fadeIn" delay={1200} style={styles.availabilityCard}>
          <View style={styles.statusIndicator}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>当前状态：在线</Text>
          </View>
          <Text style={styles.availabilityTitle}>项目合作</Text>
          <Text style={styles.availabilityDescription}>
            我目前正在寻找实习机会和项目合作，
            如果您有合适的机会或想法，欢迎与我联系！
          </Text>
          
          <View style={styles.responseTime}>
            <Icon name="schedule" size={16} color="#6366f1" />
            <Text style={styles.responseTimeText}>通常在24小时内回复</Text>
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
  headerSection: {
    backgroundColor: '#6366f1',
    paddingTop: 30,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  headerContent: {
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#e0e7ff',
    textAlign: 'center',
    lineHeight: 20,
  },
  contactSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  contactCard: {
    marginBottom: 15,
  },
  contactButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  contactIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  contactDetails: {
    flex: 1,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },
  contactValue: {
    fontSize: 14,
    color: '#666',
  },
  formSection: {
    padding: 20,
  },
  formCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  formDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 20,
  },
  formLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  formInput: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#333',
    backgroundColor: '#f9fafb',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#6366f1',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  submitIcon: {
    marginRight: 8,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialSection: {
    padding: 20,
  },
  socialDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  socialGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15,
  },
  socialButton: {
    width: (width - 55) / 2,
  },
  socialTouchable: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  socialIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  socialName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  availabilitySection: {
    padding: 20,
    paddingBottom: 40,
  },
  availabilityCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  statusIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    alignSelf: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10b981',
    marginRight: 8,
  },
  statusText: {
    fontSize: 12,
    color: '#10b981',
    fontWeight: 'bold',
  },
  availabilityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  availabilityDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 15,
  },
  responseTime: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  responseTimeText: {
    fontSize: 12,
    color: '#6366f1',
    marginLeft: 5,
    fontWeight: '500',
  },
});

export default ContactScreen;