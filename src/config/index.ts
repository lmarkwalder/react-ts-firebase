const config = {
    emulator: {
        authEmulatorUrl: 'http://localhost:9099',
        emulatorHost: 'localhost',
        firestoreEmulatorPort: 8080,
        functionsEmulatorPort: 5001,
        storageEmulatorPort: 9199,
    },
    firebase: {
        // apiKey doesn't have to be considered as a secret
        // source: https://firebase.google.com/docs/projects/api-keys
        apiKey: 'AIzaSyAPmQvBwkGbZq0k2MwzbHHGi5uaDyAgWl4',
        authDomain: 'customer-metrics-test.firebaseapp.com',
        projectId: 'customer-metrics-test',
        storageBucket: 'customer-metrics-test.appspot.com',
        messagingSenderId: '642032926548',
        appId: '1:642032926548:web:a7e897c1fbae46174a12c1',
    },
};
export default config;
