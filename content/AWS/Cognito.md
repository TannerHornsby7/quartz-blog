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

Users sign up by creating an entry in the AWS Cognito User Pool. If the User Pool is configured as an identity provider for the Cognito Identity Pool, creating a user in the User Pool automatically provisions an entry in the Identity Pool. Authenticated and guest [[IAM]] roles are defined and attached to the Identity Pool, providing credentials for users authenticated via an identity provider or anonymous users. Users can give the tokens from their identity providers to our identity pool to obtain temporary security credentials from AWS[[IAM#STS| STS]], allowing them to make requests with permissions based on their assigned roles.
```mermaid
sequenceDiagram
    participant U as User
    participant UP as Cognito User Pool
    participant IP as Cognito Identity Pool
    participant IDP as Identity Provider
    participant STS as AWS STS
    participant R as AWS Resources

    U->>UP: Sign up
    UP->>IP: Provision user (if identity provider)
    U->>IDP: Obtain tokens
    U->>IP: Exchange tokens for creds
    IP->>STS: Obtain temporary creds
    STS->>IP: Provide creds
    U->>R: Make requests using creds
```

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