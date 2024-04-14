"use client";
import { Search } from "lucide-react";
import { FC, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface SearchComponentProps {}

const SearchComponent: FC<SearchComponentProps> = ({}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const delaySearch = setTimeout(async () => {
      if (searchTerm) {
        const response = await fetch("/api/search", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ searchTerm }),
        });

        if (response.ok) {
          const { suggestions: data } = await response.json();
          setSuggestions(data);
        } else {
          console.error("Error fetching suggestions");
        }
      } else {
        setSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [searchTerm]);

  const handleSearch = () => {
    router.push(`/search-result?productName=${searchTerm}`);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="bg-white rounded-full border-black border-[1px] outline-none p-4 min-w-[600px]"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {suggestions.length > 0 && (
        <ul className="absolute bg-white shadow-md rounded-md w-full mt-2 z-10 max-h-[200px] overflow-y-scroll">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => setSearchTerm(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      <div
        className="bg-black w-[50px] h-[50px] rounded-full flex justify-center items-center absolute top-1 right-2 cursor-pointer"
        onClick={handleSearch}
      >
        <Search stroke="white" />
      </div>
    </div>
  );
};

export default SearchComponent;
