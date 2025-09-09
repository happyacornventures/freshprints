import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.dropzone}>
      <Text style={styles.dropText}>Drop a document to get started</Text>
      <Text style={styles.subText}>or click to browse files</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dropzone: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    borderWidth: 2,
    borderColor: "#dee2e6",
    borderStyle: "dashed",
    margin: 20,
    borderRadius: 8,
  },
  dropText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#495057",
    marginBottom: 8,
  },
  subText: {
    fontSize: 16,
    color: "#6c757d",
  },
});
