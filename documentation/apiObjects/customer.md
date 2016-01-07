#Customer
Restaurant patron

*Status*
 - Created, not rest implemented



#Object - Customer
Restaurant patron

| Fields        | Type           | Description
| ------------- | -------        | ------------|
| firstName     | String         | First name of customer |
| lastName      | Number         | Last name of customer |
| address       | [address]      | collection of address associated with a customer |
| emails        | [email]        | collection of emails associated with a customer |
| phoneNumbers  | [phoneNumber]  | collection of phone numbers associated with a customer |
| contracts     | [String]             | ID's of contract objects associated with a customer |

#Object - address
Address

| Fields        | Type           | Description
| ------------- | -------        | ------------|
| addressType   | String         | Type of address |
| primary       | Boolean        | Is this the primary address |
| address1      | String         | address line 1 |
| address2      | String         | address line 2 |
| city          | String         | City |
| State         | String         | State |
| Zip           | Number         | Zip |

#Object - email
Email address

| Fields        | Type           | Description
| ------------- | -------        | ------------|
| emailType     | String         | type of email |
| primary       | Boolean        | Is this the primary email |
| email         | String         | email address |

#Object - phoneNumber
phone number of contact

| Fields        | Type           | Description
| ------------- | -------        | ------------|
| contactType   | String         | type of phone number |
| primary       | Boolean        | Is this the primary contact number |
| number        | String         | phone number |

##Other Notes
 - Not sure how to link contractIDs to the customer object, created an array of contract IDs for now.
  


