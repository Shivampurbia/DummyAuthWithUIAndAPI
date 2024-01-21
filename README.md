**Project Description: React Native Authentication App**

Create a comprehensive React Native authentication app with a multi-page UI, integrating authentication APIs, Redux for state management, and local storage for token persistence. The app includes Signup, Login, and Home pages, with essential features such as error handling, loading indicators, and seamless navigation flow.

**Dummy api's**

https://reqres.in/login

https://reqres.in/register


Defined users -
[{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"},
{"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},{"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},{"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},{"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},{"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},{"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}
]

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
