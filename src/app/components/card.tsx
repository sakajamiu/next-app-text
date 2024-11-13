import Image from 'next/image';
import Link from 'next/link';

export interface CardProps {
  firstName: string;
  image: string;
  lastName: string;
  age: string;
  id: string;
}

export default function Card({ firstName, lastName, image, age, id }: CardProps) {
  return (
    <div className="w-full max-w-sm bg-gray-800 hover:bg-gray-700 border  border-gray-700  rounded-lg shadow  ">
      <div className="flex flex-col items-center py-10 ">
        <Image
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={image}
          width={96}
          priority={false}
          height={96}
          alt="profile image"
        />
        <h5 className="mb-1 text-xl font-medium text-white ">
          {firstName} {lastName}
        </h5>
        <span className="text-sm text-gray-400 ">{age}</span>
        <div className="flex mt-4 md:mt-6">
          <Link
            href={`/user/${id}`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 "
          >
            View Detail
          </Link>
        </div>
      </div>
    </div>
  );
}
