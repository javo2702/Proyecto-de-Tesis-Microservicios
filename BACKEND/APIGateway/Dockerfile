FROM openjdk:8-jdk-alpine
ADD target/APIGateway-0.0.1-SNAPSHOT.jar APIGateway-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","APIGateway-0.0.1-SNAPSHOT.jar"]