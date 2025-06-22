import {client} from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();
  return (
    <div>
      <h1>Welcome,nazeer checking deployment {user?.userName}!</h1>
      {user?.password}
    </div>
  );
}

// export default function Home() {
//   return (
//     <div>
//       <h1>Welcome to the Home Page!</h1>
//       <p>This is a placeholder for your application.</p>
//     </div>
//   );
// } 