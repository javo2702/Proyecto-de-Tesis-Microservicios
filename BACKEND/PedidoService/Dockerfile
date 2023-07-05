FROM openjdk:8-jdk-alpine
ADD target/PedidoService-0.0.1-SNAPSHOT.jar PedidoService-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","PedidoService-0.0.1-SNAPSHOT.jar"]