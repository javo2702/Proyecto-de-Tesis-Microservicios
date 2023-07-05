FROM openjdk:8-jdk-alpine
ADD target/InventarioService-0.0.1-SNAPSHOT.jar InventarioService-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","InventarioService-0.0.1-SNAPSHOT.jar"]
