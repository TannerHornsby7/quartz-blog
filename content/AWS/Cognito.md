---
docs: https://docs.aws.amazon.com/pdfs/cognito/latest/developerguide/cognito-dg.pdf#cognito-user-pools
---
## Vocab
- **User Pool**: User directory for managing user-identity mapping.
![[Pasted image 20250107235737.png]]
- **Identity Pool**: Identity directory for manageing identity-permissions mapping.
![[Pasted image 20250108000711.png]]
- **STS**: Security Token Service allows users to request temporary limited-access credentials to users.

---
## General Notes

### High-level Authentication flow

sign up by sending a request to create a new entry in ya user pool. If the pool is an identity provider for ya identity pool then making this user automagically creates an entry in the identify pool as well. We can then build & attach Authenticated and guest access[[IAM | roles ]]which act as credentials for users who are authenticated by an identity provider or anonymous respectively. Then a user can use their tokens from their identity providers to get permission roles tokens from STS and make requests with permissions based on their identity.
### Pricing *(first 10,000 MAU free)*
- Essentials(Default): $0.015 / MAU
- Lite: $0.0055 - $0.0025 depending on MAU

---
## Amplify's Interface

---
## Under the Amplify Hood

---
## References
- [link](https://www.google.com)