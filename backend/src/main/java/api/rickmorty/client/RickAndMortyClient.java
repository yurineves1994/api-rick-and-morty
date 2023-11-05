package api.rickmorty.client;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import api.rickmorty.response.AllChacaracteres;
import api.rickmorty.response.CharacterResponse;
import api.rickmorty.response.LocationResponse;
import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@Slf4j
public class RickAndMortyClient {

  private WebClient webClient;

  public RickAndMortyClient(WebClient.Builder builder) {
    webClient = builder.baseUrl("https://rickandmortyapi.com/api/").build();
  }

  public Mono<CharacterResponse> findAndCharacterById(String id) {
    log.info("findAndCharacterById {}", id);

    return webClient
        .get()
        .uri("/character/{id}", id)
        .accept(MediaType.APPLICATION_JSON)
        .retrieve()
        .bodyToMono(CharacterResponse.class);
  }

  public Mono<LocationResponse> findAndLocationById(String id) {
    log.info("findAndLocationById {}", id);

    return webClient
        .get()
        .uri("/location/{id}", id)
        .accept(MediaType.APPLICATION_JSON)
        .retrieve()
        .bodyToMono(LocationResponse.class);
  }

  public Flux<AllChacaracteres> findAllCaracteres() {
    log.info("findAllCaracteres");

    return webClient
        .get()
        .uri("/character/")
        .accept(MediaType.APPLICATION_JSON)
        .retrieve()
        .bodyToFlux(AllChacaracteres.class);
  }
}
