function UserProfile() {
  return (
    <div className="user-profile hover:shadow-xl bg-gray-100 p-8 md:max-w-sm sm:max-w-xs mx-auto sm:p-4 md:p-8 my-20 md:rounded-lg shadow-lg">
      <img
        className="rounded-full md:w-36 md:h-36 mx-auto sm:w-24 sm:h-24 hover:scale-110 transition-transform duration-300 ease-in-out"
        src="https://via.placeholder.com/150"
        alt="User"
      />
      <h1 className="text-xl hover:text-blue-500 text-blue-800 sm:text-lg md:text-xl my-4">
        John Doe
      </h1>
      <p className="text-gray-600 md:text-base sm:text-sm ">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
