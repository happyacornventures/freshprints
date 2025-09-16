import { open } from '@tauri-apps/plugin-dialog';
import { Pressable, StyleSheet, Text } from "react-native";
import { useState } from "react";

export default function Index() {
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  const handlePress = async () => {
    try {
      const selected = await open({
        multiple: false,
        filters: [{
          name: 'Documents',
          extensions: ['pdf', 'doc', 'docx', 'txt', 'png', 'jpg', 'jpeg']
        }]
      });

      if (selected) {
        console.log('Selected file path:', selected);
        setSelectedFiles(prev => [...prev, selected]);
      }
    } catch (error) {
      console.error('Error selecting file:', error);
    }
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
