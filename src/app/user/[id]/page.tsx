import Image from 'next/image';
import BriefcaseIcon from '@/app/icons/briefcase';
import LocationIcon from '@/app/icons/location';
import Column from '@/app/components/column';
import customGet from '@/app/lib/customGet';
import Link from 'next/link';

export default async function UserDetails({ params }: { params: { id: string } }) {
  const { id } = await params;
  const user = await customGet(`/user/${id}`);

  return (
    <div className="bg-[#111827] min-h-screen p-8 pb-20  sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full space-y-4">
        <div className="inline-flex space-x-3">
          <p className="text-white text-[1.5rem] leading-[2rem] font-[600]">Profile </p>
          <Link href="/" className="text-[#63829e] text-[1.5rem] leading-[2rem] font-[600]">
            {' '}
            / Back
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between space-y-4 lg:space-y-0">
          <div className="bg-[#1f2937] rounded-lg w-full lg:w-[40%] space-y-3 p-5">
            <Image
              className="w mb-3 rounded-lg shadow-lg"
              src={user?.image}
              width={80}
              height={80}
              alt="Profile image"
            />
            <p className="text-white text-[1.25rem] font-[700]">
              {user?.firstName} {user?.maidenName} {''} {user?.lastName}
            </p>

            <div className="flex space-x-3 text-white">
              <BriefcaseIcon />
              <p className="text-[#63829e] text-sm">{user?.company?.title}</p>
            </div>

            <div className="flex space-x-3 text-white">
              <LocationIcon />
              <p className="text-[#63829e] text-sm">
                {user?.company?.address?.city} , {user?.company?.address?.country}
              </p>
            </div>
            <Column title="Email Address" subtitle={user?.email} />
            <Column
              title="Home Address"
              subtitle={`${user?.address?.address}, ${user?.address?.city}, ${user?.address?.state}, ${user?.address?.country}`}
            />
            <Column title="Phone Number" subtitle={user?.phone} />
          </div>
          <div className="bg-[#1f2937] rounded-lg w-full lg:w-[57%] space-y-3 p-5">
            <p className="text-white font-[700] text-[1.25rem] leading-[1.75rem]">
              General Information
            </p>
            <div className=" grid  grid-cols-1 md:grid-cols-2 gap-x-8 ">
              <Column title="UserName" subtitle={user?.username} />
              <Column title="Gender" subtitle={user?.gender} />
              <Column title="Education" subtitle={user?.university} />
              <Column
                title="Description"
                subtitle={`H:${user?.height}, ${' '} W: ${user?.weight}, ${' '} hair: ${user?.hair?.color} - ${user?.hair?.type} `}
              />
              <Column title="Birthday" subtitle={user?.birthDate} />
              <Column title=" Social Security Number" subtitle={user?.ssn} />
              <Column title="Company" subtitle={user?.company?.name} />
              <Column
                title="Company Address"
                subtitle={`${user?.company?.address?.address}, ${' '} ${user?.company?.address?.city}, ${' '} ${user?.company?.address?.state}, ${' '} ${user?.address?.country} `}
              />
              <Column title="Department" subtitle={user?.company?.department} />
              <Column title="Title" subtitle={user?.company?.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
