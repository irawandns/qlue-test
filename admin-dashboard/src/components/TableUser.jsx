export default function TableUser(props) {
  return (
    <>
    <div className="w-full overflow-auto px-5 py-5">
      <table className="table-auto w-full text-left whitespace-no-wrap border-2">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 ">Profile Picture</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 ">First Name</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 ">Last Name</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 ">Gender</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 ">Detail</th>
          </tr>
        </thead>
        <tbody>
          {props.userData.map((user) => {
            return (
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={user.picture} />
                </td>
                <td className="border-t-2 border-gray-200 px-4 py-3">{user.firstName}</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">{user.lastName}</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">{(user.title === 'mr' ? 'male' : 'female')}</td>
                <td className="border-t-2 border-gray-200 px-4 py-3"><button className="bg-blue-900 rounded-md py-1 px-2 text-white">Detail</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </>
  );
}
