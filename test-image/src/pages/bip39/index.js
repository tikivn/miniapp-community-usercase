import * as bip39 from 'bip39';

Page({
  async onLoad(query) {
    console.log('ahihi');
    const mnemonic = bip39.generateMnemonic()
    const seed = await bip39.mnemonicToSeed(mnemonic)
    console.log({ mnemonic, seed: seed.toString('hex') });
    my.reportAnalytics("impression", {
      userId: 1,
      timestamp: Date.now(),
      appIdentifier: "test.test.getsysteminfo",
      pagePathInAppStore: "pagePathInAppStore",
    })
  }
});