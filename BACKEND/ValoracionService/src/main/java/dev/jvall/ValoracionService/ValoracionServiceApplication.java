package dev.jvall.ValoracionService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ValoracionServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ValoracionServiceApplication.class, args);
	}


}
