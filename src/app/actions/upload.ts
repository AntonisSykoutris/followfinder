'use server';

export async function processFiles(formData: FormData) {
  const files: File[] = [];
  const data: { following: any[]; followers: any[] } = {
    following: [],
    followers: []
  };

  try {
    // Extract files from FormData
    formData.forEach((file, key) => {
      if (key === 'files') {
        files.push(file as File);
      }
    });

    // Process each file and categorize its data
    for (const file of files) {
      const fileText = await file.text();
      const jsonData = JSON.parse(fileText);

      if (jsonData.relationships_following) {
        // Handle 'following.json' format
        data.following = jsonData.relationships_following.flatMap(
          (item: { string_list_data: any[] }) =>
            item.string_list_data.map(
              (data: { value: any; timestamp: any }) => ({
                value: data.value,
                timestamp: data.timestamp
              })
            )
        );
      } else if (Array.isArray(jsonData)) {
        // Handle 'followers_1.json' format
        data.followers = jsonData.flatMap(item =>
          item.string_list_data.map((data: { value: any; timestamp: any }) => ({
            value: data.value,
            timestamp: data.timestamp
          }))
        );
      } else {
        throw new Error('Unexpected JSON structure');
      }
    }
    // Return the processed data to be used in the client-side
    return data;
  } catch (error) {
    console.error('Error processing files:', error);
    throw new Error('Failed to process files');
  }
}
