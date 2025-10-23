React Native Demo — Layout & Registration Screen

This is a minimal Expo-based React Native demo showing a modern registration screen and basic layout.

Prerequisites
- Node.js (>=16). Verify with `node --version`.
- npm. Verify with `npm --version`.
- Expo CLI is optional. You can use `npx expo` without installing globally.
- A phone with Expo Go (Android/iOS) or an Android/iOS emulator.

Quick start (PowerShell)

1. Open PowerShell and change to the project folder:

```powershell
cd "C:\Users\shaar\Documents\aryan\react_native_demo"
```

2. Install dependencies (only once):

```powershell
npm install
```

3. Start the Expo dev server:

```powershell
npm start
# or use npx
npx expo start
```

- This opens Expo DevTools in your browser and shows a QR code.
- Use the Expo Go app on your phone to scan the QR code and open the app.
- Or press `a` in the terminal to open Android emulator (if configured), or `i` for iOS (macOS only).

Stop the dev server
- In the terminal where `npm start` is running press `Ctrl+C`.

Files
- `App.js` — entry point (renders the registration screen)
- `RegistrationScreen.js` — the registration form with fields: name, email, password, confirm password, phone, address
- `package.json` — scripts and deps
- `.gitignore`

Notes & Troubleshooting
- If `npm start` fails with "expo not found", install CLI globally: `npm install -g expo-cli` or run via `npx expo start`.
- If QR scanning doesn't work, press `d` in Expo DevTools to enable the development server LAN/Tunnel options.
- To run on Android emulator, ensure Android Studio and an AVD are installed and running.

Next steps I can do for you
- Commit and push these files to your repo (tell me git `user.name`/`user.email` and whether to create a branch)
- Add form validation (email regex, password strength)
- Add navigation and a success/thank-you screen

If you want me to start or stop the dev server here, or commit & push the project, tell me which action to take and provide git config if needed.
