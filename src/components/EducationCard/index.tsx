interface EducationCardProps {
  institution: string;
  course: string;
  period: string;
  description: string;
  image: string;
}

export const EducationCard = ({
  institution,
  course,
  period,
  description,
  image,
}: EducationCardProps) => {
  return (
    <div className="w-80 shrink-0 transform cursor-pointer rounded-xl bg-black/40 p-6 backdrop-blur-lg transition-all hover:scale-105 hover:bg-black/50">
      <img 
        src={image} 
        alt={institution}
        className="mb-4 h-40 w-full rounded-lg object-cover"
      />
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-white">{course}</h3>
        <p className="text-blue-400">{institution}</p>
        <p className="text-sm text-gray-400">{period}</p>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};