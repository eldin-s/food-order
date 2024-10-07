import { ActivityIndicator, FlatList, Text } from "react-native";
import ProductListItem from "@/src/components/ProductListItem";
import { useProductList } from "../../api/products";

export default function MenuScreen() {
  const { data: products, error, isLoading } = useProductList();

  if (isLoading) return <ActivityIndicator />;

  if (error) {
    return <Text>Error to fetch Data</Text>;
  }

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
}
