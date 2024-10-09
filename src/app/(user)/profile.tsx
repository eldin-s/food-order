import Button from "@/src/components/Button";
import { supabase } from "@/src/lib/supabase";
import { View, Text, StyleSheet } from "react-native";

const ProfileScreen = () => {
  return (
    <View>
      <Text style={styles.heading}>Profile</Text>

      <Button text="Sign out" onPress={() => supabase.auth.signOut()} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  heading: {
    marginTop: 6,
    fontSize: 20,
    textAlign: "center",
  },
});
