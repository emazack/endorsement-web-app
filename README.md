# Firebase Endorsement App

This is a simple web application that allows users to publish endorsements and view a list of endorsements in real-time. The app is built using plain JavaScript, HTML, and CSS, and utilizes Firebase Realtime Database for data storage and retrieval.

## Features

- **Real-time updates**: Endorsements are displayed in real-time as they are added to the database.
- **Firebase integration**: Uses Firebase Realtime Database for storing and retrieving endorsements.
- **Simple and clean UI**: A minimalistic interface that focuses on functionality.

## Screenshot

![Screen](https://github.com/user-attachments/assets/54b6224f-5609-46a2-94b7-96c48aa472ea)

## Installation

To get a local copy up and running, follow these simple steps:

### Prerequisites

- A web browser (e.g., Chrome, Firefox)
- Firebase account (for setting up your Firebase Realtime Database)

### Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/emazack/endorsement-web-app.git
    cd firebase-endorsement-app
    ```

2. Set up Firebase Realtime Database:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project or select an existing project.
   - Navigate to the Realtime Database section and create a new database.
   - Copy the database URL for later use.
   - Ensure to set up write and read access.

3. Update the Firebase configuration in `firebaseConfig`:

4. Open `index.html` in your web browser:
    ```sh
    open index.html
    ```
   or simply double-click `index.html` to open it in your default web browser.

## Usage

1. Enter an endorsement in the input field.
2. Click the "Publish" button to submit your endorsement.
3. The list of endorsements will update in real-time as new endorsements are added.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
