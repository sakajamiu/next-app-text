import customGet from './lib/customGet';

import Card, { CardProps } from './components/card';

export default async function Home() {
  const users = await customGet('users?limit=10');

  return (
    <div className="grid  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className=" w-full lg:w-[80%] grid gap-20  grid-col-1 md:grid-cols-2 ">
        {users?.users?.map((user: CardProps) => (
          <Card
            key={user?.id}
            id={user?.id}
            firstName={user?.firstName}
            lastName={user?.lastName}
            age={user?.age}
            image={user?.image}
          />
        ))}
      </div>
    </div>
  );
}
