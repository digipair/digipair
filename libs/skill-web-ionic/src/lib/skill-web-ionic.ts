const coreStyles = document.createElement('link');
coreStyles.rel = 'stylesheet';
coreStyles.type = 'text/css';
coreStyles.href = 'https://cdn.jsdelivr.net/npm/@ionic/core@8/css/core.css';
document.head.appendChild(coreStyles);

const ionicBundleStyles = document.createElement('link');
ionicBundleStyles.rel = 'stylesheet';
ionicBundleStyles.type = 'text/css';
ionicBundleStyles.href = 'https://cdn.jsdelivr.net/npm/@ionic/core@8/css/ionic.bundle.css';
document.head.appendChild(ionicBundleStyles);

const ionicScript = document.createElement('script');
ionicScript.type = 'module';
ionicScript.src = 'https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js';
document.head.appendChild(ionicScript);
