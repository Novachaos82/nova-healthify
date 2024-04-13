"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { ICsvData } from "@/model/data";
import Image from "next/image";

const SearchResultPage = () => {
  const searchParams = useSearchParams();
  const [searchResults, setSearchResults] = useState<ICsvData[]>([]);

  useEffect(() => {
    const productName = searchParams.get("productName");
    if (productName) {
      fetchSearchResults(productName);
    }
  }, [searchParams]);

  const fetchSearchResults = async (productName: string) => {
    try {
      const response = await fetch(`/api/searchbar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productName }),
      });

      if (response.ok) {
        const { data } = await response.json();
        setSearchResults(data);
      } else {
        console.error("Error fetching search results");
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const getNovaGroupColor = (novaGroup: string) => {
    switch (novaGroup) {
      case "Unprocessed or minimally processed foods":
        return "text-green-500";
      case "Processed culinary ingredients":
        return "text-blue-500";
      case "Processed foods":
        return "text-yellow-500";
      case "Ultra processed foods":
        return "text-red-500";
      default:
        return "text-white";
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col text-white rounded-lg gap-4 justify-center">
        <h1 className="text-2xl font-bold mb-4">Search Results</h1>
        {searchResults?.map((result, index) => (
          <div
            key={index}
            className="bg-black text-white p-4 rounded-lg shadow-md"
          >
            <p className="font-bold mb-2">Brand Name: {result["BRAND NAME"]}</p>
            <p className="mb-2">Product Name: {result["PRODUCT NAME"]}</p>
            <p className="mb-2">Category: {result.CATEGORY}</p>
            <p className="mb-2">Subcategory: {result.SUBCATEGORY}</p>
            <p className="mb-2">Ingredients: {result.INGREDIENTS}</p>
            <p className={`mb-2 ${getNovaGroupColor(result["NOVA Group"])}`}>
              Nova Group: {result["NOVA Group"]}
            </p>
            <div className="flex justify-center">
              <Image
                src={result["Image Links"]}
                alt="product"
                width={150}
                height={150}
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </Suspense>
  );
};

export default SearchResultPage;
