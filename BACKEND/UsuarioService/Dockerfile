FROM openjdk:8-jdk-alpine
ADD target/UsuarioService-0.0.1-SNAPSHOT.jar UsuarioService-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","UsuarioService-0.0.1-SNAPSHOT.jar"]