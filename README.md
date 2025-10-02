**Project Name: Our Shelves**  
**Partners: Augy Markham, Rebecca Riffle**
**Partners: Alston, Daniel**

# Our Shelves 

## Quick Overview 
### What is it?  
Reading tracking app with light social features.   
### Who would use it? What value would it provide?**

* Audience: Readers who write in the margins and leave sticky notes, but want to do it digitally with their friends.  
* Easy to share

### What’s the MVP?

- User login  
- Users can add books to their shelf  
- Users can add notes to their books  
- User can update bookmark  
- Users can filter view of notes:  
  - By person (just them/friends)  
  - By page number

![][image1]  
## Project Overview 

Our Shelves is a low-stress space to visually track books you are reading and leave “sticky notes” in each book with page numbers, tracking page numbers with a bookmark. Friends can view your shelf. If you are reading the same book, you can share notes.

Example: John Doe is on page 57 of The Great Gatsby and writes “I can’t believe he said that\!”, Jane Doe is on page 130 and writes “Oh no\!” John can see that Jane left a note on page 130 and can choose to read it or wait until he’s also on/past page 130.)

Problem Statement:   
Readers like to track what they are reading and have social features without using an app that’s entirely social-oriented. Our app captures the experience of reading a book with a friend.

Target Users:   
People who like to track their reading and want to share some of their reading with some people (not just public).

## Feature Breakdown  
MVP Features: Core CRUD functionality that could be built in the first sprint or two

* User login  
* Users can add books to their shelf  
* Users can add notes to their books  
* User can update bookmark  
* Users can filter view of notes:  
  * By person (just them/friends)  
  * By page number

Extended Features: Additional functionality for later development phases

* Users can add friends, who have to accept invite  
* Users can remove friends  
* User can add shelves and organize books so they display based on shelf   
* Highly customizeable interface\! Modify color scheme / add plants, etc.

## Data Model Planning  
Core Entities: 

* Users  
* Shelves (example: Sci-Fi shelf)  
* Books (example: Frankenstein by Mary Shelley)  
* Bookmark (example: p. 33\)  
* Notes (example: p 142 “”)

Key Relationships: How do these entities connect?

- Each user has a shelf  
- Each user has other users as “friends”  
- Each shelf has books  
- Each book has a bookmark  
- Each book has notes

CRUD Operations: Specify what users can Create, Read, Update, and Delete  
Create books  
Create \+ Update bookmarks  
CRUD Notes

## User Experience   
User Flows: How do users accomplish key tasks?  
Wireframes/Sketches: Basic layout ideas for main screens
