# Security & Privacy Settings: Verify "Display NFT media" Toggle Functionality

# Feature: Toggle "Display NFT media" in Security & Privacy Settings

In order to enhance user experience  
As a user of the wallet extension  
I want to toggle the "Display NFT media" option in the Security & Privacy Settings  

# Scenario: Default state of "Display NFT media" toggle is ON

Given I am in Settings  
When I click on the "Security & Privacy" tab  
Then the "Display NFT media" toggle is set to ON by default  

# Scenario: "Display NFT media" toggle functionality

Given I am on the Security & Privacy settings page  
And the "Display NFT media" toggle is initially set to ON  
When I click on the "Display NFT media" toggle icon  
Then the toggle switch should visually indicate OFF  
When I click on the "Display NFT media" toggle icon again  
Then the toggle switch should visually indicate ON  

# Scenario: Verification of NFT media display functionality

Given I am on the Security & Privacy settings page  
And the "Display NFT media" toggle is set to ON  
When I view my NFTs in lorikApp  
Then lorikApp displays both NFT media and data  

# Scenario: Autodetection reliance on Display NFT Media setting

Given I have toggled OFF “Display NFT Media” under Security & Privacy settings   
When viewing NFTs or using autodetect features   
Then no automatic detection or display of NFTs occurs[3][5] 
