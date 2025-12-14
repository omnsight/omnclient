const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const https = require('https');

// 创建输出目录
const OUTPUT_DIR = path.join(__dirname, '..', 'src');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// 定义服务
const SERVICES = [
  {
    name: 'omniauth',
    url: 'https://raw.githubusercontent.com/omnsight/omniauth/main/doc/api.swagger.json'
  },
  {
    name: 'omndapi',
    url: 'https://raw.githubusercontent.com/omnsight/omndapi/main/doc/api.swagger.json'
  }
];

// 下载文件的函数
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {}); // 删除部分下载的文件
      reject(err);
    });
  });
}

// 生成 TypeScript 客户端
async function generateClient(serviceName, swaggerFile) {
  const outputDir = path.join(OUTPUT_DIR, serviceName);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    // 添加 --axios 参数以生成包含 HTTP 客户端的完整代码
    execSync(
      `npx swagger-typescript-api -p ${swaggerFile} -o ${outputDir} -n ${serviceName}.ts --axios`,
      { stdio: 'inherit' }
    );
    console.log(`Successfully generated client for ${serviceName}`);
  } catch (error) {
    console.error(`Failed to generate client for ${serviceName}:`, error);
    throw error;
  }
}

// 主函数
async function main() {
  console.log('开始生成 TypeScript 客户端...');
  
  for (const service of SERVICES) {
    try {
      console.log(`处理服务: ${service.name}`);
      
      // 下载 Swagger 文件
      const swaggerFilePath = path.join(OUTPUT_DIR, `${service.name}-swagger.json`);
      console.log(`下载 ${service.name} 的 Swagger 文件...`);
      await downloadFile(service.url, swaggerFilePath);
      
      // 生成客户端
      console.log(`为 ${service.name} 生成 TypeScript 客户端...`);
      await generateClient(service.name, swaggerFilePath);
      
      console.log(`${service.name} 处理完成\n`);
    } catch (error) {
      console.error(`处理 ${service.name} 时出错:`, error);
      process.exit(1);
    }
  }
  
  console.log('所有客户端生成完成!');
}

main().catch(console.error);