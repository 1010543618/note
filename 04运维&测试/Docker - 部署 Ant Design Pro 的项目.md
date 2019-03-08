# 解读 Ant Design Pro 的 Docker 配置

## package.json 的 scripts

`-f`: 使用什么配置文件
`-t`: 标签
`up`: 启动服务（的容器）
`build`: 构建或重新构建服务（的容器）

```text
"docker:dev": "docker-compose -f ./docker/docker-compose.dev.yml up",
"docker:build": "docker-compose -f ./docker/docker-compose.dev.yml build",
"docker-prod:dev": "docker-compose -f ./docker/docker-compose.yml up",
"docker-prod:build": "docker-compose -f ./docker/docker-compose.yml build",
"docker-hub:build": "docker build  -f Dockerfile.hub -t  ant-design-pro ./",
"docker:tag": "docker tag ant-design-pro chenshuai2144/ant-design-pro",
"docker:push": "npm run docker-hub:build && npm run docker:tag && docker push chenshuai2144/ant-design-pro"
```

## docker-compose 配置

`volumes`：包含多个 volume，每个 volume 有 3 个用冒号分割的域：名称（或相对该配置文件的路径）: 容器中的路径: 是否只读

`build`：指定构建容器的上下文（根路径）和使用的配置文件（不指定默认为 Dockerfile）

-   docker-compose.dev.yml

```yaml
version: "3.5"

services:
  ant-design-pro_build:
    build: ../
    container_name: "ant-design-pro_build"
    volumes:
      - dist:/usr/src/app/dist

  ant-design-pro_web:
    image: nginx
    ports:
      - 80:80
    container_name: "ant-design-pro_web"
    restart: unless-stopped
    volumes:
      - dist:/usr/share/nginx/html:ro
      - ./nginx.conf:/etc/nginx/conf.d/default.conf

volumes:
  dist:
```

-   docker-compose.yml

```yaml
version: "3.5"

services:
  ant-design-pro_dev:
    ports:
      - 8000:8000
    build:
      context: ../
      dockerfile: Dockerfile.dev
    container_name: "ant-design-pro_dev"
    volumes:
      - ../src:/usr/src/app/src
      - ../config:/usr/src/app/config
      - ../mock:/usr/src/app/mock
```

## .dockerignore 配置

在配置 Dockerfile 的`ADD`和`COPY`是会根据这个配置进行忽略，如`node_modules`跟项目环境有关，不应该直接将当前的`node_modules`文件夹直接复制到 Docker 镜像中，应该配置忽略`node_modules`使用`RUN yarn`或者`RUN npm install`安装到 Docker 镜像中

```text
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
**/node_modules
/src/utils/request-temp.js

# production
/.vscode

# misc
.DS_Store
npm-debug.log*
yarn-error.log

/coverage
.idea
yarn.lock
package-lock.json
*bak
.vscode

# visual studio code
.history
*.log

functions/mock
.temp/**

# umi
.umi
.umi-production

# screenshot
screenshot
.firebase
```

## Dockerfile 配置

-   Dockerfile

```dockerfile
FROM circleci/node:latest-browsers

WORKDIR /usr/src/app/
USER root
COPY package.json ./
RUN yarn

COPY ./ ./

RUN npm run test:all

CMD ["npm", "run", "build"]
```

-   Dockerfile.dev

```dockerfile
FROM node:latest

WORKDIR /usr/src/app/

COPY package.json ./
RUN npm install --silent --no-cache

COPY ./ ./


CMD ["npm", "run", "start"]
```

-   Dockerfile.hub

```dockerfile
FROM nginx

WORKDIR /usr/src/app/

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

COPY ./dist  /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

# 部署自己的 Docker 项目
