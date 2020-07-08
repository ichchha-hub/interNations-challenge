### User Management System

This is a user and groups management system.

# Usage

Installation
Install all the dependencies running the following command npm install

# Expected API

/users
This endpoind expects a JSON array of objects and returns a list of users and the groups the user has assigned

# Example of JSON structure expected

[{
name: 'Max',
groups: [{id:1},{id:2}]
}, {
name: 'Cythia',
groups: [{id:1},{id:2}]
},
{
name: "Sam",
groups: [{id:2},{id:3}],
},
{
name: "John",
groups: [{id:1},{id:2},{id:3}],
}]
/groups
This endpoind expects a JSON array of objects and returns a list of groups

# Example of JSON structure expected

[
{id:1, name:'Administrator'},
{id:2, name:'Developer'},
{id:3, name: "Tester" },
]

# Getting Started

To start the aplication run
npm run start

To test the aplication run
npm run test

# CurrentAPI

List all users
http://localhost:3000/users

Create user
http://localhost:3000/users/create

Edit User
http://localhost:3000/users/Max

List all groups
http://localhost:3000/groups

Edit group
http://localhost:3000/groups/1

Create a group
http://localhost:3000/groups/create

Created by Ichchha Deshmukh.
