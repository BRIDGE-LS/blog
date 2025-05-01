import { CustomImage } from "@/components/image";
import { profiles } from "@/data/profiles";

export const CollaboratorsSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-serif text-4xl text-primary font-normal">Collaborators</h1>
      <div className="w-full flex flex-wrap gap-4 justify-center items-center pt-6  font-sans">
        {profiles.map((profile) => (
          <div key={profile.name} className="flex flex-col items-center justify-center">
            <CustomImage src={profile.image} alt={profile.name} width={176} height={176} />
            <span className="text-xl text-gray-500">{profile.name}</span>
            <span className="text-sm text-gray-400">{profile.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
