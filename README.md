# Welcome to the iSummarize Backend Repository

This repository will show you all the commands to run the frontend portion of the application. iSummarize is an application that allows users to summarize documents or portions of texts into easy-to-read detailed notes.

## Features

- **Document Summary:** Summarize your content by drag and drop or copy and pasting.
- **Chatbot Assistant:** Any questions? Ask our AI chatbot.
- **Discussion Forum:** See what others are saying, leave a comment, create a post.
- **Login:** Create your own account and make the application personal.

## Installation

### Downloading the Application

**Download the Application Zip:**

Click on [this link](https://github.com/silvaom4/Front-Capstone/) to download the application as a zip file.

**Extract the Zip File:**

Once the download is complete, extract the contents of the zip file to your desired location on your local machine.

### Frontend Installation

1. **Ensure Node.js is Installed:** Make sure Node.js is installed on your system. If not, download and install Node.js.
2. **Navigate to the Frontend Directory:** In your terminal, navigate to the directory containing your frontend code (usually named frontend or similar).
3. **Initialize package.json:** Run the following command to create a package.json file:
```
npm install
```
### Running the Application

Assuming the Backend is already up and running:

1. **Start Your Frontend Development Server:**
- Navigate to your frontend directory in the terminal.
- Run the following command to start the development server:
  ```
  npm start
  ```

2. **Access Your Application:**
- Open your web browser and go to [http://localhost:4000](http://localhost:4000) (or the port specified by your frontend server) to view your application.

  
## Usage

### Summarization and Upload File Components

1. **Summarization Component:**
   - Enter your text or upload a document.
   - Click the "Submit" button to generate a summary.
   - Optionally, save the generated response by clicking the "Save Response" button.
   
2. **File Upload Component:**
   - Drag and drop a PDF or TXT file into the designated area or click to browse and select a file.
   - The file content will be automatically extracted and displayed for summarization.

### Chatbot Component

1. **Chatbot:**
   - Click on the chatbot icon to open the chat interface.
   - Type your questions or queries about website usage.
   - Receive responses and assistance from the AI chatbot.

### Forum Component

1. **Forum:**
   - Browse existing posts or create a new post by clicking the "Add Post" button.
   - Enter a topic and message for your post.
   - Click the "Submit" button to add your post to the forum.
   - Engage in discussions with other users by commenting on posts.
