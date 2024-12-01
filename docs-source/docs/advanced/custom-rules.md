# 自定义规则

QQ Message Blocker 提供了强大的自定义规则系统，让你可以创建更复杂和精细的屏蔽规则。

## 规则组成

每个自定义规则包含以下部分：

```json
{
  "id": "custom_rule_1",
  "name": "自定义规则1",
  "conditions": [],
  "actions": [],
  "enabled": true,
  "priority": 100
}
```

### 1. 条件（Conditions）

条件决定规则何时触发：

```json
{
  "conditions": [
    {
      "type": "message_content",
      "operator": "contains",
      "value": "关键词"
    },
    {
      "type": "sender",
      "operator": "in",
      "value": ["123456789", "987654321"]
    },
    {
      "type": "time",
      "operator": "between",
      "value": {
        "start": "22:00",
        "end": "08:00"
      }
    }
  ]
}
```

### 2. 动作（Actions）

动作定义规则触发后要执行的操作：

```json
{
  "actions": [
    {
      "type": "block_message",
      "params": {
        "notify": false
      }
    },
    {
      "type": "log",
      "params": {
        "level": "info",
        "message": "消息已屏蔽"
      }
    }
  ]
}
```

## 条件类型

### 1. 消息内容（message_content）

- contains：包含指定文字
- matches：匹配正则表达式
- equals：完全匹配
- starts_with：以指定文字开头
- ends_with：以指定文字结尾

### 2. 发送者（sender）

- equals：特定用户
- in：用户列表中的任意用户
- group：来自特定群组
- role：特定群角色

### 3. 时间（time）

- between：在指定时间段内
- after：在指定时间之后
- before：在指定时间之前
- weekday：特定星期几

### 4. 消息类型（message_type）

- is：特定类型
- in：类型列表中的任意类型
- not：不是特定类型

## 动作类型

### 1. 屏蔽（block_message）

```json
{
  "type": "block_message",
  "params": {
    "notify": false,
    "reason": "自定义规则屏蔽"
  }
}
```

### 2. 替换（replace_message）

```json
{
  "type": "replace_message",
  "params": {
    "text": "[消息已屏蔽]",
    "keep_original": false
  }
}
```

### 3. 日志（log）

```json
{
  "type": "log",
  "params": {
    "level": "info",
    "message": "规则触发记录"
  }
}
```

## 规则优先级

规则按优先级从高到低执行：

1. 数字越大优先级越高
2. 同优先级按规则顺序执行
3. 可以设置规则是否继续执行后续规则

## 配置示例

### 1. 工作时间屏蔽娱乐消息

```json
{
  "id": "work_time_block",
  "name": "工作时间屏蔽",
  "conditions": [
    {
      "type": "time",
      "operator": "between",
      "value": {
        "start": "09:00",
        "end": "18:00"
      }
    },
    {
      "type": "group",
      "operator": "in",
      "value": ["娱乐群1", "娱乐群2"]
    }
  ],
  "actions": [
    {
      "type": "block_message",
      "params": {
        "notify": true,
        "reason": "工作时间"
      }
    }
  ],
  "enabled": true,
  "priority": 100
}
```

### 2. 关键词替换

```json
{
  "id": "keyword_replace",
  "name": "关键词替换",
  "conditions": [
    {
      "type": "message_content",
      "operator": "contains",
      "value": "敏感词"
    }
  ],
  "actions": [
    {
      "type": "replace_message",
      "params": {
        "text": "***",
        "keep_original": false
      }
    }
  ],
  "enabled": true,
  "priority": 90
}
```

## 最佳实践

1. **规则组织**
   - 使用有意义的规则ID和名称
   - 按功能分组规则
   - 保持规则简洁清晰

2. **优先级管理**
   - 重要规则设置高优先级
   - 避免规则冲突
   - 合理安排执行顺序

3. **性能优化**
   - 减少复杂条件
   - 避免过多嵌套
   - 优化正则表达式

## 常见问题

1. **规则不生效**
   - 检查规则是否启用
   - 验证条件是否正确
   - 确认优先级设置

2. **性能问题**
   - 简化复杂规则
   - 减少规则数量
   - 优化匹配条件

3. **规则冲突**
   - 检查规则优先级
   - 调整规则顺序
   - 合并相似规则
