import { students } from "@/data/students";

export const GradeTable = () => {

  return (
    <div className="container mx-auto flex flex-col justify-center items-center mt-3">
      <table className="w-full mx-2 bg-gray-500 rounded-lg">
        <thead className="bg-blue-900 text-left">
          <tr>
            <th className=" rounded-tl-lg p-3">Name</th>
            <th>Status</th>
            <th>Grade 1</th>
            <th>Grade 2</th>
            <th className="rounded-tr-lg">Final Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-600">
            <td>
              <div className="flex items-center p-3">
                <img className="h-10 rounded-full" src={students[0].avatar} alt="imagem de perfil" />
                <div className="flex-col flex ml-3 text-sm">
                  <p>{students[0].name}</p>
                  <p>{students[0].email}</p>
                </div>
              </div>
            </td>
            <td>
              {students[0].active && <div className="px-3 py-2 inline-block rounded-md border border-green-800 bg-green-600 text-white text-xs">Active</div>}
              {!students[0].active && <div className="px-3 py-2 inline-block rounded-md border border-red-800 bg-red-600 text-white text-xs">Inactive</div>}
            </td>
            <td>
              <div>{students[0].grade1}</div>
            </td>
            <td>
              <div>{students[0].grade2}</div>
            </td>
            <td>
              <div>{students[0].active ? ((students[0].grade1 + students[0].grade2) / 2).toFixed(1) : '--'}</div>
            </td>
          </tr>
          <tr className="border-b border-gray-600">
            <td>
              <div className="flex items-center p-3">
                <img className="h-10 rounded-full" src={students[1].avatar} alt="imagem de perfil" />
                <div className="flex-col flex ml-3 text-sm">
                  <p>{students[1].name}</p>
                  <p>{students[1].email}</p>
                </div>
              </div>
            </td>
            <td>
              {students[1].active && <div className="px-3 py-2 inline-block rounded-md border border-green-800 bg-green-600 text-white text-xs">Active</div>}
              {!students[1].active && <div className="px-3 py-2 inline-block rounded-md border border-red-800 bg-red-600 text-white text-xs">Inactive</div>}
            </td>
            <td>
              <div>{students[1].grade1}</div>
            </td>
            <td>
              <div>{students[1].grade2}</div>
            </td>
            <td>
              <div>{students[1].active ? ((students[1].grade1 + students[1].grade2) / 2).toFixed(1) : '--'}</div>
            </td>
          </tr>
          <tr className="border-b border-gray-600">
            <td>
              <div className="flex items-center p-3">
                <img className="h-10 rounded-full" src={students[2].avatar} alt="imagem de perfil" />
                <div className="flex-col flex ml-3 text-sm">
                  <p>{students[2].name}</p>
                  <p>{students[2].email}</p>
                </div>
              </div>
            </td>
            <td>
            {students[2].active && <div className="px-3 py-2 inline-block rounded-md border border-green-800 bg-green-600 text-white text-xs">Active</div>}
              {!students[2].active && <div className="px-3 py-2 inline-block rounded-md border border-red-800 bg-red-600 text-white text-xs">Inactive</div>}
            </td>
            <td>
              <div>{students[2].grade1}</div>
            </td>
            <td>
              <div>{students[2].grade2}</div>
            </td>
            <td>
              <div>{students[2].active ? ((students[2].grade1 + students[2].grade2) / 2).toFixed(1) : '--'}</div>
            </td>
          </tr>
          <tr className="border-b border-gray-600">
            <td>
              <div className="flex items-center p-3">
                <img className="h-10 rounded-full" src={students[3].avatar} alt="imagem de perfil" />
                <div className="flex-col flex ml-3 text-sm">
                  <p>{students[3].name}</p>
                  <p>{students[3].email}</p>
                </div>
              </div>
            </td>
            <td>
            {students[3].active && <div className="px-3 py-2 inline-block rounded-md border border-green-800 bg-green-600 text-white text-xs">Active</div>}
              {!students[3].active && <div className="px-3 py-2 inline-block rounded-md border border-red-800 bg-red-600 text-white text-xs">Inactive</div>}
            </td>
            <td>
              <div>{students[3].grade1}</div>
            </td>
            <td>
              <div>{students[3].grade2}</div>
            </td>
            <td>
              <div>{students[3].active ? ((students[3].grade1 + students[3].grade2) / 2).toFixed(1) : '--'}</div>
            </td>
          </tr>
          <tr className="border-b border-gray-600">
            <td>
              <div className="flex items-center p-3">
                <img className="h-10 rounded-full" src={students[4].avatar} alt="imagem de perfil" />
                <div className="flex-col flex ml-3 text-sm">
                  <p>{students[4].name}</p>
                  <p>{students[4].email}</p>
                </div>
              </div>
            </td>
            <td>
            {students[4].active && <div className="px-3 py-2 inline-block rounded-md border border-green-800 bg-green-600 text-white text-xs">Active</div>}
              {!students[4].active && <div className="px-3 py-2 inline-block rounded-md border border-red-800 bg-red-600 text-white text-xs">Inactive</div>}
            </td>
            <td>
              <div>{students[4].grade1}</div>
            </td>
            <td>
              <div>{students[4].grade2}</div>
            </td>
            <td>
            <div>{students[4].active ? ((students[4].grade1 + students[4].grade2) / 2).toFixed(1) : '--'}</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center p-3">
                <img className="h-10 rounded-full" src={students[5].avatar} alt="imagem de perfil" />
                <div className="flex-col flex ml-3 text-sm">
                  <p>{students[5].name}</p>
                  <p>{students[5].email}</p>
                </div>
              </div>
            </td>
            <td>
            {students[5].active && <div className="px-3 py-2 inline-block rounded-md border border-green-800 bg-green-600 text-white text-xs">Active</div>}
              {!students[5].active && <div className="px-3 py-2 inline-block rounded-md border border-red-800 bg-red-600 text-white text-xs">Inactive</div>}
            </td>
            <td>
              <div>{students[5].grade1}</div>
            </td>
            <td>
              <div>{students[5].grade2}</div>
            </td>
            <td>
              <div>{students[5].active ? ((students[5].grade1 + students[5].grade2) / 2).toFixed(1) : '--'}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}