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
        
      </div>
    );
  };
  
  export default UserRecords;