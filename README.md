# Thesis project

## Goals

- Understand the risks of transmitting and storing sensitive patient data
- Study different access control strategies to mitigate the unauthorized access of this data 👆
- Figure out the pros and cons of current industry best practices

## Solution

- Create a simple web application
- Use best-practices to store and retrieve data from a remote data source
- Only authorized individuals should be able to access this data 
- Use APA citation style 

## Outstanding questions

1.  Who has the ability to modify data?

## To-Do Tasks

- Rough draft of prospectus 
- Set up a time to meet with thesis advisors to review draft and progress 
- Regular update to annotated bibliography 
- Fix the input data that is sent to the database 
- Understand the data connection process for mobile apps 
- Create a timeline of when each part of the thesis should be completed 

## Prospectus [In Progress]

This thesis explores and practices the concept of Network Function Virtualization (NFV) where network functions are virtualized on software instead of being on physical hardware. The project will consist of a simplistic mobile application that serves as a prototype for testing and experimenting. It will have a form that users will fill out and their inputs would be sent to a database. From there, the aim is to centralize the network endpoints. The endpoints refer to points of connection for all external communication that will talk with the internal network. Following the NFV concept, the prototype will virtualize any addition network applications instead of adding on traditional physical hardware. This is because physical hardware proves to be difficult to scale as the amount of users increases and is also expensive to maintain. NFV also has a scalability limit, but is inexpensive. In respect to security, the NFV portion will serve as an add-on protection on the network layer that assist the current practice of securing end-points. With the functions virtualized, it will make it easier to centralize control mechanisms while separating these functions from the main source code. An advantage of virtualized security is that it makes it easier to incorporate orchestration of the various the network tools used in the environment. Another goal of this project is to keep the app running even if the client was compromised through a ransomware attack, the network function should still work because it is separated virtually from the server. Some helpful use cases for an app with such capabilities are the abilities to implement access control in the network layer instead of writing code to the server. Another is being more accessible and convenient for a diverse population of users to have a mobile app that is also accessible through web browsers.  

For instances, applications that are built for the community of people to share their personal information such as geolocation, description of their environment, and the food they frequent to analyze their personal health practices versus others around them, will need to have the ability to anonymize the data shared and be able to analyze the information in a graphical and/or numerical representation with other users’ inputs highlighting the different factors that seems to be a trend in contributing to certain health issues. The ability of maintaining anonymity while still being able to share personal information with many others within the community or population provides an opportunity to feel safe and have an opportunity to connect with others who lives in a similar environment. It also gives people a chance to analyze and compare community data themselves so that the information is open and immediately accessible which can help the community members be more aware of certain trends that could be good or bad that they can work with. The purpose of this thesis is to make it cost effective and scalable for a large population of users. This project also aims to make it as painless as possible for people to implement the same practices onto their current system. 

Research will go into how to build the mobile application form and then we will proceed to the building of the prototype. After creation, more research will go into the known security vulnerabilities and the prototype will be used to test these findings. The form will then be modified to prevent it from the same exploitation again. Eventually, the goal is to have a secure form that can be used for testing and identifying new exploits. This project aims to help others understand the basics of the security best practices and known common vulnerabilities. It will also strive to present some new concerns and present ideas of how to solve them. 

## Annotated Bibliography 

https://www.researchgate.net/profile/Harsh_Kupwade_Patil/publication/282280458_Big_Data_Security_and_Privacy_Issues_in_Healthcare/links/5839eaf308ae3a74b49ea2dc/Big-Data-Security-and-Privacy-Issues-in-Healthcare.pdf

Healthcare cost takes up 17.6% of GDP in 2014, but with the rise of big data in healthcare, $100 billion of profits could be made if used at the fullest potential. Healthcare is moving to be digitalized contributing to the rise of Electronic Health Records (EHR) for accurate and shareable data. Gartner estimates 26 billion IoT devices will be functional by 2020 and the amount of traffic generated, it can be categorized as big data. 

Body Sensor Networks (BSN) gives care providers the ability to monitor vital parameters, medication effectiveness, and predict an epidemic. With this, there needs to be common data representation that encompasses industry standards and local and regional standards because BSN data collection is diverse in source and often needs to be normalized, standardized, and goveranced before analysis. HIPPA certified healthcare data centers doesn’t mean the procedures/policies will be implemented. 

The sheer amount of IoT devices makes the common symmetric/asymmetric key distribution not possible and there needs to be a new scalable key management solution in order for the devices to integrate with cloud. The attacks most frequent to the healthcare industry are DDoS, social engineering, and cognitive bias. Big incidents that was reported are Kaiser Permanente (lost of an unencrypted USB containing 49,000 patient records in 2013), Verizon (internal forensic division investigation report found out of 47,000 security incidents, 621 confirmed data breaches in 2012), a study on patient and data privacy (94% of hospitals had at least 1 breach in past 2 years), and Target Corporation (sent baby coupons to teen unknown to parents). Take away: practice data anonymization prior to analytics and preserve encryption when running prediction algorithms. 

https://www.researchgate.net/publication/235686689_Wilkowska_Ziefle?enrichId=rgreq-b67e66576c3d86f101c276fbc4b4144e-XXX&enrichSource=Y292ZXJQYWdlOzIzNTY4NjY4OTtBUzo5ODk3MjUyNTkyNDM1M0AxNDAwNjA4Mjk3NTg5&el=1_x_3&_esc=publicationCoverPdf
[...]

https://www.sdxcentral.com/sdn-nfv-use-cases/ https://www.sdxcentral.com/sdn-nfv-use-cases/ 

Creates a centralized orchestration engine
Virtualized security makes it easier to centralize control mechanisms and equally distribute enforcement

## Timeline of Thesis 
- August 6
  - Prospectus update with advisors for feedback 
  - Prototype code update with advisors for feedback 
- August 10
  - Prospectus update with advisors for feedback 
- August 12
  - Prepare for Final Draft of Prospectus submission 
- August 13
  - Prototype code update with advisors for feedback 
- August 17
  - Final Draft Prospectus Submission Done 
  - Prototype Compeleted 
