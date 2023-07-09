import React, { useState } from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState("default-profile-image.jpg");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Perform additional checks if necessary (e.g., file type validation)

      // Assuming you have an API endpoint to handle image upload
      uploadImageToServer(file)
        .then((response) => {
          // Update the profile image with the uploaded image URL
          setProfileImage(response.imageUrl);
        })
        .catch((error) => {
          // Handle error during image upload
          console.error("Image upload error:", error);
        });
    }
  };

  const uploadImageToServer = (file) => {
    // Implement your logic to upload the image to the server here
    // This can be done using Axios, Fetch, or any other library of your choice

    // Mocked response for demonstration purposes
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          imageUrl: URL.createObjectURL(file),
        });
      }, 2000); // Simulating a delay
    });
  };

  return (
    <div className="container">
      <h1>Profile Page</h1>
      <div>
        <img
          src={profileImage}
          alt="Profile"
          className="profile-image"
          // onClick={() => document.getElementById("imageInput").click()}
        />
        <input
          id="imageInput"
          type="file"
          accept="image/jpeg, image/png"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
      </div>
      <div className="upload-button-container">
        <button onClick={() => document.getElementById("imageInput").click()}>
          Upload Image
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
