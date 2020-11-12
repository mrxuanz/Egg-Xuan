/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : xuan

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2020-11-12 09:44:41
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL COMMENT '用户名',
  `password` varchar(32) DEFAULT NULL COMMENT '密码',
  `name` varchar(20) DEFAULT '' COMMENT '姓名',
  `tel` varchar(11) DEFAULT '' COMMENT '电话',
  `place` varchar(11) DEFAULT '' COMMENT '地址',
  `role` tinyint(1) DEFAULT NULL COMMENT '权限1是总权限2是销售权限3为库存权限',
  `role_name` varchar(30) DEFAULT NULL COMMENT '权限名称 与 role值对应',
  `creat_time` varchar(50) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('27', 'admin', '21232f297a57a5a743894a0e4a801fc3', '', '', '', null, null, '2020-11-12 09:42:02');
