// eslint-disable-next-line react/prop-types
const CookieBanner = ({ showBanner, onAccept, onReject }) => {
  if (!showBanner) return null;

  return (
    <div id="cookie-banner" className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <p>
          By clicking &apos;Accept All&apos;, you agree to the use of all types of cookies to enhance site
          navigation. For more information, please visit our{' '}
          <a href="cookie-policy.html" className="underline text-blue-300">
            cookie policy
          </a>.
        </p>
        <div className="space-x-4">
          <button
            id="accept-cookies"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            onClick={onAccept}
          >
            Accept All
          </button>
          <button
            id="reject-cookies"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={onReject}
          >
            Reject All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
