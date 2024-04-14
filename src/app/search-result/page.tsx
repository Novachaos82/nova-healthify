"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
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
    <div className=" flex flex-col text-black rounded-lg gap-4 justify-center max-w-[1200px] mx-auto">
      <h1 className="text-[96px] text-[#3C3633] font-bold  ">Result</h1>
      {searchResults?.map((result, index) => (
        <div key={index} className="space-y-4 my-10">
          <h1 className="text-[24px] text-[#747264] font-semibold">
            Results for &quot;
            {result["PRODUCT NAME"]}
            &quot;
          </h1>
          <div className="flex justify-between bg-white border-black border-[2px] text-black p-4 rounded-xl  mx-auto mb-10  w-full px-16 py-8 ">
            <div className="flex flex-col justify-center text-[18px] w-[60%]">
              <p className=" mb-2">
                <span className="font-bold">Brand Name: </span>
                {result["BRAND NAME"]}
              </p>
              <p className="mb-2">
                <span className="font-bold">Product Name: </span>{" "}
                {result["PRODUCT NAME"]}
              </p>
              <p className="mb-2">
                <span className="font-bold">Category: </span> {result.CATEGORY}
              </p>
              <p className="mb-2">
                <span className="font-bold">Subcategory: </span>{" "}
                {result.SUBCATEGORY}
              </p>
              <p className="mb-2">
                <span className="font-bold">Ingredients: </span>{" "}
                {result.INGREDIENTS}
              </p>
              <p className={`mb-2 ${getNovaGroupColor(result["NOVA Group"])}`}>
                <span className="font-bold">Nova Group: </span>
                {result["NOVA Group"]}
              </p>
            </div>
            <div className="flex justify-center ">
              <Image
                src={result["Image Links"]}
                alt="product"
                width={150}
                height={150}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResultPage;
