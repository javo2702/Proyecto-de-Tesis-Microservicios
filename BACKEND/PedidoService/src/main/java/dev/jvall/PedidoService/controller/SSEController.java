package dev.jvall.PedidoService.controller;

import org.springframework.http.MediaType;
import org.springframework.http.codec.ServerSentEvent;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.FluxSink;

import java.time.Duration;
import java.util.concurrent.atomic.AtomicReference;

@RestController
@RequestMapping("/sse")
public class SSEController {
    private final AtomicReference<FluxSink<ServerSentEvent<String>>> sinkReference = new AtomicReference<>();
    private final Flux<ServerSentEvent<String>> sseFlux = Flux.create(sink -> sinkReference.set(sink), FluxSink.OverflowStrategy.IGNORE);

    @GetMapping(produces = "text/event-stream")
    public Flux<ServerSentEvent<String>> getEvents() {
        return sseFlux.delayElements(Duration.ofSeconds(1)); // Puedes ajustar el intervalo según tus necesidades
    }

    public void sendNotification(String message) {
        FluxSink<ServerSentEvent<String>> sink = sinkReference.get();
        if (sink != null) {
            sink.next(ServerSentEvent.builder(message).build());
        }
    }
}
