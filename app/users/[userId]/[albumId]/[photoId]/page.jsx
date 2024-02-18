"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Photo = ({ params }) => {
  const [photo, setPhoto] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(photo.title);

  useEffect(() => {
    const fetchPhoto = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${params.photoId}`
      );
      const data = await response.json();
      setPhoto(data);
      setTitle(data.title);
    };

    fetchPhoto();
  }, [params.photoId]);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://jsonplaceholder.typicode.com/photos/${params.photoId}`, {
        method: 'PATCH',
        body: JSON.stringify({
            title: title,
        }),
        headers: {
            'content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(res => res.json())
    .then(data => setTitle(data.title));


    setIsEditing(false);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="card card-compact w-96 bg-base-100 shadow-xl m-3">
        <figure>
          <Image src={photo.url} alt={title} height={400} width={400} />
        </figure>
        <div className="card-body">
          {isEditing ? (
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="text"
                placeholder="new title"
                onChange={(e) => setTitle(e.target.value)}
                className="input input-bordered input-success w-full max-w-xs"
              />
              <div className="card-actions items-center">
                <button className="btn btn-sm ml-1" type="submit">
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <div className="flex">
              <h2 className="card-title">Title: {title}</h2>
              <button onClick={handleClick} className="btn btn-sm ml-1">
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
      <Link href={`/users/${params.userId}/${params.albumId}`}>
          <button className="btn btn-sm">Back To Album Photos</button>
        </Link>
    </div>
  );
};

export default Photo;
