import { useApolloClient } from "@vue/apollo-composable";
import { CURRENT_USER } from "../graphql/schema";

// 获取客户端本地状态中的用户信息
export default function useLoggedInUserId() {
	const { client } = useApolloClient();
	const {
		currentUser: { id },
	} = client.cache.readQuery({ query: CURRENT_USER });
	return id;
}
