# 该镜像需要依赖的基础镜像
FROM maven:latest

# 将当前目录下的 jar 包复制到 docker 容器的/目录下
COPY lab.jar /lab.jar
# 声明服务运行在 80 端口
EXPOSE 80
# 指定docker容器启动时运行jar包
ENTRYPOINT ["java", "-jar","/lab.jar"]