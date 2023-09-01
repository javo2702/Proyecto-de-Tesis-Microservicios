package dev.jvall.ValoracionService.domain.service;

import com.google.api.gax.core.FixedCredentialsProvider;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.language.v1.LanguageServiceSettings;
import dev.jvall.ValoracionService.ValoracionServiceApplication;
import dev.jvall.ValoracionService.domain.Valoracion;
import dev.jvall.ValoracionService.domain.repository.ValoracionRepository;
import dev.jvall.ValoracionService.persistence.model.ValoracionRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
// Imports the Google Cloud client library
import com.google.cloud.language.v1.Document;
import com.google.cloud.language.v1.Document.Type;
import com.google.cloud.language.v1.LanguageServiceClient;
import com.google.cloud.language.v1.Sentiment;
import java.util.List;
import java.util.Objects;

@Service
public class ValoracionService {
    @Autowired
    ValoracionRepository valoracionRepository;
    public List<Valoracion> getValoracionList(String fecha){
        return valoracionRepository.getValoracionLista(fecha);
    }
    public Valoracion saveValoracion(ValoracionRequest valoracion){
        System.out.println(valoracion);
        Valoracion valo = new Valoracion();
        try {
            GoogleCredentials credentials = GoogleCredentials.fromStream(Objects.requireNonNull(ValoracionServiceApplication.class.getResourceAsStream("/proyecto-de-tesis-397205-126514f338d7.json")));
            LanguageServiceSettings settings = LanguageServiceSettings.newBuilder().setCredentialsProvider(FixedCredentialsProvider.create(credentials)).build();

            try (LanguageServiceClient language = LanguageServiceClient.create(settings)) {
                String text = valoracion.getOpinion();
                Document doc = Document.newBuilder().setContent(text).setType(Document.Type.PLAIN_TEXT).build();
                Sentiment sentiment = language.analyzeSentiment(doc).getDocumentSentiment();
                String sentimentClassify = classifySentiment(sentiment.getScore());
                valoracion.setClasificacion(sentimentClassify);
                valo = valoracionRepository.saveValoracion(valoracion);
                System.out.println("guardado");
            }
        } catch(Exception e){
            e.printStackTrace();
        }
        return valo;
    }
    private static String classifySentiment(float sentimentScore) {
        if (sentimentScore > 0.25) {
            return "Positivo";
        } else if (sentimentScore < -0.25) {
            return "Negativo";
        } else {
            return "Neutral";
        }
    }
}
