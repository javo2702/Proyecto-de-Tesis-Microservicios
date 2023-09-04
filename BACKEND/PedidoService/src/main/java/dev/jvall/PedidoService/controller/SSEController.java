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
    private final AtomicReference<FluxSink<ServerSentEvent<String>>> sinkReferenceOrder = new AtomicReference<>();
    private final AtomicReference<FluxSink<ServerSentEvent<String>>> sinkReferenceCashier = new AtomicReference<>();
    private final AtomicReference<FluxSink<ServerSentEvent<String>>> sinkReferenceAdmin = new AtomicReference<>();
    private final AtomicReference<FluxSink<ServerSentEvent<String>>> sinkReferenceKitchen = new AtomicReference<>();

    private final Flux<ServerSentEvent<String>> sseFluxOrder = Flux.create(sink -> sinkReferenceOrder.set(sink), FluxSink.OverflowStrategy.IGNORE);
    private final Flux<ServerSentEvent<String>> sseFluxCashier = Flux.create(sink -> sinkReferenceCashier.set(sink), FluxSink.OverflowStrategy.IGNORE);
    private final Flux<ServerSentEvent<String>> sseFluxAdmin = Flux.create(sink -> sinkReferenceAdmin.set(sink), FluxSink.OverflowStrategy.IGNORE);
    private final Flux<ServerSentEvent<String>> sseFluxKitchen = Flux.create(sink -> sinkReferenceKitchen.set(sink), FluxSink.OverflowStrategy.IGNORE);

    @GetMapping(value="/order",produces = "text/event-stream")
    public Flux<ServerSentEvent<String>> getEventsOrder() {
        return sseFluxOrder.delayElements(Duration.ofSeconds(1)); // Puedes ajustar el intervalo según tus necesidades
    }

    public void sendNotificationOrder(String message) {
        FluxSink<ServerSentEvent<String>> sink = sinkReferenceOrder.get();
        if (sink != null) {
            sink.next(ServerSentEvent.builder(message).build());
        }
    }
    @GetMapping(value="/cashier",produces = "text/event-stream")
    public Flux<ServerSentEvent<String>> getEventsCashier() {
        return sseFluxCashier.delayElements(Duration.ofSeconds(1)); // Puedes ajustar el intervalo según tus necesidades
    }

    public void sendNotificationCashier(String message) {
        FluxSink<ServerSentEvent<String>> sink = sinkReferenceCashier.get();
        if (sink != null) {
            sink.next(ServerSentEvent.builder(message).build());
        }
    }
    @GetMapping(value="/admin",produces = "text/event-stream")
    public Flux<ServerSentEvent<String>> getEventsAdmin() {
        return sseFluxAdmin.delayElements(Duration.ofSeconds(1)); // Puedes ajustar el intervalo según tus necesidades
    }

    public void sendNotificationAdmin(String message) {
        FluxSink<ServerSentEvent<String>> sink = sinkReferenceAdmin.get();
        if (sink != null) {
            sink.next(ServerSentEvent.builder(message).build());
        }
    }
    @GetMapping(value="/kitchen",produces = "text/event-stream")
    public Flux<ServerSentEvent<String>> getEventsKitchen() {
        return sseFluxKitchen.delayElements(Duration.ofSeconds(1)); // Puedes ajustar el intervalo según tus necesidades
    }

    public void sendNotificationKitchen(String message) {
        FluxSink<ServerSentEvent<String>> sink = sinkReferenceKitchen.get();
        if (sink != null) {
            sink.next(ServerSentEvent.builder(message).build());
        }
    }
}
