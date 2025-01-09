interface UserRecord {
    name: string;
    borrowedBooks: string[];
  }
  
  interface UserRecordsProps {
    userRecords: UserRecord[];
  }
  
  const UserRecords: React.FC<UserRecordsProps> = ({ userRecords }) => {
    return (
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-6">
         <h2 className="text-lg font-bold mb-4">User Records</h2>
      {userRecords.length === 0 ? (
        <p className="text-gray-500">No users have borrowed books.</p>
      ) : (
        <ul className="space-y-3">
          {userRecords.map((record, index) => (
            <li key={index} className="border-b pb-2">
              <strong className="text-lg">{record.name}</strong>:{" "}
              <span className="text-gray-600">{record.borrowedBooks.join(", ")}</span>
            </li>
          ))}
        </ul>
      )}

      </div>
    );
  };
  
  export default UserRecords;