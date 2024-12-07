/* eslint-disable react/prop-types */
import React from "react";
import "./MoreArtWorks.css"; // Import your custom CSS file
// import "firebase/firestore";
import { useState, useEffect } from "react";
// import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
// import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
// import { collection, addDoc, getDocs } from "firebase/firestore";
// import { db } from "../firebase";
import PropTypes from "prop-types";

const artworks = "artworks";

const findAll = async () => {
  const doc_refs = await getDocs(collection(db, artworks));

  const res = [];

  doc_refs.forEach((artwork) => {
    res.push({
      id: artwork.id,
      ...artwork.data(),
    });
  });

  return res;
};

function MoreArtWorks({ textLeave, textEnter }) {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [artworks, setArtworks] = useState([]); //array in db

  const fetchData = async () => {
    setLoading(true);

    const res = await findAll();

    setArtworks([...res]);
    setLoading(false);
    console.log(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleImageUrlChange = (url) => {
    setImageUrl(url);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let temp = artworks;

  return (
    <div
      className="pt-[10rem] mb-[5rem]"
      onMouseEnter={textEnter}
      onMouseLeave={textLeave}
    >
      <div
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="flex justify-center max-sm:text-3xl max- items-center text-5xl mb-10"
      >
        Artworks Collection
      </div>
      <div
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="card_container flex flex-wrap justify-center p-5 gap-10 mb-10"
      >
        {temp.map((item, index) => (
          <article className="card__article cursor-pointer">
            <img src={item.img} alt="image" className=" h-80 w-80 card__img" />
            <div className="card__data w-[90%] px-3 flex flex-col items-center gap-1">
              <h2 className="card__title text-2xl text-center">{item.title}</h2>
              <span className="card__description text-xs text-center text-gray-600">
                {item.description}
              </span>
              <div className=" flex justify-center gap-2 items-center">
                <a href={item.instagram}>
                  <img
                    className="h-4 w-4"
                    src="/images/Instagram_logo_2016.svg"
                    alt="SVG image"
                  />
                </a>
                <div className="flex flex-col items-center">
                  <div className="max-sm:text-sm text-nowrap font-medium">
                    <span>Created By - </span>
                    <span>{item.made_by}</span>
                  </div>
                  <div className="text-xs">{item.date}</div>
                </div>
                <a href={item.linkedin}>
                  <img
                    className="h-4 w-4"
                    src="/images/linkedin.svg"
                    alt="SVG image"
                  />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div>
        <FileUploadButton onImageUrlChange={handleImageUrlChange} />
        <FirestoreForm imageUrl={imageUrl} />
      </div>
    </div>
  );
}

const FileUploadButton = ({ onImageUrlChange }) => { //hatega
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleButtonClick = () => {
    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    const fileRef = ref(storage, `images/${selectedFile.name + uuidv4()}`);
    uploadBytes(fileRef, selectedFile)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          console.log("File uploaded:", url);
          alert("Image Uploaded !");
          const imageUrl = url;
          onImageUrlChange(imageUrl);
        });
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  return (
    <div className="file-upload-container">
      <h2 className="text-3xl">Submit Your Own Artwork !</h2>
      <br />
      <input type="file" onChange={handleFileChange} className="file-input border border-white hover:border-white mb-3" />
      <button className="upload-button hover:border-white" onClick={handleButtonClick}>
        Upload
      </button>
    </div>
  );
};

function FirestoreForm({ imageUrl }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [made_by, setMadeBy] = useState("");
  const [date, setDate] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!imageUrl) {
      alert("Please upload an image first.");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "artworks"), {
        title,
        description,
        made_by,
        instagram,
        linkedin,
        date,
        img: imageUrl,
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Artwork added successfully!");

      setTitle("");
      setDate("");
      setDescription("");
      setMadeBy("");
      setInstagram("");
      setLinkedin("");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error adding document: ", error);
    }
  };

  return (
    <div className="centered-container">
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Your Name:
            <input
              type="text"
              value={made_by}
              onChange={(e) => setMadeBy(e.target.value)}
            />
          </label>
          <label>
            Instagram:
            <input
              type="text"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />
          </label>
          <label>
            LinkedIn:
            <input
              type="text"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </label>
          <label>
            Date:
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

FirestoreForm.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default MoreArtWorks;
