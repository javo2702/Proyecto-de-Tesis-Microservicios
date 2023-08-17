package dev.jvall.generatepdf.config;

import org.springframework.context.annotation.Bean;

import org.thymeleaf.spring4.SpringTemplateEngine;
import org.thymeleaf.spring4.templateresolver.SpringResourceTemplateResolver;
import org.thymeleaf.templatemode.StandardTemplateModeHandlers;

import java.nio.charset.StandardCharsets;

@org.springframework.context.annotation.Configuration
public class Configuration {
    @Bean
    public SpringTemplateEngine springTemplateEngine() {
        SpringTemplateEngine templateEngine = new SpringTemplateEngine();
        templateEngine.addTemplateResolver(htmlTemplateResolver());
        return templateEngine;
    }

    @Bean
    public SpringResourceTemplateResolver htmlTemplateResolver() {
        SpringResourceTemplateResolver pdfTemplateResolver = new SpringResourceTemplateResolver();
        pdfTemplateResolver.setPrefix("classpath:/templates/");
        pdfTemplateResolver.setSuffix(".html");
        pdfTemplateResolver.setTemplateMode(StandardTemplateModeHandlers.HTML5.getTemplateModeName());
        pdfTemplateResolver.setCharacterEncoding(StandardCharsets.UTF_8.name());
        return pdfTemplateResolver;
    }
}
