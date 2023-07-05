FROM openjdk:8-jdk-alpine
ADD target/EurekaServer-0.0.1-SNAPSHOT.jar EurekaServer-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","EurekaServer-0.0.1-SNAPSHOT.jar"]