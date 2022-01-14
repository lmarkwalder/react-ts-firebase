// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth, connectAuthEmulator} from 'firebase/auth';
import {getFirestore, connectFirestoreEmulator} from 'firebase/firestore';
import {getStorage, connectStorageEmulator} from 'firebase/storage';
import {getFunctions, connectFunctionsEmulator} from 'firebase/functions';
import config from '../config';

if (process.env.NODE_ENV !== 'production') {
    const auth = getAuth();
    connectAuthEmulator(auth, config.emulator.authEmulatorUrl);
    const db = getFirestore();
    connectFirestoreEmulator(db,
        config.emulator.emulatorHost,
        config.emulator.firestoreEmulatorPort);
    const storage = getStorage();
    connectStorageEmulator(storage,
        config.emulator.emulatorHost,
        config.emulator.storageEmulatorPort);
    const functions = getFunctions();
    connectFunctionsEmulator(functions,
        config.emulator.emulatorHost,
        config.emulator.functionsEmulatorPort);
}

const app = initializeApp(config.firebase);

export {
    app,
};
