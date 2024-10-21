
# Leave Application System (Front-End)

This repository contains the front-end of the **Leave Application System**, developed using **Angular 18** and **Ant Design System** (ng-zorro) for UI components. **NgRx** is used for state management. This project focuses exclusively on the front-end, and requires **Mockoon** for simulating the back-end APIs.

---

## Technologies Used:
- **Angular** (v18)
- **Ant Design System** (ng-zorro)
- **NgRx** for state management
- **Mockoon** for back-end API simulation

---

## Features:
- Leave Application and Management
- Leave Reports
- Holiday Management
- Notifications

---

## Setup and Installation:

To run and test the project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository-link>
   cd leave-application-system
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Mockoon**:
   - Download and install **Mockoon** (if not installed).
   - Use the `mockoon.json` file located under `src/assets/data/mockoon.json`.
   - Create a **Mockoon** environment using this file, and set the server port to `3200`.

4. **Run the Project**:
   ```bash
   npm start
   ```

5. **Login Credentials**:
   - **Staff role**:  
     - **Username**: `koyaw@gmail.com`  
     - **Password**: `welcome`
   - **Admin role**:  
     - **Username**: `admin@gmail.com`  
     - **Password**: `admin123`

---

## Live Demo:

You can explore the Leave Application System using the credentials above. The system includes features such as applying for leave, viewing leave reports, managing holidays, and receiving notifications.

---

## Note:

- Ensure that **Mockoon** is running with the correct configuration to simulate the back-end environment.
- This project is for front-end development and testing only. The back-end integration is not included.
