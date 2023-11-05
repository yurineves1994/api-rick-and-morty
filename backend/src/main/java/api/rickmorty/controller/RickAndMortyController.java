package api.rickmorty.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import api.rickmorty.client.RickAndMortyClient;
import api.rickmorty.response.AllChacaracteres;
import api.rickmorty.response.CharacterResponse;
import lombok.AllArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@AllArgsConstructor
@RequestMapping("/web-client")
public class RickAndMortyController {
  
  RickAndMortyClient rickAndMortyClient;

  @GetMapping("/character/{id}")
  public Mono<CharacterResponse> findAndCharacterById(@PathVariable String id) {
    return rickAndMortyClient.findAndCharacterById(id);
  }

  @GetMapping("/characteres")
  public Flux<AllChacaracteres> findAllCaracteres() {
    return rickAndMortyClient.findAllCaracteres();
  }
}
