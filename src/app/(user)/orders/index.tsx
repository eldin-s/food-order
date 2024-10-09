import { View, Text, FlatList, ActivityIndicator } from "react-native";
import OrderListItem from "@/src/components/OrderListItem";
import { useUserOrderList } from "../../api/orders";

const OrdersScreen = () => {
  const { data: orders, isLoading, error } = useUserOrderList();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to load orders</Text>;
  }

  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrderListItem order={item} />}
      contentContainerStyle={{ gap: 10, padding: 10 }}
    />
  );
};

export default OrdersScreen;
