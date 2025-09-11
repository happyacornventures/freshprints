import { Pressable, StyleSheet, Text } from "react-native";

export default function Index() {
  const handlePress = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = (e) => console.log('Selected:', (e.target as HTMLInputElement).files?.[0]);
    input.click();
  };

  return (
    <Pressable style={styles.dropzone} onPress={handlePress}>
      <Text style={styles.dropText}>Drop a document to get started</Text>
      <Text style={styles.subText}>or click to browse files</Text>
    </Pressable>
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
