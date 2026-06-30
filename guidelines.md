# Website Guidelines

## Website Components

1. Opening page
2. Home page
3. Home page dropdown menu
4. Home page sections and subsections
5. Home page hover over project thumbnails
6. Project page
7. Full-screen image page
8. Scope page
9. About page
10. Contact page

## 1. Opening Page

- Use a full-screen background image, fixed in place (no scrolling).
- Display the text "Studio Boja" with a typewriter animation (appearing letter by letter).
- Position the text according to the specified placement in the Figma design.

## 2. Home Page

### Navigation Bar

- Place the studio name on the far left.
- The studio name should always be lower case with 9% letter spacing.
- On the far right, include the following menu items:
	- Work
	- Scope
	- About
	- Contact
- The menu items should be upper case with 0% letter spacing.
- Both the studio name and the menu should be in #741F19.
- Spacing and alignment:
	- Keep equal spacing between all right-side menu items.
	- The distance from the studio name to the left edge should match the distance from Contact to the right edge.

### Work Section (Main Content)

- Add the section title "Work" above the top-left image of the grid.

### Image Grid

- Use a 2-column grid (two images per row).
- Each image frame:
	- 480px width
	- 500px height
- Spacing:
	- Equal horizontal spacing between images.
	- Equal vertical spacing between rows.

### Scrolling Behavior

- The grid should continue consistently as the user scrolls.
- Maintain uniform spacing and alignment throughout.

## 3. Home Page Dropdown Menu

- The Work menu item includes a dropdown.
- On hover or click, it reveals:
	- Residential
	- Commercial
	- Graphic Design
- The dropdown should be visually aligned with the Work item and follow the same clean, minimal style as the rest of the navigation.
- The dropdown items should be lower case.

## 4. Home Page Sections and Subsections

### General Behavior

- When a user selects a category from the Work dropdown, they are taken to a dedicated page for that category (residential, commercial, graphic).
- Each page follows the same visual style:
	- Section titles with subtitles
	- Image grids (2 columns, same dimensions and spacing as the homepage)
- Section titles:
	- residential
	- commercial
	- graphic
- All section titles should be lower case and in bold type.
- Section subtitles:
	- renovation
	- hospitality
	- offices
	- stores
- All section subtitles should be lower case and regular type.

### Residential Page

The residential page is divided into one subsection:

- renovation

Requirements:

- Section title: residential
- Section subtitle: renovation
- Display all renovation projects in this section.
- Use the standard 2-column image grid.

### Commercial Page

The commercial page is divided into three subsections:

- hospitality
- offices
- stores

Requirements:

- Each subsection is the subtitle below the section title.
- Each subsection uses the same 2-column image grid.
- Each subsection displays the relevant projects for that category.
- Sections are stacked vertically in this order:
	- Hospitality
	- Offices
	- Stores
- On the commercial page, first show Hospitality and its projects, then Offices and its projects, then Stores and its projects while scrolling.

### Graphic Page

- The graphic page does not include subsections.
- All projects are displayed in a single continuous 2-column grid.
- Maintain the same spacing, sizing, and alignment as other pages.

### Consistency Across All Category Pages

- Keep image size fixed at 480 x 500 px.
- Maintain equal spacing:
	- Between images (horizontal)
	- Between rows (vertical)
- Section titles and subtitles should align consistently with the grid (left-aligned with the first image).
- Scrolling should feel continuous and uniform across all categories.

## 5. Home Page Hover Over Project Thumbnails

When a user hovers over a project thumbnail:

- The background should transition to a predefined background color (specific hex code).
- The project thumbnail image should fade out and visually blend into the background color.
- The project title should appear in a predefined text color (specific hex code) in place of the image.

Color assignment behavior:

- Use five different color combinations.
- Each combination consists of one background color (hex code) and one title color (hex code).
- Assign these five combinations across projects in a mixed, non-sequential order.
- Once the five combinations are provided, distribute them randomly throughout the project grid and repeat them as needed.
- The goal is to avoid a predictable pattern while maintaining a balanced distribution.

Click behavior:

- Clicking a project thumbnail opens the Project Page.
- On the Project Page, the background and text color should match the rest of the site.

## 6. Project Page

### Navigation from Home Page

- When a user clicks on a project thumbnail, they are directed to that project's dedicated page.

### Page Header

- Display the project name at the top of the page.
- Align it in the same position and style as the Work section title on the homepage (top-left, aligned with the grid, for example residential design).

### Main Content Layout

- The page is divided into two main parts:
	- Left: Project image with the project name
	- Right: Project description

### Image Display (Left Side)

- The left side contains a fixed-width image area with a maximum width of 770px.
- The height is not fixed and runs from a clearly defined starting point (as indicated in the reference image) down to the bottom of the page.
- This image area functions as a continuous visual gallery for the project.
- Multiple images are displayed within this same fixed-width column through a vertical scroll interaction.
- When the user hovers over the image area, they can scroll through additional project images in a smooth and uninterrupted flow.
- The rest of the page layout remains fixed and unaffected by this interaction.
- Clicking any image in this section opens it in a full-screen view (lightbox) for detailed viewing.
- Position the project image so that its top-left corner matches the exact starting position of the first image in the homepage grid, ensuring consistent alignment across pages.
- The project name on the Project Page should align the same way as the Work section title on the homepage.

### Project Description (Right Side)

- Position the description to the right of the image, with consistent spacing.
- Align the center of the text with the center of the image.
- Include:
	- A small heading with the project name
	- A text description of the project

### Image Navigation (Slider Behavior)

- Between the image and the description, include a simple arrow icon.
- Use #B3B3B3 for the arrow color.
- Function:
	- Clicking the right arrow moves to the next image in the project.
- Once the user is on the second image (or beyond):
	- A left arrow appears on the opposite side with equal spacing as the right arrow.
	- This allows navigation back to previous images.
- Users can continue navigating through all project images this way.

## 7. Full-Screen Image Page

- When the user clicks on the image, it opens in a full-size view.

### Full-Size View Layout

- The navigation bar remains visible at the top (studio name plus menu).
- The image is displayed enlarged.
- Maximum frame constraints are 1100px width and 700px height.
- Include:
	- Left and right arrows for navigating between images (same behavior and style as before).
	- A project title below the image, styled consistently with previous titles.

### Consistency

- Maintain the same typography, spacing, and alignment as the rest of the website.
- Keep interactions simple, minimal, and intuitive.

## 8. Scope Page

### Image Layout

- Display four images in a single horizontal row.
- Each image uses the same aspect ratio as the images on the homepage.
- Alignment:
	- The leftmost image aligns exactly with the left edge of the homepage image grid.
	- The rightmost image aligns exactly with the right edge of the homepage image grid.
	- This ensures the images span the same maximum grid width as the homepage.
- Spacing:
	- Maintain equal spacing between the images.

### Service Descriptions

- Below the images, include a short text description for each service.
- Each description corresponds to one image above.
- Keep alignment consistent (for example each text block aligned with its image).

## 9. About Page

- Two-column layout:
	- Left: Image (same size as homepage grid images)
	- Right: Short studio description
- Align the center of the text block with the center of the image.
- Keep spacing and alignment consistent with the overall grid.

## 10. Contact Page

- Two-column layout (same structure as About page):
	- Left: Contact form
	- Right: Contact details

### Contact Form (Left)

- Name (input field)
- Email (input field)
- Inquiry type (dropdown, 4 service options)
- Project description (larger text field: "Tell me about your project")

### Contact Details (Right)

- Small heading ("or reach out directly")
- Email
- Phone number
- All text should be lower case.

## General Visual Guidelines

### Hex Codes

- Primary text color (general text, titles):
- Secondary text color (navigation bar: studio name, work, services, about, contact):
- General background color: #F5F5F5
- Background and text color combinations for hover states:
	- BG: / text:
	- BG: / text:
	- BG: / text:
	- BG: / text:
	- BG: / text:

### Font and Size

- Afcad Regular, 13

## List of Projects

### Residential - Renovation

- T40 Bathroom
- CP9 Palma de Mallorca
- D25
- Franciamore
- C163
- VEGL
- Azores

### Commercial - Offices

- Elho offices

### Commercial - Stores

- Butique delicacy