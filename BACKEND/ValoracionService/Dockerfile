FROM openjdk:8-jdk-alpine
ADD target/ValoracionService-0.0.1-SNAPSHOT.jar ValoracionService-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","ValoracionService-0.0.1-SNAPSHOT.jar"]