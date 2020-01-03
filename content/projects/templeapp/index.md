---
title: TempleApp
tags: ['Android', 'Java', 'Firebase', 'Google API']
cover: './cover.png'
topic: Android App Development
mentors: ['Ajay Prabhakar']
mentorsEmail: ['ajayprabhakar369@gmail.com']
selected: true
selectedStudent: ['Aashrith Kandimalla']
content: This app is a cost-efficient way of maintaining records of poojas, donations made by people and also all the financial records in temples. Using this app, people in the temple counter will be able to enter all the details regarding the poojas they want or some donations they want to do for the temple.

draft: false
---

## Topic - Android App Development

### Description 

TempleApp is a cost-efficient way of maintaining records of poojas, donations made by people and also all the financial records in temples. Using this app, people in the temple counter will be able to enter all the details regarding the poojas they want or some donations they want to do for the temple. 
The app has a login interface and only some people like the General secretary, president, and treasurer of the temple can log in and be able to access the complete database.

How it works:
Currently, the implemented features are-
Creating every temple will have a separate database(Authorisation)
Add poojas to the database
Add donations to the database
Fetching the donations uploaded by user
Fetching the poojas uploaded by the user
Google sign in integration
   
User Authentication:
We used Firebase authentication for sign in so, while any user signing in a new database will be created for him and store the details of the user we used firebase realtime database 
The above work is done in the  LoginActivity.java
To store the user details we created one Instance onstart of app UserUtils.java
 
Add pooja and donations to the database:
To add poojas into the database we used  the firebase real-time database every time while creating a new object, by using firebase query we will be creating one unique iD so, we can find the details very easily with that ID
The basic data tree is shown containing nodes for address

The above work is done in the AddPoojaActivity.java, AddDonationActivity.java
And the objects used are DonationUtils.java, PoojaUtils.java
 
Fetching the donations uploaded by user:
Data stored in a Firebase Realtime Database is retrieved by attaching an asynchronous listener to a database reference(“poojas” and “donations”). The listener is triggered once for the initial state of the data and again anytime the data changes.
The above work is done in IncomeFragment.java, PoojaFragment.java
The adapters are  DonationAdapter.java, PoojaAdapter.java

### Technology Stack
 
 - Java
 - XML
 
### Important Links

- GitHub
https://github.com/amfoss/TempleApp

