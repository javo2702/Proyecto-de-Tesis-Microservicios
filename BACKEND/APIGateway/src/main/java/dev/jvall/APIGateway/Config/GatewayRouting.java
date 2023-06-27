package dev.jvall.APIGateway.Config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayRouting {
    @Bean
    public RouteLocator configureRoute(RouteLocatorBuilder builder){
        return builder.routes()
            .route("orderId", r->r.path("/order/**").uri("lb://pedido-service")) //dynamic routing
                .route("inventaryId", r->r.path("/inventary/**").uri("lb://inventario-service")) //dynamic routing
            .build();
    }
}
