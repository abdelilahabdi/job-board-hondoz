# Requirements Analysis

## 1. Project Overview

The project consists of developing an internal portal dedicated to internship and work-study opportunities for the MERN 2026/2027 promotion.

The main objective is to centralize opportunities in a single space in order to facilitate their consultation, search, and tracking.

The portal allows users to browse offers, access their details, search and filter opportunities, save interesting offers, and locally manage the offers for which they intend to submit an application.

An administration interface is also provided to manage the offers available on the portal.

---

## 2. Product Objectives

The portal must allow users to:

* Centralize internship and work-study offers.
* Facilitate quick access to opportunities.
* Search for offers using keywords.
* Filter offers according to different criteria.
* Sort offers by publication date.
* View detailed information about an offer.
* Add offers to favorites.
* Remove offers from favorites.
* Retrieve favorite offers during a future visit.
* Locally record offers for which the student intends to submit an application.
* Allow students to manage their locally recorded submissions.
* Manage offers through an administration interface.

---

## 3. System Actors

### 3.1 Visitor

The visitor can browse public offers and discover the different opportunities available.

They can:

* View the list of offers.
* View the details of an offer.

No account is required to browse offers.

### 3.2 Student

The student mainly uses the portal to search for and track opportunities that interest them.

They can:

* Browse offers.
* Search for offers by name or keyword.
* Filter offers.
* Sort offers by date.
* View offer details.
* Add an offer to favorites.
* Remove an offer from favorites.
* View their favorite offers.
* Record a submission for an offer.
* Delete a recorded submission.

Favorites and submissions are stored locally in the browser and do not require a user account.

### 3.3 Administrator

The administrator is responsible for managing the offers published on the portal.

They can:

* View existing offers.
* Create a new offer.
* Edit an offer.
* Delete an offer.
* Associate one or more technologies with an offer.

The administration system remains intentionally simple and does not require an advanced account, role, or permission system.

---

## 4. Main Features

### 4.1 Offer Browsing

The portal must display a list of offers containing the following essential information:

* Job title.
* Company name.
* City.
* Contract type.
* Main technologies.
* Publication date.
* Short description.
* Access to the detailed offer page.

### 4.2 Offer Details

Each offer must have a detailed page containing:

* Job title.
* Company.
* Location.
* Contract type.
* Required technologies.
* Full job description.
* Candidate profile.
* Application information.
* Publication date.

The user must be able to easily return to the offer list.

### 4.3 Search and Filtering

The user must be able to search for and narrow down offers using several criteria:

* Name or keyword.
* City.
* Technology.
* Contract type.

Keywords can be searched within the title, company name, or description.

The different filters can be combined.

### 4.4 Sorting

The user can sort offers by publication date in order to view the most recent or oldest offers first.

### 4.5 Favorite Offers

The student can manage a local list of favorite offers.

They can:

* Add an offer to favorites.
* Remove an offer from favorites.
* View their favorite offers.
* Visually identify offers that have already been added to favorites.

Favorites are stored in the browser's `localStorage`.

### 4.6 Submissions

The portal allows the student to locally record the offers for which they intend to submit an application.

The student can:

* Record an offer as submitted.
* View offers recorded as submitted.
* Delete a submission.

This feature is mainly intended for the student's personal tracking.

It does not constitute a complete online application system: no application is automatically sent to a company, no CV is uploaded, and no server-side application processing system is required.

Submissions are stored locally in the browser's `localStorage`.

### 4.7 Offer Submission Form

The portal must provide a form representing the submission of a new offer.

The form must contain at least:

* Company name.
* Job title.
* City.
* Contract type.
* Required technologies.
* Job description.
* Candidate profile.
* Contact information or application link.

In the first version, this form can be represented only in the interface.

In a complete version, the form data can directly feed the offer management system.

### 4.8 Offer Administration

The administration interface allows administrators to:

* View existing offers.
* Create a new offer.
* Edit an offer.
* Delete an offer.
* Associate one or more technologies with an offer.

A deleted offer must no longer appear in the public offer list.

---

## 5. Business Data

### 5.1 Offer

An offer represents an internship or work-study opportunity.

It contains:

* Title.
* Short description.
* Detailed description.
* City.
* Contract type.
* Publication date.
* Candidate profile.
* Contact information or application link.
* Associated company.
* Associated technologies.

### 5.2 Company

A company can publish multiple offers.

The expected information includes:

* Name.
* City.
* Short description.
* Website or public link.

### 5.3 Technology

A technology can be associated with multiple offers, and an offer can require multiple technologies.

The expected information includes:

* Technology name.
* Optional category.

---

## 6. Business Rules

* An offer belongs to one company.
* A company can publish multiple offers.
* An offer can be associated with multiple technologies.
* A technology can be associated with multiple offers.
* An offer must have a title, company, city, contract type, and publication date.
* The contract type is limited to `Internship` and `Work-study`.
* A deleted offer must no longer appear in the public offer list.
* Offers must be sortable by publication date.
* Favorites are specific to the user's browser.
* Submissions are specific to the user's browser.
* Local features do not require authentication.

---

## 7. Interface Requirements

The interface must be:

* Clear and readable.
* Responsive on mobile, tablet, and desktop.
* Consistent across the different pages.
* Designed for quick browsing.
* Simple enough to keep the focus on the offers.

### Expected Screens

* Offer list.
* Offer details.
* Offer submission form.
* Favorite offers or equivalent section.
* Submission management.
* Offer administration.

---

## 8. Content

The portal must use a set of fictional but realistic offers.

The data must vary according to:

* Cities.
* Companies.
* Technologies.
* Contract types.
* Publication dates.

The content must remain professional and suitable for internship and work-study searches in web development.

---

## 9. Functional Constraints

* Offers must be accessible without authentication.
* Favorites do not require an account.
* Submissions do not require an account.
* Offer deletion must be restricted to the administration interface.
* The user must be informed when no results match their criteria.
* The user must be able to easily return from the offer details to the offer list.
* The interface must remain usable on mobile and desktop devices.

---

## 10. Out of Scope

The following features are not part of the project:

* User account creation.
* Authentication.
* Advanced roles and permissions.
* Complete online application system.
* CV upload.
* Automatic email sending.
* Messaging between candidates and companies.
* Payment.
* Advanced statistics.
* Recommendation engine.
* Complete company area.

The submission feature available in the portal only represents **local tracking of offers selected by the student** and does not constitute a complete application system for companies.

---

## 11. MVP

### Browsing

* Offer list.
* Offer details.

### Search and Filtering

* Keyword search.
* Filtering by city.
* Filtering by technology.
* Filtering by contract type.
* Combined filters.
* Sorting by date.

### Favorites

* Add an offer to favorites.
* Remove an offer from favorites.
* View favorite offers.
* Persist favorites using `localStorage`.

### Submissions

* Record an offer as submitted.
* View submitted offers.
* Delete a submission.
* Persist submissions using `localStorage`.

### Administration

* View offers.
* Create an offer.
* Edit an offer.
* Delete an offer.
* Associate technologies with offers.

---

## 12. Acceptance Criteria

The product is considered satisfactory if:

* A user can view a list of offers.
* A user can open the details of an offer.
* A user can filter offers by city, technology, and contract type.
* A user can search for an offer using keywords.
* A user can sort offers by date.
* A student can add and remove an offer from their favorites.
* Favorites are persisted in the browser.
* A student can record an offer as submitted.
* A student can delete a recorded submission.
* Submissions are persisted in the browser.
* An administrator can create, edit, and delete an offer.
* The displayed information is consistent with the portal's data.
* The interface remains readable on mobile and desktop.
* No-result and error cases are understandable to the user.

---

## 13. Summary

The portal is an internal platform designed to centralize internship and work-study offers and make them easier for students to browse.

The system is based on three main actors: the visitor, the student, and the administrator.

The main features are browsing, searching, filtering, sorting, favorites, and local submission tracking.

The administration interface allows administrators to manage offers and their associated technologies.

No authentication is required. Student-specific features, including favorites and submissions, are stored locally in the browser.

The project focuses on providing a simple, responsive interface designed for quick access to internship and work-study opportunities.
