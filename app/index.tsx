import { open } from '@tauri-apps/plugin-dialog';
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [selectedFiles, setSelectedFiles] = useState<{ path: string, frequency: string }[]>([]);

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
        setSelectedFiles(prev => [...prev, {path: selected as string, frequency: 'Daily'}]);
      }
    } catch (error) {
      console.error('Error selecting file:', error);
    }
  };

  const renderFileItem = ({ item }: { item: string }) => (
    <View style={styles.fileItem}>
      <Text style={styles.fileName}>{item.split('/').pop()}</Text>
      <Text style={styles.filePath}>{item}</Text>
      <Text style={styles.frequency}>Print Frequency: Daily</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Pressable style={styles.dropzone} onPress={handlePress}>
        <Text style={styles.dropText}>Drop a document to get started</Text>
        <Text style={styles.subText}>or click to browse files</Text>
      </Pressable>
      
      {selectedFiles.length > 0 && (
        <View style={styles.fileListContainer}>
          <Text style={styles.fileListTitle}>Selected Files ({selectedFiles.length})</Text>
          <FlatList
            data={selectedFiles.map(file => file.path)}
            renderItem={renderFileItem}
            keyExtractor={(item, index) => `${item}-${index}`}
            style={styles.fileList}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  dropzone: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    borderWidth: 2,
    borderColor: "#dee2e6",
    borderStyle: "dashed",
    borderRadius: 8,
    marginBottom: 20,
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
  fileListContainer: {
    maxHeight: 300,
  },
  fileListTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#495057",
    marginBottom: 10,
  },
  fileList: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#dee2e6",
  },
  fileItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f3f4",
  },
  fileName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#212529",
    marginBottom: 4,
  },
  filePath: {
    fontSize: 12,
    color: "#6c757d",
  },
  frequency: {
    fontSize: 12,
    color: "#495057",
    marginTop: 4,
  },
});
