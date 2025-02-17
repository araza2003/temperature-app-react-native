Here’s a step-by-step guide for creating and deploying your first **React Native** application using **Expo** and deploying it on the **Expo Store**:

---

## **CREATE AND DEPLOY YOUR FIRST REACT NATIVE APPLICATION USING EXPO**

### **Step #01. Install Expo CLI**

1. **Install Node.js** (If not already installed):
   - Go to [https://nodejs.org/en](https://nodejs.org/en).
   - Download and install the **LTS version**.

2. **Install Expo CLI**:
   - Open your terminal or command prompt and run the following command:
     ```bash
     npm install -g expo-cli
     ```

3. **Verify the installation**:
   - To ensure **Expo CLI** is installed, run:
     ```bash
     expo --version
     ```

---

### **Step #02. Create a New React Native App using Expo**

1. **Create a new Expo project**:
   - Open a terminal and navigate to the folder where you want to create your project.
   - Run the following command to create a new React Native app using Expo:
     ```bash
     expo init your_project_name
     ```
   
2. **Choose a template**:
   - You’ll be prompted to choose a template. For a simple app, you can select the **blank template**.

3. **Navigate into your project directory**:
   ```bash
   cd your_project_name
   ```

4. **Install dependencies**:
   - Run the command to install the required dependencies:
     ```bash
     npm install
     ```

5. **Run the app**:
   - You can now start the app locally on your device or simulator by running:
     ```bash
     expo start
     ```

   - Scan the QR code with the **Expo Go** app (available on iOS/Android) to preview your app on your mobile device.

---

### **Step #03. Install Git (Not GitHub)**

1. **Go to**: [https://git-scm.com/downloads](https://git-scm.com/downloads).
2. **Download** the version compatible with your operating system.
3. **Run the installer** and follow the installation prompts.
4. **Verify Installation**:
   - Open **Command Prompt** or terminal.
   - Run the command:  
     ```bash
     git -v
     ```  
     (This will return the Git version).
5. **Verify Environment Variables**:
   - Open **Environment Variables** from the search bar.
   - Under **System Variables**, click on **Path** then **Edit**.
   - Verify that the path to where **Git** is installed is present there.
   - If not, **add** the path manually.

---

### **Step #04. Push Your Application to GitHub**

1. **Go to**: [https://github.com/](https://github.com/).
2. **Login/SignUp** to GitHub.
3. **Create a new repository** (do not initialize with a `README.md` or `.gitignore` because your project already contains these files).
4. **Open Terminal** and navigate to your project directory:
   - Use the command:  
     ```bash
     cd "path_to_your_project_directory"
     ```
   - Or, right-click the folder and choose **Open Terminal** from the context menu.
   
5. **Initialize the Git repository**:
   ```bash
   git init
   ```

6. **Add the remote GitHub repository**:
   ```bash
   git remote add origin <repository_url>
   ```

7. **Stage all files** for the initial commit:
   ```bash
   git add .
   ```

8. **Commit the changes** with a message:
   ```bash
   git commit -m "Initial commit"
   ```

9. **Push the changes to GitHub**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

---

### **Step #05. Deploy Your React Native App on the Expo Store**

1. **Go to**: [https://expo.dev/](https://expo.dev/).
2. **Login/SignUp** to Expo.
3. **Navigate to your Projects**:
   - In the Expo Dashboard, click on **Add New Project**.

4. **Publish your app**:
   - Before deploying, you need to **publish** your app to Expo:
     ```bash
     expo publish
     ```
   - This will upload your app to the Expo servers and generate a URL for your app.

5. **Go to your Expo project page**:
   - Once published, go to your Expo project page in your browser.
   - You'll see an option to **Submit to Expo Store**.

6. **Submit your app**:
   - **Follow the instructions** provided by Expo to submit your app to the Expo Store. This includes setting up your app’s metadata, like its name, description, and icons.

7. **Approval and Availability**:
   - After submission, Expo will review your app. Once approved, your app will be available on the **Expo Store** for others to discover and install.

---

### **Step #06. Update and Redeploy**

Whenever you make changes to your app:

1. **Make your changes** in the `App.js` or other files.
2. **Publish the changes**:
   ```bash
   expo publish
   ```
   This will update your app in the Expo Store with the latest version.

3. **Redeploy (if necessary)**:
   - If you need to **submit a new version** or updates, you can follow the same submission process again through the Expo Store.

---

### 🎉 **Your React Native App is Now Live on the Expo Store!** 🚀

---

This guide covers creating a **React Native** app using **Expo**, pushing your code to **GitHub**, and deploying your app to the **Expo Store** for public use. Let me know if you need further assistance!
