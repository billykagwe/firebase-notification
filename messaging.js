/** @format */

import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);
