import { Text, FlatList, ActivityIndicator } from "react-native";
import OrderListItem from "@/src/components/OrderListItem";
import { useAdminOrderList } from "@/src/app/api/orders";
import { useInsertOrderSubscritpion } from "@/src/app/api/orders/subscriptions";

const OrdersScreen = () => {
  const {
    data: orders,
    isLoading,
    error,
  } = useAdminOrderList({ archived: false });

  useInsertOrderSubscritpion();

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
