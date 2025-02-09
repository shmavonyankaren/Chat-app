import React, { useEffect, useState } from "react";
import { useChatContext } from "stream-chat-react";
import { ListContainer, UserItem } from "./";

export default function UserList({ setSelectedUsers }) {
  const { client } = useChatContext();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listEmpty, setListEmpty] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      if (loading) return;

      setLoading(true);

      try {
        const response = await client.queryUsers(
          {
            id: { $ne: client.userID },
          },
          { id: 1 },
          { limit: 8 }
        );

        if (response.users.length) {
          setUsers(response.users);
        } else {
          setListEmpty(true);
        }
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    if (client) getUsers();
  }, []);

  if (error)
    return (
      <ListContainer>
        <div className="user-list__message">
          Error loading, please refresh and try again.
        </div>
      </ListContainer>
    );
  if (listEmpty)
    return (
      <ListContainer>
        <div className="user-list__message">No users found.</div>
      </ListContainer>
    );
  return (
    <ListContainer>
      {loading ? (
        <div className="user-list__message"> Loading user...</div>
      ) : (
        users?.map((user, i) => (
          <UserItem
            key={user.id}
            index={i}
            user={user}
            setSelectedUsers={setSelectedUsers}
          />
        ))
      )}
    </ListContainer>
  );
}
