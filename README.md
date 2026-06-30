1) **Exercise Goal (What the candidate is building)**
Candidates will build a User Profile Management System (Frontend-only) consisting of: Login page, Dashboard, and Profile view. The system must support role-based access to specific CRUD operations on the dashboard, and clicking the username should navigate to the profile details page.

Important scope note: This is explicitly frontend-only (no backend implementation). 
Suggested approach : use mocked data (local JSON / in-memory store / mock service worker) to simulate CRUD.

2) **Core Screens **

A) **Login Page**
Purpose: Authenticate a user (simulated) and establish their role/user type.
Functional expectations (suggested details):

A login form with fields such as:

Username / Email
Password (can be dummy, but should validate input)
Optional: “Select role” (only if you want to simplify; otherwise derive role from username mapping).


On submit:

Validate inputs
If valid, “log in” the user by setting an authenticated state
Redirect to Dashboard


Error states:
Invalid credentials



What are we evaluating here
Form validation
Error handling
Routing (redirect after login) 
TypeScript usage in form model/types

B) **Dashboard**
Purpose: Primary landing page after login. Shows a list/table/cards of “users” and enables role-based CRUD operations.
Mandatory behavior from your requirement:

“Based on the logged-in user type, the dashboard should enable role-based access to specific CRUD operations.” 
“Clicking on the username should navigate to the profile details view.” Suggested “role → permission” matrix (customizable):

Admin: Create / Read / Update / Delete
Member: Read only
Other role type can be defined

What the dashboard could include (suggested):

User list with columns: Name, Email, Role, Status, Actions

Action buttons shown/hidden/disabled based on user type:
Create user 
Edit user
Delete user
View profile


CRUD expectations (frontend-only simulation):

Create: open modal/page, validate, add to state
Read: list users, filter/search (optional)
Update: edit modal/page, validate, update state
Delete: remove from state

Error states (suggested):

Form errors during create/edit
“Empty state” when user list is empty

What you’re evaluating here (aligned):

Role-based authorization 
State management using Redux or Context API 
React Hooks (custom hooks for auth/user store) 
Routing (to profile view, protected routes) 
TypeScript usage (user models, role enums, action types) 
Error handling (guardrails + UI feedback) 

C) **Profile View (Profile Details Page)**
Purpose: A detailed view for a selected user, reachable by clicking the username from the dashboard. 

Functional expectations (suggested):
Route pattern like /profile/:id (or username)
Displays user details:

Name, email, role, status, etc.


Optional actions based on role:

Admin/Editor: edit fields
Viewer: read-only


Navigation:

Back to dashboard
Breadcrumbs (optional)
