import { useState, useEffect } from "react";
import axios from "../apis/dummyAPI";
import TableUser from "../components/TableUser";
import Pagination from "../components/Pagination";

export default function Home() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  const fetchUserData = async () => {
    try {
      setLoading(true)
      const response = await axios({
        method: "GET",
        url: "/user",
        headers: {
          "app-id": "61cb149f03180b742012b298",
        },
      });
      console.log(response.data.data);
      setUserData(response.data.data);
      setLoading(false)
    } catch (error) {
      console.log(error, "error fetchuserdata");
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = userData.slice(indexOfFirstUser, indexOfLastUser);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  if(loading){
    return(
      <div>loading...</div>
    )
  }
  return (
    <>
      <div className="w-full h-screen overflow-auto">
        <h1>Home</h1>
        {/* search bar */}

        {/* content */}
        <TableUser userData={currentUsers}></TableUser>
        <div className="flex-col">
          <Pagination
          postsPerPage={usersPerPage}
          totalPosts={userData.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        </div>


      </div>
    </>
  );
}
