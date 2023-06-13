function checkFileExists(filePath) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Assume the file check logic here
        const fileExists = true; // Replace with your actual file existence check
  
        if (fileExists) {
          resolve('File exists');
        } else {
          reject(new Error('File does not exist'));
        }
      }, 1000);
    });
  }
  
  // Usage example:
  checkFileExists('path/to/file')
    .then((message) => {
      console.log(message); // File exists
    })
    .catch((error) => {
      console.error(error.message); // File does not exist
    });
  