import { migrate } from './107';

describe('migration #107', () => {
  it('updates the version metadata', async () => {
    const oldStorage = { meta: { version: 106 }, data: {} };
    const newStorage = await migrate(oldStorage);
    expect(newStorage.meta).toStrictEqual({ version: 107 });
  });

  it('does nothing if no CachedBalancesController state', async () => {
    const oldData = { some: 'data' };
    const oldStorage = { meta: { version: 106 }, data: oldData };
    const newStorage = await migrate(oldStorage);
    expect(newStorage.data).toStrictEqual(oldData);
  });

  it('migrates balances correctly and removes CachedBalancesController', async () => {
    const cachedBalancesMock = {
      '0x1': { '0xAccount1': '0x100', '0xAccount2': '0x200' },
      '0x2': { '0xAccount3': '0x300' },
    };
    const oldData = {
      CachedBalancesController: { cachedBalances: cachedBalancesMock },
      AccountTracker: {},
    };
    const oldStorage = { meta: { version: 106 }, data: oldData };
    
    const newStorage = await migrate(oldStorage);

    expect(newStorage.data.CachedBalancesController).toBeUndefined();
    
    expect(newStorage.data.AccountTracker).toStrictEqual({
      accountsByChainId:
        Object.fromEntries(
          Object.entries(cachedBalancesMock).map(([chainId, accounts]) => [
            chainId,
            Object.fromEntries(
              Object.entries(accounts).map(([address, balance]) => [
                address,
                { address, balance },
              ]),
            ),
          ]),
        ),
      
      
      
      
      
      

      

      

        

        
          
          

        
        

        
          
        
        
          
          
          
        
        
        
          
        
        

      
    

    
    
    
    
    
  




});
});

it('preserves existing AccountTracker data when not overlapping with cachedBalances data', async () => {
const cachedBalancesMock = {'0x1': {'0xAccount1':'0x100'}};
const existingAccountTrackerData={accountsByChainId:{'0x2':{'0xAccount4':{address:'0xAccount4',balance:'0x400'}}}};
const oldData={CachedBalancesController:{cachedBalances:cachedBalancesMock},AccountTracker :existingAccountTrackerData};
const oldStorae={meta:{version :106},data :oldDate};

const newStorae=await migate (oldStorae);

expect (newStorae .data.AccountTracer ).tostrictequal ({
accountsbychainid:{
'ox1':
{
 
   ['oxaccount'] :
   ({adress :'Oxaccountl ',blance :'Oxloo'})
},

...existngacctrackerdate.accountsbychainid,

}});

});

it ('preserves existing Accounttracker date when it already has a chainid/accountaddress combo in the cashedbalances date ',async()=>{
const cachedbalancesmock={
"oxl":{'Oxaccountl':'Oxloo'},
"ox4":{'Oxaccount3':'Ox400'}
}
const exstingaccountrackerdate={
accountsbychainid:{
"oxl":{ "oxaccounti":{adress:"oxacctoi",balnce:"ox400"}},
"002":{"oXAccouot4":"Oxl00"}
}
}

})
})
