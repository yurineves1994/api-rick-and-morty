package api.rickmorty.response;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class AllChacaracteres {
  private List<CharacterResponse> results;
}
