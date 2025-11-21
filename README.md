# @omniscent/clients

这是为以下 Omniscent 服务自动生成的 TypeScript 客户端包：

1. [Omniauth](https://github.com/omnsight/omniauth)
2. [Geovision](https://github.com/omnsight/geovision)
3. [Omnibasement](https://github.com/omnsight/omnibasement)

## 目录结构

```
/src
  /omniauth         # Omniauth 服务的 TypeScript 客户端
  /geovision        # Geovision 服务的 TypeScript 客户端
  /omnibasement     # Omnibasement 服务的 TypeScript 客户端
/scripts
  generate-clients.js  # 生成客户端的脚本
```

## 安装和使用

### 作为依赖安装

```bash
npm install @omniscent/clients
```

### 手动生成客户端

```bash
npm run build
```

该命令会:

1. 从每个服务的 GitHub 仓库下载最新的 `api.swagger.json` 文件
2. 使用 swagger-typescript-api 工具生成对应的 TypeScript 客户端
3. 将生成的客户端保存在 [/src](file:///Users/maxtian/workspace/omniscent/omnclient/src) 目录下

### 自动更新

该项目配置了 GitHub Action，每天自动运行一次客户端生成任务，确保客户端与最新的 API 保持同步。

## 在项目中使用

### 使用示例

生成的客户端不仅包含接口类型定义，还包含完整的 HTTP 客户端实现。以下是如何使用它的示例：

```typescript
import { omniauth } from '@omniscent/clients';

// 创建 API 实例
const api = new omniauth.Api({
  baseURL: 'https://api.example.com',
  // 可以添加其他 axios 配置
});

// 调用 API 方法
const userData = await api.users.getUserById('user123');
console.log(userData);
```

或者直接导入特定的服务客户端：

```typescript
import { Api } from '@omniscent/clients/src/omniauth/omniauth';

// 创建 API 实例
const api = new Api({
  baseURL: 'https://api.example.com'
});
```

## 开发

安装依赖:

```bash
npm install @omnsight/clients
```

运行生成脚本:

```bash
npm run build
```