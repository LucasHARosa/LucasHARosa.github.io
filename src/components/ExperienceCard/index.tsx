import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";


interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  image: string;
}

export const TimelineItem = ({
  year,
  title,
  company,
  description,
  tags,
  image,
}: TimelineItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
      
      {/* Timeline dot */}
      <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
      
      {/* Content */}
      <div 
        className={`ml-6 transform transition-all duration-300 ${
          isExpanded ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-90"
        }`}
      >
        <div 
          className="group cursor-pointer rounded-xl bg-black/40 p-4 backdrop-blur-lg transition-all hover:bg-black/50"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-light text-blue-400">{year}</span>
            <button className="text-gray-400 hover:text-white">
              {isExpanded ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
            </button>
          </div>
          
          <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
          <p className="text-blue-300">{company}</p>
          
          {/* Expandable content */}
          <div
            className={`grid transition-all duration-300 ${
              isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="pt-4">
                <img 
                  src={image} 
                  alt={title}
                  className="mb-4 h-48 w-full rounded-lg object-cover"
                />
                <p className="mb-4 text-gray-300">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};