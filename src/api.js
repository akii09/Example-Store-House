 
 const queryString = window.location.search;
 const urlParams = new URLSearchParams(queryString);
 const example = urlParams.get('example')
    console.log(example);
  // Replace with your GitHub repository information
  const owner = 'akii09';
  const repo = 'quick-gpt';
  const filePath = example;
 // Function to fetch file content from GitHub API
 async function fetchFileContent() {
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;
    // showLoadingAnimation();
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
    
        if (response.ok) {
          // Decode Base64 content
          const fileContent = atob(data.content);
    
          // Display the decoded code in an HTML element
          const codeElement = document.getElementById('code');
          codeElement.textContent = fileContent;
          Prism.highlightElement(codeElement);
        } else {
          console.log('Error:', data.message);
        }
      } catch (error) {
        console.log('Error:', error.message);
      }
}

// Call the function to fetch file content
fetchFileContent();