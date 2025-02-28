import { useState } from "react";
import { Video, Upload, Dessert } from "lucide-react";
import { AgeGroups, type TutorProfile } from "../../types/tutor";
import { useQuery } from "@tanstack/react-query";
import { getTutorById } from "@/api/tutorAPi";
import HeaderSection from "@/components/tutor/HeaderSection";
import { useAuth } from "@/hooks/useAuth";
import Sidebar from "@/components/tutor/Siderbar";
import DescriptionSection from "@/components/tutor/DescriptionSection";

// Mock data for demonstration
const initialProfile: TutorProfile = {
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop",
    phone: "+1 (555) 123-4567",
    timezone: "GMT-5 (Eastern Time)",
    videoLink: "https://www.youtube.com/watch?v=7Qpq4Hcb62U",
    videoThumbnail:
        "https://images.unsplash.com/photo-1605711285791-0219e80e43a3?w=800&h=400&fit=crop",
    birthCountry: "United States",
    yearsOfExperience: 7,
    introduce_yourself:
        "I'm a passionate language tutor with a love for helping students achieve their goals.",
    teaching_experience:
        "I've taught students from diverse backgrounds, focusing on conversational fluency.",
    motivate_student:
        "I believe in creating an engaging and supportive learning environment.",
    catchy_title: "Learn naturally and effectively with a native speaker!",
    studentLevels: [
        { id: 1, name: "beginner", checked: true },
        { id: 2, name: "pre_beginner", checked: true },
        { id: 3, name: "intermediate", checked: true },
        { id: 4, name: "upper_intermediate", checked: false },
        { id: 5, name: "advanced", checked: false },
        { id: 6, name: "not_specified", checked: false }
    ],
    ageGroups: [AgeGroups.PRIMARY, AgeGroups.HIGHSCHOOL, AgeGroups.STUDENTS]
};

function UpdateProfile() {
    const [profile, setProfile] = useState<TutorProfile>(initialProfile);
    const auth = useAuth();

    const { data } = useQuery({
        queryKey: ["tutor", auth.data?.Tutor?.id],
        queryFn: () => getTutorById(auth.data?.Tutor?.id!),
        enabled: !!auth.data?.Tutor?.id
    });

    const handleStudentLevelChange = (levelId: number) => {
        setProfile((prev) => ({
            ...prev,
            studentLevels: prev.studentLevels.map((level) =>
                level.id === levelId
                    ? { ...level, checked: !level.checked }
                    : level
            )
        }));
    };

    const handleAgeGroupToggle = (group: AgeGroups) => {
        setProfile((prev) => ({
            ...prev,
            ageGroups: prev.ageGroups.includes(group)
                ? prev.ageGroups.filter((g) => g !== group)
                : [...prev.ageGroups, group]
        }));
    };

    if (data)
        return (
            <div className="min-h-screen bg-gray-50 ">
                <div className="flex">
                    {/* Sidebar */}
                    <Sidebar data={data} />
                    <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            {/* Header Section */}
                            <HeaderSection data={data} />

                            {/* Video Section */}
                            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-xl font-semibold flex items-center mb-4">
                                    <Video className="w-5 h-5 mr-2" />
                                    Introduction Video
                                </h2>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Video Link
                                        </label>
                                        <input
                                            type="url"
                                            value={profile.videoLink}
                                            onChange={(e) =>
                                                setProfile((prev) => ({
                                                    ...prev,
                                                    videoLink: e.target.value
                                                }))
                                            }
                                            placeholder="Enter your video URL"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Video Thumbnail
                                        </label>
                                        <div className="relative">
                                            <img
                                                src={profile.videoThumbnail}
                                                alt="Video thumbnail"
                                                className="w-full aspect-video rounded-lg object-cover"
                                            />
                                            <button className="absolute bottom-4 right-4 px-3 py-1.5 bg-white text-gray-700 rounded-lg shadow-md hover:bg-gray-50 flex items-center text-sm font-medium">
                                                <Upload className="w-4 h-4 mr-2" />
                                                Change Thumbnail
                                            </button>
                                        </div>
                                    </div>

                                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                        Save Changes
                                    </button>
                                </div>
                            </div>

                            {/* Description Sections */}
                            <DescriptionSection data={data} />

                            {/* Student Levels */}
                            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-xl font-semibold mb-4">
                                    Student Levels
                                </h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {profile.studentLevels.map((level) => (
                                        <div
                                            key={level.id}
                                            className="flex items-center space-x-2"
                                        >
                                            <input
                                                type="checkbox"
                                                id={`level-${level.id}`}
                                                checked={level.checked}
                                                onChange={() =>
                                                    handleStudentLevelChange(
                                                        level.id
                                                    )
                                                }
                                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                            />
                                            <label
                                                htmlFor={`level-${level.id}`}
                                                className="text-sm font-medium text-gray-700"
                                            >
                                                {level.name
                                                    .replace("_", " ")
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                    level.name.slice(1)}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Age Groups */}
                            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-xl font-semibold mb-4">
                                    Age Groups
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {Object.values(AgeGroups).map((group) => (
                                        <button
                                            key={group}
                                            onClick={() =>
                                                handleAgeGroupToggle(
                                                    group as AgeGroups
                                                )
                                            }
                                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                                                profile.ageGroups.includes(
                                                    group as AgeGroups
                                                )
                                                    ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
                                                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                            }`}
                                        >
                                            {group}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default UpdateProfile;
