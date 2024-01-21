**Project Description: React Native Authentication App**

Create a comprehensive React Native authentication app with a multi-page UI, integrating authentication APIs, Redux for state management, and local storage for token persistence. The app includes Signup, Login, and Home pages, with essential features such as error handling, loading indicators, and seamless navigation flow.

**Key Features:**
1. **Signup Page:**
   - User-friendly form for new users to create an account.
   - Input validation and error handling for invalid entries.
   - Integration with an authentication API for user registration.
   - Display loading indicator during API requests.

2. **Login Page:**
   - Login form with email/password fields for existing users.
   - Authentication API integration for user login.
   - Proper error handling for login failures.
   - Loading indicator during the login process.

3. **Home Page:**
   - A secured home page accessible only after successful authentication.
   - Integration with other APIs for fetching user-specific data.
   - Navigation flow ensuring a smooth transition between pages.
   - Logout functionality to clear user data and token.

4. **Redux Integration:**
   - Implement Redux for centralized state management.
   - Actions and reducers for authentication-related state changes.
   - Redux middleware for handling asynchronous API calls.

5. **Local Memory (AsyncStorage) for Token Persistence:**
   - Utilize AsyncStorage or a similar local storage solution for token persistence.
   - Save and retrieve authentication tokens securely.
   - Manage token expiration and refresh logic.

6. **Navigation Flow:**
   - Implement a navigation flow using a popular library (e.g., React Navigation).
   - Auth Navigator for handling authentication-related screens.
   - Conditional rendering to redirect users based on their authentication status.

7. **Loader and Error Handling:**
   - Display loading indicators during API requests to enhance user experience.
   - Handle errors gracefully, providing meaningful messages to users.
   - Clear error states on subsequent user interactions.

**Technologies:**
- React Native
- Redux for State Management
- React Navigation for Navigation Flow
- AsyncStorage for Token Storage
- Axios for API Integration

**Project Goal:**
Create a robust, user-friendly authentication app showcasing React Native best practices, ensuring secure API integration, and delivering a seamless user experience. The project serves as a foundation for future enhancements and can be a valuable learning resource for React Native development.
