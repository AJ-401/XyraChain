# XyraChain Blockchain

## The Decentralized Medical Vault (Patent Pending... Just Kidding)

Welcome to the blockchain layer of XyraChain, where your medical reports go to live forever - literally. We're talking immutable, tamper-proof, "even-your-doctor-can't-delete-that-embarrassing-diagnosis" level of permanence.

## What's This Folder About?

This is where the magic happens. Or more accurately, where cryptographic hashing and distributed ledger technology happen. Same thing, right?

### Smart Contract
- **XyraChain.sol** - The contract that makes doctors nervous because patients now actually own their data

### Scripts
- **deploy.ts** - Deploys the contract (one-time thing, don't spam it)
- **verify.ts** - Makes sure the contract isn't just pretending to work

## Current Status

- [x] Smart contract deployed on Apothem testnet
- [x] Can store medical reports
- [x] Can retrieve medical reports
- [ ] AI integration (Coming Soon™)
- [ ] IPFS integration (Coming Soon™)
- [ ] Frontend that actually looks good (Coming Soon™)
- [ ] World domination (Also Coming Soon™)

## Deployed Contract

**Address:** `0x8E1Fd433627b4b4AC1c8731CE0a4837419DE44Ab`  
**Network:** XDC Apothem Testnet  
**Status:** Alive and kicking (unlike traditional medical databases)

## How to Use

### Deploy Contract (Already Done, But Here's How)
```bash
npx hardhat run scripts/deploy.ts --network apothem
```

### Verify It Works
```bash
npx hardhat run scripts/verify.ts --network apothem
```

### Add a Report (From Your Code)
```javascript
await contract.addReport(
  "QmYourIPFSHash",
  "Pneumonia detected in right lung", 
  85
);
```

### Get Your Reports
```javascript
const reports = await contract.getMyReports();
```

## Security Notes

- Your private key is in `.env` (DON'T COMMIT IT TO GIT)
- If you do commit it, consider it public property
- No seriously, check `.gitignore` right now

## What's Next?

1. Build the AI module (the brain)
2. Set up IPFS (the storage)
3. Connect everything (the nervous system)
4. Build the frontend (the pretty face)
5. ??? 
6. Profit (or at least pass your project)

## Fun Facts

- This contract has already stored more data than most traditional hospitals share between departments
- Gas fees on Apothem testnet: $0.00 (because it's a testnet, obviously)
- Lines of code in contract: ~30
- Hours spent debugging: [REDACTED]

## Contact

If this breaks, blame the blockchain. If it works, thank the developer.

---

*"In Code We Trust, In Blockchain We Store Medical Reports"* - Ancient Developer Proverb
