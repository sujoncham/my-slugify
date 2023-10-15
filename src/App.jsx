import { useState } from "react";
import "./App.css";
import mySlugify from "./slugify/slugify";

function App() {
  const [mySlugs, setMySlugs] = useState([]);
  const [title, setTitle] = useState("");
  let slug;

  const handleSubmit = (e) => {
    e.preventDefault();
    slug = mySlugify(title);
    const updates = { title, slug };
    setMySlugs([...mySlugs, updates]);
  };

  return (
    <div className="bg-gray-900">
      <div className="w-[568px] mx-auto py-16">
        <div className=" h-[580px] border-2 border-white px-5 py-5 rounded-md">
          <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="tilte"
                className="border-2 border-white px-1 py-2"
                onChange={(e) => setTitle(e.target.value)}
              />
              <button className="border-2 border-white px-1 py-2 bg-gray-700 text-white">
                create title
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center items-center mt-10 text-white">
            {mySlugs.map((data, index) => (
              <div key={index}>
                <p>{index + 1}</p>
                <h1>{data.title}</h1>
                <h1>{data.slug}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
