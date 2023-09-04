FROM openjdk:8-jdk-alpine
ADD target/TransaccionService-0.0.1-SNAPSHOT.jar TransaccionService-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","TransaccionService-0.0.1-SNAPSHOT.jar"]