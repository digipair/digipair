const globalInstance: any = typeof window === 'undefined' ? global : window;
const config = globalInstance.__DIGIPAIR_CONFIG__;
const version = '8';

const coreStyles = document.createElement('link');
coreStyles.rel = 'stylesheet';
coreStyles.type = 'text/css';
coreStyles.href = `${config.BASE_URL}/@ionic/core@${version}/css/core.css`;
document.head.appendChild(coreStyles);

const ionicBundleStyles = document.createElement('link');
ionicBundleStyles.rel = 'stylesheet';
ionicBundleStyles.type = 'text/css';
ionicBundleStyles.href = `${config.BASE_URL}/@ionic/core@${version}/css/ionic.bundle.css`;
document.head.appendChild(ionicBundleStyles);

const ionicScript = document.createElement('script');
ionicScript.type = 'module';
ionicScript.src = `${config.BASE_URL}/@ionic/core@${version}/dist/ionic/ionic.esm.js`;
document.head.appendChild(ionicScript);
