# Welcome to NAIRSU

Your go-to open-source tool for image resolution and optimization. NAIRSU offers advanced features to resize and enhance your images with ease.

**NAIRSU** stands for **Not Another Image Resolution Setting Utility**.

## Key Features

NAIRSU provides a range of powerful features to optimize and enhance your images:

- **Advanced Resizing:** Easily resize images to any dimension while maintaining quality.
- **Quality Adjustment:** Fine-tune image quality to achieve the best balance between size and clarity.
- **Batch Processing:** Process multiple images at once, saving time and effort.
- **Open Source:** Fully open-source with a vibrant community contributing to its development.
- **Cross-Platform:** Compatible with various operating systems for versatile use.

## Why Choose NAIRSU?

NAIRSU stands out for its:

- **Open-Source Nature:** Free to use and customize, with community-driven improvements.
- **Powerful Features:** Designed for both casual users and professionals needing advanced image optimization.
- **Easy-to-Use Interface:** Intuitive design that simplifies image editing tasks.
- **Reliable Performance:** Efficient processing that handles large files and batch operations seamlessly.

## Get Started with NAIRSU

Ready to optimize your images? Create a new NAIRSU Project today and experience the power of advanced image resolution and optimization.

---

**No Project was created?**

Then create a new project now!
+Create Project

---

© 2024 NAIRSU. All rights reserved.

Privacy Policy | Terms of Service


# Code explanation

index.html is the home page file
project.html is the project handeling file
terms & privacy.html are as same name contains the terms
styles.css is the styling file
scripts.js is the main core file 


## scripts.js
# Image Resizing and Exporting Tool

This code snippet sets up a basic image resizing and exporting tool with the following functionality:

1. **Resize Button Click Event:**
   - **Event Listener:** When the button with the ID `resize-button` is clicked, it triggers an asynchronous function.
   - **File and Input Handling:** The function retrieves files from an input element with ID `file-input`, dimensions from input fields with IDs `width-input` and `height-input`, and a project name from an input field with ID `project-name`.
   - **Validation:** It checks if files are selected and if the width and height inputs are valid numbers. It also ensures that no more than 8000 files are uploaded.
   - **Processing State:** Updates the status text to 'Processing...' and creates a new `JSZip` instance for zipping the resized images.
   - **Image Resizing:**
     - For each file, it creates an `Image` object, sets its source to the file URL, and waits for the image to load.
     - On load, it draws the image onto a canvas with the specified dimensions, converts the canvas content to a `Blob`, and adds it to the zip file.
   - **Completion:**
     - Once all images are processed, it generates a ZIP file blob.
     - Updates the status text to 'Ready to download!' and displays an export button.
     - When the export button is clicked, it creates a download link for the ZIP file and triggers the download with the project name as the filename.

2. **Theme Switcher:**
   - **Event Listener:** When the button with the ID `theme-switcher` is clicked, it toggles the `dark-theme` class on the `body` element, which likely switches the page's theme.

3. **Body Height Adjustment:**
   - **Condition:** If the screen width is greater than 500 pixels, it sets the body's height to 200% of the viewport height (`200vh`). This might be intended for improving layout or scrolling behavior on larger screens.

**Key Points:**
- **Image Resizing:** Uses a canvas to resize images based on user input dimensions.
- **ZIP Creation:** Uses the `JSZip` library to zip the resized images and prepare them for download.
- **Theme Switching:** Provides a way to toggle between light and dark themes.
- **Screen Width Adjustment:** Alters the body's height based on screen width for responsive design.
- 
