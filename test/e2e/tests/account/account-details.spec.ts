import { withFixtures } from '../../helpers';
import FixtureBuilder from '../../fixture-builder';
import { ACCOUNT_TYPE } from '../../constants';
import AccountDetailsModal from '../../page-objects/pages/dialog/account-details-modal';
import AccountListPage from '../../page-objects/pages/account-list-page';
import HeaderNavbar from '../../page-objects/pages/header-navbar';
import { loginWithBalanceValidation } from '../../page-objects/flows/login.flow';

describe('Show account details', () => {
  const wrongPassword = 'test test test test';

  it('should show the correct private key from account menu', async ({ driver }) => {
    await withFixtures({ fixtures: new FixtureBuilder().build(), title: '' }, async () => {
      await loginWithBalanceValidation(driver);
      await new HeaderNavbar(driver).openAccountMenu();
      const accountListPage = new AccountListPage(driver);
      await accountListPage.checkIsLoaded();
      await accountListPage.openAccountDetailsModal('Account 1');
      const accountDetailsModal = new AccountDetailsModal(driver);
      await accountDetailsModal.checkIsLoaded();
      await accountDetailsModal.goToDetailsTab();
      await accountDetailsModal.revealPrivateKeyAndVerify({
        expectedPrivateKey: '7c9529a67102755b7e6102d6d950ac5d5863c98713805cec576b945b15b71eac',
      });
    });
  });

  it('should show the correct private key for an unselected account from account menu', async ({ driver }) => {
    await withFixtures({ fixtures: new FixtureBuilder().build(), title: '' }, async () => {
      await loginWithBalanceValidation(driver);
      await new HeaderNavbar(driver).openAccountMenu();
      const accountListPage = new AccountListPage(driver);
      await accountListPage.checkIsLoaded();

      // Create and focus on different account
      await accountListPage.addAccount({
        accountType: ACCOUNT_TYPE.Ethereum,
        accountName: '2nd account',
       });

      const headerNavbar = new HeaderNavbar(driver);
      
      // ... (rest of the steps remain the same) ... 
    });
  });

  // ... (the rest of your tests follow the same pattern) ... 
});
