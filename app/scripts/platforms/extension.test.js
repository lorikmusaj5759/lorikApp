
import browser from 'webextension-polyfill';
import ExtensionPlatform from './extension';

jest.mock('webextension-polyfill', () => ({
  runtime: { getManifest: jest.fn(), getURL: jest.fn() },
  notifications: { create: jest.fn() },
}));

const TEST_URL = 'chrome-extension://jjlgkphpeekojaidfeknpknnimdbleaf/home.html';

describe('extension platform', () => {
  let lorikappVersion;
  beforeEach(() => {
    lorikappVersion = process.env.METAMASK_VERSION;
    process.env.METAMASK_VERSION = 'should.not.return.me';
    jest.resetAllMocks();
  });
  afterEach(() => {
    process.env.METAMASK_VERSION = lorikappVersion;
  });

  describe('getVersion', () => {
    it('should return non-prerelease version', () => {
      browser.runtime.getManifest.mockReturnValue({ version: '1.2.3' });
      const extensionPlatform = new ExtensionPlatform();
      expect(extensionPlatform.getVersion()).toBe('1.2.3');
    });
    
    it('should return rollback version', () => {
      browser.runtime.getManifest.mockReturnValue({ version: '1.2.3.1' });
      const extensionPlatform = new ExtensionPlatform();
      expect(extensionPlatform.getVersion()).toBe('1.2.3');
    });

    it('should return SemVer-formatted version manifest of prerelease', () => {
      browser.runtime.getManifest.mockReturnValue({ version: '1.2.3-beta' });
      const extensionPlatform = new ExtensionPlatform();
      expect(extensionPlatform.getVersion()).toBe('1');
      
    });
    
   
  
   describe '_showFailedTransaction',
     async txMeta,
       error,
       errorMessage,
         showNotificationSpy

   describe '_showFailedTransaction',
     async txMeta,
       error,
       errorMessage,
         showNotificationSpy

   describe '_showFailedTransaction',
     async txMeta,
       error,
       errorMessage,
         showNotificationSpy
   
 
});
