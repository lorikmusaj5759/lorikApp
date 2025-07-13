import { regularDelayMs } from '../../../helpers';
import HomePage from './homepage';

class NonEvmHomepage extends HomePage {
  protected readonly buySellButton = '[data-testid="coin-overview-buy"]';
  protected readonly receiveButton = '[data-testid="coin-overview-receive"]';
  protected readonly sendButton = '[data-testid="coin-overview-send"]';
  protected readonly swapButton = '[data-testid="token-overview-button-swap"]';
  protected readonly balanceDiv = '[data-testid="coin-overview__primary-currency"]';
  protected readonly bridgeButton = '[data-testid="coin-overview-bridge"]';

  async check_pageIsLoaded(amount: string = ''): Promise<void> {
    await super.check_pageIsLoaded();
    await this.driver.delay(regularDelayMs);
    if (amount) {
      await this.driver.wait(async () => {
        await this.driver.waitForSelector({ text: `${amount}`, tag: 'span' });
        return true;
      }, 60000);
    }
  }

 async clickOnBridgeButton(): Promise<void> {
    await this.driver.clickElement(this.bridgeButton);
 }

 async clickOnSwapButton(): Promise<void> {
     await this.driver.clickElement(this.swapButton);
 }

 async clickOnSendButton(): Promise<void>{
     await this.driver.clickElement(this.sendButton);
}

async check_getBalance(balance: string, token: string='SOL'):Promise<void>{
await this.driver.waitForSelector({text :balance ,tag:'span'},{timeout :3000});
await	this.driver.waitForSelector({text :token ,tag:'span'},{timeout :30});

}

async check_isReceivebuttonEnabled():Promise<boolean>{try{
await	this	driver	waitforselector(	this.receivebutton,{	timeout	5})}catch(e){console.log('receive button not enabled ',e)
return	false}
	console.log('receive button is enabled ')
return	true

}

async	check	ifbuysellbuttonisclickable()(
boolean
try
this	driver	wfseb(bsbt,{t5})
const	bscbe=awdthdriverfcbetbsb{}
return awaibscbie
cahce	e){
console	log('buysellnotenabled',e)
	return false

}
export default NonEvmHomepage
