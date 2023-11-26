# DALI Connect

DALI Connect is an app designed to provide information about the members of the DALI Lab at Dartmouth College.

## Introduction

The app serves as a platform to learn more about the diverse talents within the DALI Lab. Users can explore profiles, search by name, and discover interesting details about each member.

## Screens

### Intro Screen (intro.jsx)

Displays the app logo for a few seconds before transitioning to the home screen.

### Home Screen (home.jsx)

- Allows users to search for DALI Lab members.
- Displays a flat list of members based on the search criteria.
- Clicking on a member navigates to the Profile Detail Screen.

### Profile Detail Screen (profileDetail.jsx)

- Provides detailed information about a selected member.
- Includes name, picture, home, favorite things, and other relevant details.
- Features an icon to view the member's home location on the Map View Screen.

### Map Location Screen (mapLocation.jsx)

- Shows a map with a marker indicating the home or hometown of the selected member.
- Accessed by tapping the icon on the Profile Detail Screen.

### Category Screen (category.jsx)

- Allows users to search by major, minor, or role (developer, project manager, designer).
- Provides a categorized view of members.

### About Screen (about.jsx)

- Displays app version and purpose.
- Includes a link to the official website.

## Usage

### Installation

Clone the repository:

```bash
git clone https://github.com/KP-Boateng/dali-connect.git
cd dali-connect
