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

**Release Notes**
NAIRSU - An OpenSource image resizing platform written in pure html css and js for providing a good and effective way for resizing the images for free of cost no need to pay even a single dollar from your pocket. Just download the source code and get started.

Only used pure html css and js no frameworks like nodeJS , react or angular has been used for this project.

Deep description:
**NAIRSU - Image Resizer and Exporter**

This web application allows users to resize multiple images and download them as a ZIP file. Users can select up to 8000 files, specify desired dimensions, and give a project name. The app processes each image, resizes it according to the specified dimensions, and compiles them into a ZIP file. The processed file can be downloaded with a single click. Additionally, the app features a dark theme toggle and adjusts the page height for better viewing on larger screens.

**Getting started **
To use NAIRSU, simply visit the website, upload your images, specify the desired dimensions, and click ‘Resize.’ The processed images will be available for download in a ZIP file

*"Why NAIRSU?**
I was trying to find a image resolution changing app on web I got a lot of applications but the thing was that they were closed source and only allowing for limited file uploaded per day or they limits the bandwidth and file uploads and even some websites were having less bandwidth and file limits but also after resizing inside the zip file the images were having the website name which was not good for commercial use purpose so for overcoming these challenges I took a decision to make a custom web based software for resizing image but the fact that it will be fully free allow unlimited bandwidth and significant file uploads so i came up with "Not Another Image Resolution Setting Utility" the NAIRSU , which allows unlimited file size with almost infinite uploads as it can handle upto 8000 images per project which is too much and also there is no projects limit you can create infinite projects per millisecond. Means totally you can export bigger image packets with NAIRSU and the best part is that there is no cost for this and I wanted to teach other persons how web apps can be funny and engaging to I made this a open source project! Be happy to contribute here.

**Data collection**
I am a privacy concerned person so I made NAIRSU with zero data collection, yaa you heared right. NAIRSU don't collects you any kind of personal data for any reason. It provides a trusted and fully transparent way to users for not collecting there data as the NAIRSU official source code is not encrypted so you can easily see the NAIRSU source code in the official Repository from where NAIRSU is hosted and you will be able to see that there is no code which collects user data, so feel free to view and edit the source code.

**Contributing**
Want to contribute 😉 issue a pull request with source code and accurate reason for source code and from pull request your source code will be firstly reviewed and it will be tested for 3 tests and your code must qualify all of the tests in order to update the main repository.

test 1.) safety test : your source code will be tested for safety so that does it collects any user data or does it violate any of the security laws or demon terminal ? If pass them go for test 2 or fail then end here.

test 2.) reason test : your source code will be tested so that does it matches with the exact reason you mentioned in pull release or not? If yes then passed for test 3 othervise fail and no test will be continued next.

test 3.) UX and code maintenance : your code UX design will be checked if css involved othervise only maintenance will be checked if the code has sufficient comments telling accurately about the purpose of each lines with reasonable strings then it will be a fine maintenance but a good maintenance also involves the spacings also. If pass them your source code will be uploaded to the repository with a seperate branch , remember main branch is critical and only updated with critical code in pull requests so for a simple thing like new theme , feature or core will not be added to main branch but will have a different version branch for upload.

Stay happy with this image processing project!
