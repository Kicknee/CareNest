import Image from "next/image";
import Link from "next/link";
import { nanniesData } from "@/app/lib/data";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const getRatingStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={i} className="text-yellow-400">
        ★
      </span>,
    );
  }
  while (stars.length < 5) {
    stars.push(
      <span key={stars.length} className="text-gray-300">
        ★
      </span>,
    );
  }
  return stars;
};

const SingleBabysitterPage = () => {
  const nannyProfile = nanniesData[3];
  return (
    <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white p-7 shadow-xl">
      {/* The main section with basic infor*/}
      <div className="flex flex-col items-center justify-center gap-7 py-5 md:h-[250px] md:flex-row">
        <div className="w-1/3 min-w-[144px] md:w-1/4">
          {nannyProfile.photoUrl && (
            <Image
              src={nannyProfile.photoUrl}
              alt="Nanny Photo"
              width={144}
              height={144}
              className="h-full w-auto rounded-full object-cover"
            />
          )}
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-2xl leading-tight font-extrabold text-gray-900 md:text-4xl">
            {nannyProfile.firstName} {nannyProfile.lastName}
          </h1>
          <p className="mt-2 text-lg font-semibold text-gray-600">
            {nannyProfile.age} years, {nannyProfile.city}
          </p>

          <div className="mt-4 flex items-center justify-center md:justify-start">
            <span className="text-lg">
              {getRatingStars(nannyProfile.rating.average)}
            </span>
            <span className="ml-2 text-base font-medium text-gray-700">
              {nannyProfile.rating.average.toFixed(1)}/5
            </span>
            <span className="ml-2 text-base text-gray-500">
              ({nannyProfile.rating.reviewsCount} reviews)
            </span>
          </div>

          <div className="mt-6 flex flex-col items-center space-y-3 text-lg md:items-start">
            <div className="flex items-center space-x-2 text-lg text-gray-700">
              <span>
                <FiPhone />
              </span>
              <span>{nannyProfile.contact.phone}</span>
            </div>
            <div className="flex items-center space-x-2 text-lg text-gray-700">
              <span>
                <AiOutlineMail />
              </span>
              <span>{nannyProfile.contact.email}</span>
            </div>
          </div>
        </div>
      </div>

      {/* The section with description and experience */}
      <div className="border-t border-gray-200 px-8 py-8 sm:px-12 sm:py-10">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">About Me</h2>
        <p className="leading-relaxed whitespace-pre-line text-gray-700">
          {nannyProfile.description}
        </p>
        <div className="mt-6 flex flex-col gap-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Key Details</h2>

          <div className="flex flex-col flex-wrap gap-5 md:flex-row md:items-center md:gap-x-30">
            <div className="flex text-lg font-medium text-gray-800 md:w-1/2">
              <span className="w-1/2 md:w-auto">Location: </span>
              <span className="ml-5 text-gray-500">{nannyProfile.city}</span>
            </div>
            <div className="flex text-lg font-medium text-gray-800 md:w-1/2">
              <span className="w-1/2 md:w-auto">Age: </span>
              <span className="ml-5 text-gray-500">{nannyProfile.age}</span>
            </div>
            <div className="flex text-lg font-medium text-gray-800 md:w-1/2">
              <span className="w-1/2 md:w-auto">Experience: </span>
              <span className="ml-5 text-gray-500">
                {nannyProfile.experienceYears === 1
                  ? `${nannyProfile.experienceYears} year`
                  : `${nannyProfile.experienceYears} years`}
              </span>
            </div>
            <div className="flex text-lg font-medium text-gray-800 md:w-1/2">
              <span className="w-1/2 md:w-auto">Hourly Rate: </span>
              <span className="ml-5 text-gray-500">
                {nannyProfile.hourlyRate}/hour
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBabysitterPage;
