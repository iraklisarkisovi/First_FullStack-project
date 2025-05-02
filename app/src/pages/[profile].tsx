import React, { useEffect, useState } from "react";
import { GETUser } from "./api/hello";
import { useRouter } from "next/router";
import { dataType } from ".";

const Profile = () => {
  const [user, setUser] = useState<dataType | null>(null);
  const router = useRouter();
  const { profile } = router.query; 

  useEffect(() => {
    if (profile) {
      const getUser = async () => {
        try {
          const userData = await GETUser(profile as string);
          setUser(userData);
        } catch (err) {
          console.log(err);
        }
      };

      getUser();
    }
  }, [profile]); 

  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.personal.name}</h1>
          <p>Email: {user.email}</p>
          <p>Number: {user.personal.number}</p>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
};

export default Profile;
