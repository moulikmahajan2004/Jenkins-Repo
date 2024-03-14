import { useState } from "react";
import { db, storage } from "./firebase";
import "./form.css";
import { collection, addDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
const extensions = [javascript({ jsx: true })];

function ArticleForm() {
  const [imageUpload, setImageUpload] = useState({
    image_name: "",
    image_file: null,
  });

  const [values, setValues] = useState({
    title: "",
    abstract: "",
    article: "",
    Tags: "",
    Image_url: "",
    Code: "",
  });

  const [code, setCode] = useState('console.log("Hello, world!");'); // Initialize with a default code

  const codeMirrorOptions = {
    mode: "javascript",
    theme: "material",
  };

  const Change = (editor, data, value) => {
    setCode(value);
  };

  const handleFileChange = (e) => {
    setImageUpload({
      ...imageUpload,
      image_file: e.target.files,
    });
  };

  const uploadImage = () => {
    if (!imageUpload.image_file) {
      console.error("No image file selected");
      return;
    }

    const imageName = new Date().getTime() + "-" + imageUpload.image_file[0].name;
    const imageRef = ref(storage, `Images/${imageName}`);

    uploadBytes(imageRef, imageUpload.image_file[0])
      .then((snapshot) => {
        console.log("Image upload successful");
        return getDownloadURL(imageRef);
      })
      .then((downloadURL) => {
        console.log("Download URL:", downloadURL);
        values.Image_url = downloadURL;
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  const post = async (e) => {
    if (!values.title || !values.article || !values.Tags) {
      alert("Title, Article, and Tags must not be empty");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "images"), {
        title: values.title,
        abstract: values.abstract,
        article: values.article,
        Tags: values.Tags,
        Image_url: values.Image_url,
        Code: code, // Include the code value here
      });

      console.log("Document written with ID: ", docRef.id);
      alert("ARTICLE SUCCESSFULLY UPLOADED");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handlevalues = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setValues((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <div className="class1">
        <p className="point1">WHAT DO YOU WANT TO SHARE OR ASK</p>
      </div>

      <span className="Title">
        TITLE
        <input
          className="add"
          name="title"
          placeholder="TITLE"
          onChange={handlevalues}
        />
      </span>
      <br></br>
      <span className="Title">
        Add An image :
        <input
          className="p2"
          type="file"
          placeholder="TITLE"
          onChange={handleFileChange}
        />
        <button type="submit" className="UPLOAD" onClick={uploadImage}>
          upload
        </button>
      </span>
      <h3 className="p3">ABSTRACT</h3>
      <input
        className="paragh"
        name="abstract"
        rows="1"
        placeholder="ADD ABSTRACT"
        onChange={handlevalues}
      />

      <h3 className="article">ARTICLE TEXT</h3>
      <input
        className="point3"
        name="article"
        rows="1"
        placeholder="ADD PARAGRAPH"
        onChange={handlevalues}
      ></input>

      <span className="Tags">
        TAGS
        <input
          className="tg"
          name="Tags"
          placeholder="ADD MINIMUM TREE TAGS "
          onChange={handlevalues}
        />
      </span>
     <div className="code">
      <CodeMirror
        value={code}
        onChange={(editor, data, value) => setCode(value)}
        height="200px"
        theme={okaidia}
        extensions={extensions}
      />
      </div>
      <button className="p1" onClick={post}>
        POST
      </button>
    </div>
  );
}

export default ArticleForm;
