import axios from "axios";
import { useEffect, useRef, useState } from "react";
import type { ReqResUserListResponse, User } from "../interfaces";

const logUsers = async (page: number = 1) => {
  try {
    const { data } = await axios.get<ReqResUserListResponse>(
      "https://reqres.in/api/users",
      {
        params: {
          page: page,
        },
      }
    );

    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const useUsers = () => {
  const [users, setUsers] = useState<User[] | undefined>([]);
  const currentPageRef = useRef(1);

  useEffect(() => {
    logUsers(currentPageRef.current).then(setUsers);
  }, []);

  const nextPage = async () => {
    currentPageRef.current++;
    const users = await logUsers(currentPageRef.current);

    if (users.length > 0) {
      setUsers(users);
    } else {
      currentPageRef.current--;
    }
  };

  const prevPage = async () => {
    if (currentPageRef.current < 1) return;

    currentPageRef.current--;
    const users = await logUsers(currentPageRef.current);

    setUsers(users);
  };

  return {
    users,
    nextPage,
    prevPage,
  };
};
