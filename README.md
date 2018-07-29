# Thesis project

## Goals

- Understand the risks of transmitting and storing sensitive patient data
- Study different access control strategies to mitigate the unauthorized access of this data 👆
- Figure out the pros and cons of current industry best practices

## Solution

- Create a simple web application
- Use best-practices to store and retrieve data from a remote data source
- Only authorized individuals should be able to access this data

## Outstanding questions

1.  Who has the ability to modify data?
2.  What is the citation format required? 

## To-Do Tasks

- Rough draft of prospectus 
- Set up a time to meet with thesis advisors to review draft and progress 
- Regular update to annotated bibliography 
- Fix the input data that is sent to the database 
- Understand the data connection process for mobile apps 
- Create a timeline of when each part of the thesis should be completed 

## Prospectus [In Progress]

This thesis briefly explores and practices the concept of Network Function Virtualization (NFV). The project will consist of a simplistic mobile application that serves as a prototype for testing and experimenting with. The prototype will have a form that users will fill out and their input will be sent to a database. From there, the aim is to centralize endpoints and also separate them from the servers. The endpoints refer to points of connection for all external communication that will talk with the internal network. Following the NFV concept, the prototype will virtualize any addition network applications instead of adding on traditional on premise hardware. This is because physical hardware proves to be difficult to scale as the amount of users increases and is also expensive to maintain. In respect to security, the NFV portion will serve as an add-on protection on the network layer that assist the current practice of securing end-points. Another goal of this project is to keep the app running even if the client was compromised through a ransomware attack, the network function should still work because there is of the separation of endpoints from the server. Some helpful use cases for an app with such capabilities are the abilities to implement access control in the network layer instead of writing code to the server. The flexibility in having a mobile app and also having it accessible through web browsers will make it more convenient for a diverse population of users. 

Another use case is for the creation of applications built for the community of people to share their personal information such as geolocation, description of their environment, food they frequent – all thing that can affect their health and the app can secure and anonymize this data and analyzes it with other user inputs to report back to them and others to be able to identify what factors are contributing to their allergies or something similar. More use cases include maintaining anonymity while still being able to share personal information with many others within the community or population that can be analyzed and lead to new findings, and being cost effective while being scalable. This project also aims to make it as painless as possible for people to implement the same practices into their current system. 

Research will go into how to build the mobile application form and then we will proceed to the building of the prototype. After creation, more research will go into the known security vulnerabilities and the prototype will be used to test these findings. The form will then be modified to prevent it from the same exploitation again. Eventually, the goal is to have a secure form that can be used for testing and identifying new exploits. This project aims to help others understand the basics of the security best practices and known common vulnerabilities. It will also strive to present some new concerns and present ideas of how to solve them.

## Annotated Bibliography 

https://www.researchgate.net/profile/Harsh_Kupwade_Patil/publication/282280458_Big_Data_Security_and_Privacy_Issues_in_Healthcare/links/5839eaf308ae3a74b49ea2dc/Big-Data-Security-and-Privacy-Issues-in-Healthcare.pdf

Healthcare cost takes up 17.6% of GDP in 2014, but with the rise of big data in healthcare, $100 billion of profits could be made if used at the fullest potential. Healthcare is moving to be digitalized contributing to the rise of Electronic Health Records (EHR) for accurate and shareable data. Gartner estimates 26 billion IoT devices will be functional by 2020 and the amount of traffic generated, it can be categorized as big data. 

Body Sensor Networks (BSN) gives care providers the ability to monitor vital parameters, medication effectiveness, and predict an epidemic. With this, there needs to be common data representation that encompasses industry standards and local and regional standards because BSN data collection is diverse in source and often needs to be normalized, standardized, and goveranced before analysis. HIPPA certified healthcare data centers doesn’t mean the procedures/policies will be implemented. 

The sheer amount of IoT devices makes the common symmetric/asymmetric key distribution not possible and there needs to be a new scalable key management solution in order for the devices to integrate with cloud. The attacks most frequent to the healthcare industry are DDoS, social engineering, and cognitive bias. Big incidents that was reported are Kaiser Permanente (lost of an unencrypted USB containing 49,000 patient records in 2013), Verizon (internal forensic division investigation report found out of 47,000 security incidents, 621 confirmed data breaches in 2012), a study on patient and data privacy (94% of hospitals had at least 1 breach in past 2 years), and Target Corporation (sent baby coupons to teen unknown to parents). Take away: practice data anonymization prior to analytics and preserve encryption when running prediction algorithms. 

https://www.researchgate.net/publication/235686689_Wilkowska_Ziefle?enrichId=rgreq-b67e66576c3d86f101c276fbc4b4144e-XXX&enrichSource=Y292ZXJQYWdlOzIzNTY4NjY4OTtBUzo5ODk3MjUyNTkyNDM1M0AxNDAwNjA4Mjk3NTg5&el=1_x_3&_esc=publicationCoverPdf



