"use client";

import { useUrl } from "@/hooks/useUrl";
import { usePathname, useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const PropertyTypeSelector = () => {
  const [isMainVisible, setIsMainVisible] = useState(true);
  const [showAllTags, setShowAllTags] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const router=useRouter()
  const tags = [
    "Resident",
    "Commercial",
    "Industrial",
    "Agricultural",
  
    "Other",
  ];
  const maxVisibleTags = 5;

  const toggleMainVisible = () => {
    setIsMainVisible(!isMainVisible);
  };

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const toggleShowAllTags = () => {
    setShowAllTags(!showAllTags);
  };
 // const url = useUrl();
  //const getQuery=url.split
  //console.log(url);
const pathname = usePathname()
  
  useEffect(() => {
    const propertyType = selectedTags.join(",");
     

    router.push(`?property-type=${propertyType}`, undefined, { shallow: true });
    

  }, [selectedTags]);
  
   return (
    <div>
      <div
        className="flex items-center justify-between cursor-pointer mt-6"
        onClick={toggleMainVisible}
      >
        <p className="text-gray-900 text-lg">Property Type</p>
        {isMainVisible ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {isMainVisible && (
        <div className="mt-2 flex flex-wrap gap-4">
          {tags
            .slice(0, showAllTags ? tags.length : maxVisibleTags)
            .map((tag) => (
              <div
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`cursor-pointer px-4 py-1 border rounded-full w-fit ${
                  selectedTags.includes(tag)
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 border-[1px] border-gray-600"
                }`}
              >
                + {tag}
              </div>
            ))}
          {tags.length > maxVisibleTags && (
            <div
              className="cursor-pointer py-1 text-blue-600"
              onClick={toggleShowAllTags}
            >
              {showAllTags
                ? "Show less"
                : `+${tags.length - maxVisibleTags} more`}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PropertyTypeSelector;
