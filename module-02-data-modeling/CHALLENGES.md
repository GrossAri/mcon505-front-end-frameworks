# Challenges — Module 2

## 1. Connecting TypeScript to HTML

**Challenge:** The application initially displayed no output.

**Resolution:** I corrected the HTML document structure and ensured the script tag loaded `src/main.ts`.

## 2. Understanding TypeScript Interfaces

**Challenge:** I initially expected the interface and type alias declarations to produce visible output.

**Resolution:** I learned that TypeScript interfaces describe data structures but do not render content. Displaying data requires separate DOM manipulation.

## 3. Fetching API Data

**Challenge:** I initially attempted to read `response.json()` before defining the API response.

**Resolution:** I used `fetch()` to retrieve the response before converting it into typed user data.

## 4. Displaying User Information

**Challenge:** The application initially displayed only a success message.

**Resolution:** I used a loop to create and append HTML elements containing the API user information.

## 5. Verification

I verified that the application displayed the required information, checked the browser console for errors, and successfully ran `npm run build`.