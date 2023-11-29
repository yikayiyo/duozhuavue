import { GET_THEME } from "@/graphql/schema";
import { useApolloClient } from "@vue/apollo-composable";
import { ref } from "vue";

export default function useDark() {
  const { client } = useApolloClient();
  const {
    theme: { mode },
  } = client.cache.readQuery({ query: GET_THEME });
  const modeRef = ref(mode);
  const toggleMode = () => {
    modeRef.value = modeRef.value === "light" ? "dark" : "light";
    client.cache.writeQuery({
      query: GET_THEME,
      data: {
        theme: {
          mode: modeRef.value,
        },
      },
    });
  };
  return {
    mode: modeRef,
    toggleMode,
  };
}
