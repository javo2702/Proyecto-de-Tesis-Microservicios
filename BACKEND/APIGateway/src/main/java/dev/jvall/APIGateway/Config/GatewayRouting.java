package dev.jvall.APIGateway.Config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayRouting {
    @Bean
    public RouteLocator configureRoute(RouteLocatorBuilder builder){
        System.out.println("VAMO A VER SI LLEGA ACA");
        return builder.routes()
            .route("orderId", r->r.path("/order/**").uri("lb://pedido-service")) //dynamic routing
                .route("inventaryId", r->r.path("/inventary/**").uri("lb://inventario-service")) //dynamic routing
                .route("transactionId", r->r.path("/transaction/**").uri("lb://transaccion-service")) //dynamic routing
                .route("valoracionId", r->r.path("/valoration/**").uri("lb://valoracion-service")) //dynamic routing
                .route("usuariosId", r->r.path("/user/**").uri("lb://usuario-service")) //dynamic routing
                .route("seeId", r->r.path("/sse/**").uri("lb://pedido-service")) //dynamic routing
            .build();
    }
}

