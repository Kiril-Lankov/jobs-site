import { useState } from 'react';

const useCookies = () => {
  const [cookieConsent, setCookieConsent] = useState(sessionStorage.getItem('cookiesAccepted'));
  const [showBanner, setShowBanner] = useState(cookieConsent === null);
  console.log('cookie consent:',cookieConsent)

  const acceptCookies = () => {
    sessionStorage.setItem('cookiesAccepted', 'true');
    setCookieConsent('true');
    setShowBanner(false);
  };

  const rejectCookies = () => {
    sessionStorage.setItem('cookiesAccepted', 'false');
    setCookieConsent('false');
    setShowBanner(false);
  };

  return {
    showBanner,
    acceptCookies,
    rejectCookies,
  };
};

export default useCookies;
