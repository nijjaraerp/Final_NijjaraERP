# Nijjara ERP: System Overview & Architecture

## Table of Contents

- [1.0 CONCEPT](#10-concept)
- [2.0 TECHNOLOGY STACK](#20-technology-stack)
- [3.0 CORE ARCHITECTURE](#30-core-architecture--logic)
- [4.0 SHEET NAMING CONVENTION](#40-sheet-naming-convention)
- [5.0 SYSTEM ENGINES (SET_)](#50-system-engines-set_)
- [6.0 WALK-THROUGH EXAMPLE](#60-walk-through-example)
- [7.0 DATABASE INTERACTION LAYER](#70-database-interaction-layer)

## 1.0 CONCEPT

This document outlines the architecture for the Nijjara ERP, a custom, serverless, web-based platform. It is designed as a Single-Page Application (SPA) to provide a fast, dynamic, and responsive user experience without page reloads.

The system's primary function is to centralize and manage all core business operations across four main modules:

- Project Management (PRJ)
- Finance (FIN)
- Human Resources (HRM)
- System Administration (SYS)


## 2.0 TECHNOLOGY STACK

The entire system is built on the Google Workspace platform, leveraging its integrated, serverless environment.

- **BACKEND**: Google Apps Script (.js)  
  Handles all server-side logic, data processing, authentication, permission handling, and database communication.

- **FRONTEND**: HTML / CSS / JavaScript (.html)  
  A single `App.html` file serves as the SPA container. All UI components (HTML), styling (CSS), and client-side interactivity (JavaScript) are loaded into this single page.

- **DATABASE**: Google Sheets  
  Each Google Sheet (e.g., `SYS_Users`) acts as a database table. This model provides a transparent and auditable data store.


## 3.0 CORE ARCHITECTURE & LOGIC

The system's core principle is a **Metadata-Driven UI**. The frontend is not static; it is dynamically built at runtime based on configurations defined in the `SET_` (Settings) sheets.

### 3.1 THE BILINGUAL COLUMN MODEL

This is the most critical concept of the database design. The system is built on a **single-sheet** model where each data sheet (e.g., `PRJ_Clients`) serves all purposes.

Within this single sheet, two distinct types of columns co-exist to ensure both data integrity and a user-friendly (Arabic) interface:

**A. ENGINE-FACING (ENGLISH HEADERS)**  
- Headers: Strict, programmatic English (e.g., `client_id`, `contact_name`).  
- Purpose: Data Integrity & Storage.  
- Usage: The backend **ONLY** writes to and reads from these columns for data manipulation, logic, and validation.

**B. USER-FACING (ARABIC HEADERS)**  
- Headers: User-friendly Arabic (e.g., `معرف العميل`, `اسم جهة الاتصال`).  
- Purpose: Presentation & Display.  
- Usage: The frontend **ONLY** reads from these columns to display data in tables, forms, and pop-ups.

### 3.2 BOOTSTRAP & DYNAMIC RENDERING

1. **AUTHENTICATION**: User logs in via `App.html`. The backend `Code.js` verifies credentials against the `SYS_Users` sheet.

2. **BOOTSTRAP**: On success, the backend gathers ALL metadata into a single "bootstrap object" from the `SET_` sheets.

3. **RENDERING**: This object is sent to the frontend. Client-side JavaScript parses it to build the *entire* UI.

### 3.3 UI/UX & FONT REQUIREMENTS

- All user-facing text, labels, buttons, and headers **must** be displayed in **Arabic**.
- The entire interface **must** use the **Cairo Family font**.


## 4.0 SHEET NAMING CONVENTION

All sheets begin with one of the following 5-category prefixes:

- **SET_**: System Engine & Configuration (e.g., `SET_Tab_Register`).
- **SYS_**: System Administration Module (e.g., `SYS_Users`).
- **HRM_**: Human Resources Module (e.g., `HRM_Employees`).
- **PRJ_**: Projects Module (e.g., `PRJ_Clients`).
- **FIN_**: Finance Module (e.g., `FIN_Invoices`).


## 5.0 SYSTEM ENGINES (SET_)

These sheets are the "brain" of the ERP system, containing configurations that drive the UI and logic.

- **SET_Tab_Register**: Defines the navigation menu and data sources.
- **SET_Dynamic_Forms**: Defines every field in every form.
- **SET_Dropdowns**: Defines all static dropdown list values.
- **SET_Actions**: Defines bulk actions for data tables.
- **SET_Documents**: Master log for all file uploads.
- **SET_Settings**: Global system variables.
- **SET_Audit_Report**: Central log for all user actions.

## 6.0 WALK-THROUGH EXAMPLE

1. **VIEWING**: User clicks "Clients" → `SET_Tab_Register` points to `PRJ_Clients` sheet → System reads **Arabic-headed columns** → Frontend builds the Arabic data table.

2. **ADDING**: User clicks "Add Client" → `SET_Dynamic_Forms` builds the Arabic pop-up form → User clicks "Save" → Backend maps form data to the **English-headed columns** in `PRJ_Clients` sheet.

## 7.0 DATABASE INTERACTION LAYER

To ensure 100% database integrity and eliminate all manual errors, developers (including the system owner) **DO NOT** interact with the Google Sheet database directly.

All interactions are programmatic and controlled by three files:

- **Setup.js**: The single source of truth for the database **schema**. This file contains an `ERP_SCHEMA` object that defines every sheet and every header. Running this file builds, validates, and updates the entire sheet structure.

- **Seed_Data.js**: The single source of truth for database **initial data**. This file contains functions to populate the `SET_` sheets (like `SET_Dropdowns`) with their required initial values.

- **Seed_Functions.js**: The single source of truth for all **cell formulas**. This file is used to programmatically insert Google Sheet formulas (e.g., `ARRAYFORMULA`) into the "View" columns to link them to their "Engine" counterparts.
