# 快速开始

本指南将帮助你快速上手 QQ Message Blocker 的核心功能。

## 基础屏蔽设置

### 1. 关键词屏蔽

```javascript
// 包含匹配 - 屏蔽包含关键词的消息
blockedWords: [
    "测试111"  // 会屏蔽所有包含"测试111"的消息
]

// 完全匹配 - 只屏蔽完全一致的消息
exactBlockedWords: [
    "测试222",  // 只会屏蔽消息内容恰好是"测试222"的消息
    "?"         // 可以屏蔽单个字符
]
```

详细说明请参考[消息屏蔽](./features/message-blocking.md)。

### 2. 表情屏蔽

```javascript
// 屏蔽指定表情
blockedEmojis: [
    "[表情名称]"
]
```

详细说明请参考[表情屏蔽](./features/emoji-blocking.md)。

### 3. 用户屏蔽

```javascript
// 屏蔽指定用户的所有消息
blockedUsers: [
    "QQ号或群名片"
]
```

详细说明请参考[用户屏蔽](./features/user-blocking.md)。

## 高级功能

### 1. 配置导入导出

为了方便配置的备份和迁移，插件支持配置的导入导出功能。

详细说明请参考[配置导入导出](./advanced/config.md)。

### 2. 自定义规则

插件支持自定义复杂的屏蔽规则，以满足特定的屏蔽需求。

详细说明请参考[自定义规则](./advanced/rules.md)。

## 下一步

1. 阅读[消息屏蔽](./features/message-blocking.md)了解更多屏蔽功能
2. 探索[表情屏蔽](./features/emoji-blocking.md)的高级用法
3. 学习[用户屏蔽](./features/user-blocking.md)的完整功能
4. 查看[配置导入导出](./advanced/config.md)深入了解配置管理
5. 研究[自定义规则](./advanced/rules.md)创建更复杂的规则
