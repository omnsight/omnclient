# OmnClient

这是一个自动生成 TypeScript 客户端的工具，用于访问以下服务：

1. [Omniauth](https://github.com/omnsight/omniauth)
2. [Geovision](https://github.com/omnsight/geovision)
3. [Omnibasement](https://github.com/omnsight/omnibasement)

## 目录结构

```
/generated
  /omniauth         # Omniauth 服务的 TypeScript 客户端
  /geovision        # Geovision 服务的 TypeScript 客户端
  /omnibasement     # Omnibasement 服务的 TypeScript 客户端
/scripts
  generate-clients.js  # 生成客户端的脚本
```

## 使用方法

### 手动生成客户端

```bash
npm run build
```

该命令会:

1. 从每个服务的 GitHub 仓库下载最新的 `api.swagger.json` 文件
2. 使用 swagger-typescript-api 工具生成对应的 TypeScript 客户端
3. 将生成的客户端保存在 [/generated](file:///Users/maxtian/workspace/omniscent/omnclient/generated) 目录下

### 自动更新

该项目配置了 GitHub Action，每天自动运行一次客户端生成任务，确保客户端与最新的 API 保持同步。

## 集成到前端项目

要将生成的客户端集成到您的前端项目中，您可以:

1. 直接复制 [/generated](file:///Users/maxtian/workspace/omniscent/omnclient/generated) 目录下的文件到您的项目中
2. 或者将此仓库作为子模块添加到您的项目中

```bash
git submodule add https://github.com/omnsight/omnclient.git
```

### 使用示例

生成的客户端不仅包含接口类型定义，还包含完整的 HTTP 客户端实现。以下是如何使用它的示例：

```typescript
import { Api } from './generated/omniauth/omniauth';

// 创建 API 实例
const api = new Api({
  baseURL: 'https://api.example.com',
  // 可以添加其他 axios 配置
});

// 调用 API 方法
const userData = await api.users.getUserById('user123');
console.log(userData);
```

## 开发

安装依赖:

```bash
npm install
```

运行生成脚本:

```bash
npm run build
```