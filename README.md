# [Project Name]: Student Login

A React Native login screen that checks a student's name and password against a Supabase database. Built as a class exercise to learn how to connect a mobile front end to a hosted backend.

## Features

- Login form with name and password fields (password input is masked)
- Client-side validation for empty fields
- Looks up the student in a Supabase `Student` table
- Shows an alert on success (with the student's name and age) or on failure
- Basic error handling for network or database errors

## Tech Stack

- React Native ([Expo])
- Supabase (PostgreSQL backend)
- JavaScript

## Database Setup

Create a `Student` table in Supabase with these columns:

| Column     | Type   |
|------------|--------|
| `id`       | int8 (primary key) |
| `name`     | text   |
| `password` | text   |
| `age`      | int4   |

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- A free [Supabase](https://supabase.com) project
- [Expo Go app or an Android/iOS emulator]

### Installation

```bash
git clone https://github.com/[your-username]/[repo-name].git
cd [repo-name]
npm install
```

### Configuration

Create a `supabase.js` file in the project root:

```javascript
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'YOUR_SUPABASE_URL',
  'YOUR_SUPABASE_ANON_KEY'
);
```

Use the project URL and **anon** key from your Supabase dashboard (Project Settings → API). 

### Running the app

```bash
npx expo start
```

## Project Structure

```
├── App.js         # Login screen and logic
├── supabase.js    # Supabase client
└── package.json
```





## License

[MIT, or whichever you choose]
