# Admin page setup

The admin page (`/admin/`) lets you edit the website's text without touching the code.
It uses Firebase (free plan is enough) to store the text and to sign you in.
Until the steps below are done, the website simply shows the text written in `index.html`.

## 1. Create the Firebase project

1. Go to https://console.firebase.google.com and click **Create a project** (any name, e.g. `alirana-it`). Google Analytics is not needed.
2. On the project overview, click the **Web** icon (`</>`) to add a web app. Any nickname; skip Firebase Hosting.
3. Firebase shows a `firebaseConfig = { ... }` block. Copy it into `firebase-config.js`, replacing `null`:

   ```js
   window.FIREBASE_CONFIG = {
     apiKey: "...",
     authDomain: "...",
     projectId: "...",
     storageBucket: "...",
     messagingSenderId: "...",
     appId: "..."
   };
   ```

   These values are safe to commit. They identify the project; they don't grant access.

## 2. Create your admin login

1. In the console: **Build → Authentication → Get started**, then enable **Email/Password**.
2. Open the **Users** tab → **Add user**, and enter the email and password you'll sign in with.
3. Copy the new user's **User UID** (the long code in the users list).

## 3. Create the database and lock it down

1. **Build → Firestore Database → Create database**. Pick a location close to you (e.g. `eur3`) and start in **production mode**.
2. Open the **Rules** tab, replace everything with the contents of `firestore.rules`, and click **Publish**.
3. Open the **Data** tab → **Start collection**:
   - Collection ID: `admins`
   - Document ID: paste the **User UID** from step 2
   - Add one field, e.g. `email` (string) = your email. Save.

Only users listed in `admins` can change the website. To add another admin later, repeat step 2 for them and add their UID to `admins`.

## 4. Allow the live website to use the login

**Build → Authentication → Settings → Authorized domains → Add domain**: `gutuana.github.io`

(`localhost` is already allowed, so it also works when you run the site on your computer.)

## Using it

- Live: https://gutuana.github.io/test-repo/admin/
- Local: http://localhost:8000/admin/

The admin page isn't linked from the website and is hidden from search engines,
but anyone who knows the address can still open it. The password and the `admins`
list are what keep the site safe, so use a strong password.
